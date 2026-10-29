import type { PublicPackageVariant } from "@/lib/ase-admin/packages";
import {
  calculateAtHomeExperienceQuote,
  earliestBookableDate,
  isValidGuestCount,
} from "@/lib/booking/atHomeExperience";
import { BOOKING_FORM_YOUR_TABLES } from "@/lib/booking/draft/derived";
import { AT_HOME_EXPERIENCES } from "@/utils/content/offerings";
import { AT_HOME_EXPERIENCE_ROUTE } from "@/utils/content/schedule";

/** What the package page hands to /schedule/intimate-celebration through the URL. */
export type AtHomeSelection = {
  variantId: string;
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

function resolveVariantId(
  params: SearchParams,
  variants: PublicPackageVariant[]
): string | null {
  const variantId = single(params.variant);
  if (variantId && variants.some((row) => row.id === variantId)) {
    return variantId;
  }

  // Old links used furniture=OURS|CLIENT before variants existed.
  const furniture = single(params.furniture);
  if (furniture === "CLIENT") {
    return (
      variants.find((row) => row.forms.includes(BOOKING_FORM_YOUR_TABLES))?.id ??
      null
    );
  }
  if (furniture === "OURS") {
    return (
      variants.find((row) => !row.forms.includes(BOOKING_FORM_YOUR_TABLES))
        ?.id ?? null
    );
  }
  return null;
}

/** Values from the URL; anything missing, malformed or too soon becomes null. */
export function parseAtHomeSelection(
  params: SearchParams,
  variants: PublicPackageVariant[],
  earliestDate: string = earliestBookableDate()
): PartialAtHomeSelection {
  const guestCount = Number(single(params.guests));
  const eventDate = single(params.date);
  return {
    variantId: resolveVariantId(params, variants),
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
    selection.variantId !== null &&
    selection.guestCount !== null &&
    selection.eventDate !== null
  );
}

function selectionParams(selection: PartialAtHomeSelection): URLSearchParams {
  const params = new URLSearchParams();
  if (selection.eventDate) params.set("date", selection.eventDate);
  if (selection.variantId) params.set("variant", selection.variantId);
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
  const path = `${AT_HOME_EXPERIENCES.href}/${encodeURIComponent(packageSlug)}`;
  return query ? `${path}?${query}` : path;
}

/** Package + style before access, pickup or travel fees, which are chosen later. */
export function atHomePackageCents(
  packageBaseCents: number,
  variantModifierCents: number,
  guestCount: number
): number {
  return calculateAtHomeExperienceQuote({
    guestCount,
    basePriceCents: packageBaseCents + variantModifierCents,
    accessType: "STANDARD",
    isLateNightPickup: false,
  }).quotedTotalCents;
}

export function findVariant(
  variants: PublicPackageVariant[],
  variantId: string | null
): PublicPackageVariant | null {
  if (!variantId) return null;
  return variants.find((row) => row.id === variantId) ?? null;
}

/** Cheapest package + style total for the "From" price before a style is chosen. */
export function cheapestStylePriceCents(
  packageBaseCents: number,
  variants: PublicPackageVariant[]
): number {
  if (variants.length === 0) return packageBaseCents;
  return (
    packageBaseCents + Math.min(...variants.map((row) => row.priceCents))
  );
}
