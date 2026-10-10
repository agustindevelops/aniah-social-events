import {
  calculateAtHomeExperienceQuote,
  earliestBookableDate,
  isValidGuestCount,
} from "@/lib/booking/atHomeExperience";
import type { FurnitureChoice } from "@/lib/booking/draft";
import { AT_HOME_EXPERIENCE_ROUTE } from "@/utils/content/schedule";

/** What the package page hands to /schedule/at-home-experience through the URL. */
export type AtHomeSelection = {
  furniture: FurnitureChoice;
  guestCount: number;
  eventDate: string;
};

export type PartialAtHomeSelection = {
  [K in keyof AtHomeSelection]: AtHomeSelection[K] | null;
};

export type SearchParams = Record<string, string | string[] | undefined>;

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

const single = (value: string | string[] | undefined) =>
  typeof value === "string" ? value : undefined;

function isCalendarDate(value: string): boolean {
  return (
    DATE_PATTERN.test(value) &&
    new Date(`${value}T12:00:00Z`).toISOString().slice(0, 10) === value
  );
}

/** Values from the URL; anything missing, malformed or too soon becomes null. */
export function parseAtHomeSelection(
  params: SearchParams,
  earliestDate: string = earliestBookableDate()
): PartialAtHomeSelection {
  const furniture = single(params.furniture);
  const guestCount = Number(single(params.guests));
  const eventDate = single(params.date);
  return {
    furniture: furniture === "OURS" || furniture === "CLIENT" ? furniture : null,
    guestCount: isValidGuestCount(guestCount) ? guestCount : null,
    eventDate:
      eventDate && isCalendarDate(eventDate) && eventDate >= earliestDate
        ? eventDate
        : null,
  };
}

export function isCompleteSelection(
  selection: PartialAtHomeSelection
): selection is AtHomeSelection {
  return (
    selection.furniture !== null &&
    selection.guestCount !== null &&
    selection.eventDate !== null
  );
}

function selectionParams(selection: PartialAtHomeSelection): URLSearchParams {
  const params = new URLSearchParams();
  if (selection.eventDate) params.set("date", selection.eventDate);
  if (selection.furniture) params.set("furniture", selection.furniture);
  if (selection.guestCount) params.set("guests", String(selection.guestCount));
  return params;
}

export function atHomeScheduleHref(
  packageSlug: string,
  selection: AtHomeSelection
): string {
  const params = new URLSearchParams({ package: packageSlug });
  selectionParams(selection).forEach((value, key) => params.set(key, value));
  return `${AT_HOME_EXPERIENCE_ROUTE}?${params}`;
}

/** The package page, preselected with whatever the customer already chose. */
export function packagePageHref(
  packageSlug: string,
  selection: PartialAtHomeSelection
): string {
  const query = selectionParams(selection).toString();
  const path = `/at-home-experiences/${encodeURIComponent(packageSlug)}`;
  return query ? `${path}?${query}` : path;
}

/** Package price before access, pickup or travel fees, which are chosen later. */
export function atHomePackageCents(
  furniture: FurnitureChoice,
  guestCount: number
): number {
  return calculateAtHomeExperienceQuote({
    guestCount,
    usesClientFurniture: furniture === "CLIENT",
    accessType: "STANDARD",
    isLateNightPickup: false,
  }).quotedTotalCents;
}
