"use client";

import { useRouter } from "next/navigation";
import { type ReactNode, useState } from "react";

import {
  atHomePackageCents,
  atHomeScheduleHref,
  isCompleteSelection,
  type PartialAtHomeSelection,
} from "@/lib/booking/atHomeSelection";
import { AT_HOME_EXPERIENCE_PRICING } from "@/lib/booking/atHomeExperience";
import type { FurnitureChoice } from "@/lib/booking/draft";
import { formatMoney } from "@/lib/booking/format";
import clsxm from "@/lib/clsxm";

import EventDateCalendar from "./EventDateCalendar";
import VariantOptions from "./VariantOptions";

type Props = {
  packageSlug: string;
  packageName: string;
  /** Preselected when the customer comes back from the schedule page. */
  initialSelection: PartialAtHomeSelection;
  gallery: ReactNode;
  description: ReactNode;
};

const listFormat = new Intl.ListFormat("en-US", { type: "conjunction" });

/**
 * Step one of booking. Gallery and details sit above a divider.
 * Style, guests, and the calendar are one form under that line, with the
 * schedule button centered beneath them.
 */
const PackageExperience = ({
  packageSlug,
  packageName,
  initialSelection,
  gallery,
  description,
}: Props) => {
  const router = useRouter();
  const [furniture, setFurniture] = useState<FurnitureChoice | null>(
    initialSelection.furniture
  );
  const [guestCount, setGuestCount] = useState<number | null>(
    initialSelection.guestCount
  );
  const [eventDate, setEventDate] = useState(initialSelection.eventDate ?? "");

  const selection = { furniture, guestCount, eventDate: eventDate || null };
  const complete = isCompleteSelection(selection);
  const priceCents = atHomePackageCents(
    furniture ?? "CLIENT",
    guestCount ?? AT_HOME_EXPERIENCE_PRICING.baseGuestCount
  );
  const missing = [
    !furniture && "a style",
    !guestCount && "your guest count",
    !eventDate && "an event date",
  ].filter((item): item is string => Boolean(item));

  return (
    <article className="mt-4 space-y-8">
      <div
        className={clsxm(
          "grid gap-8",
          gallery !== null &&
            "lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start"
        )}
      >
        {gallery ? <div className="min-w-0">{gallery}</div> : null}
        <div className="min-w-0 space-y-6">
          <header className="flex items-start justify-between gap-6">
            <h1 className="font-moonjelly text-3xl text-[#CE6B69] sm:text-4xl">
              {packageName}
            </h1>
            <p className="shrink-0 text-right" aria-live="polite">
              {furniture && guestCount ? null : (
                <span className="block text-xs font-medium uppercase tracking-wide text-brown-500">
                  From
                </span>
              )}
              <span className="text-2xl font-semibold text-brown-800 sm:text-3xl">
                {formatMoney(priceCents)}
              </span>
            </p>
          </header>
          {description}
        </div>
      </div>

      <hr className="border-brown-200" />

      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className="lg:order-2">
          <VariantOptions
            furniture={furniture}
            guestCount={guestCount}
            onFurnitureChange={setFurniture}
            onGuestCountChange={setGuestCount}
          />
        </div>
        <div className="lg:order-1">
          <EventDateCalendar value={eventDate} onChange={setEventDate} />
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <button
          type="button"
          disabled={!complete}
          onClick={() => {
            if (isCompleteSelection(selection)) {
              router.push(atHomeScheduleHref(packageSlug, selection));
            }
          }}
          className="w-full rounded-full bg-green-500 px-6 py-3 text-lg font-medium text-white shadow-sm transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-brown-200 disabled:text-brown-600 disabled:shadow-none sm:w-auto"
        >
          Schedule your intimate celebration
        </button>
        <p className="mt-2 max-w-md text-sm text-brown-600">
          {missing.length > 0
            ? `Choose ${listFormat.format(missing)} to continue.`
            : "Special access, late-night pickup and travel fees are added in the next step if they apply."}
        </p>
      </div>
    </article>
  );
};

export default PackageExperience;
