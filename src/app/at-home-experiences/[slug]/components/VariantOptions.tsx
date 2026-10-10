import type { ReactNode } from "react";

import { atHomePackageCents } from "@/lib/booking/atHomeSelection";
import {
  AT_HOME_EXPERIENCE_PRICING,
  experienceLabel,
} from "@/lib/booking/atHomeExperience";
import type { FurnitureChoice } from "@/lib/booking/draft";
import { formatMoney } from "@/lib/booking/format";
import clsxm from "@/lib/clsxm";

const { baseGuestCount, maxGuestCount, additionalGuestCents } =
  AT_HOME_EXPERIENCE_PRICING;
const GUEST_COUNTS = Array.from(
  { length: maxGuestCount - baseGuestCount + 1 },
  (_, index) => baseGuestCount + index
);

const STYLES: { value: FurnitureChoice; description: string }[] = [
  {
    value: "OURS",
    description: "We bring the tables, chairs, styling and décor, then set up and pick up.",
  },
  {
    value: "CLIENT",
    description: "We style your own tables and chairs with our décor, then set up and pick up.",
  },
];

const tileClass = (selected: boolean) =>
  clsxm(
    "rounded-xl border-2 bg-white text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2",
    selected
      ? "border-green-500 ring-1 ring-green-500"
      : "border-brown-100 hover:border-brown-300"
  );

const OptionGroup = ({
  label,
  selected,
  children,
}: {
  label: string;
  selected: string | null;
  children: ReactNode;
}) => (
  <fieldset>
    <legend className="text-base font-semibold text-brown-800">
      {label}:{" "}
      <span className="font-normal text-brown-600">
        {selected ?? "Choose one"}
      </span>
    </legend>
    {children}
  </fieldset>
);

type Props = {
  furniture: FurnitureChoice | null;
  guestCount: number | null;
  onFurnitureChange: (value: FurnitureChoice) => void;
  onGuestCountChange: (value: number) => void;
};

/** Product-page variants: each tile shows what that choice costs. */
const VariantOptions = ({
  furniture,
  guestCount,
  onFurnitureChange,
  onGuestCountChange,
}: Props) => (
  <div className="space-y-6">
    <OptionGroup
      label="Style"
      selected={furniture ? experienceLabel(furniture === "CLIENT") : null}
    >
      <div role="radiogroup" className="mt-3 grid gap-3 sm:grid-cols-2">
        {STYLES.map((style) => {
          const selected = furniture === style.value;
          return (
            <button
              key={style.value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onFurnitureChange(style.value)}
              className={clsxm(tileClass(selected), "flex flex-col p-4")}
            >
              <span className="font-medium text-brown-800">
                {experienceLabel(style.value === "CLIENT")}
              </span>
              <span className="mt-1 flex-1 text-sm text-brown-600">
                {style.description}
              </span>
              <span className="mt-3 text-lg font-semibold text-brown-800">
                {formatMoney(
                  atHomePackageCents(style.value, guestCount ?? baseGuestCount)
                )}
              </span>
            </button>
          );
        })}
      </div>
    </OptionGroup>

    <OptionGroup
      label="Guests"
      selected={guestCount ? `${guestCount} guests` : null}
    >
      <div role="radiogroup" className="mt-3 flex flex-wrap gap-2">
        {GUEST_COUNTS.map((count) => {
          const selected = guestCount === count;
          const extraCents = (count - baseGuestCount) * additionalGuestCents;
          return (
            <button
              key={count}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-label={`${count} guests`}
              onClick={() => onGuestCountChange(count)}
              className={clsxm(
                tileClass(selected),
                "flex min-w-[4.75rem] flex-col items-center px-3 py-2"
              )}
            >
              <span className="text-lg font-semibold text-brown-800">
                {count}
              </span>
              <span className="text-xs text-brown-600">
                {furniture
                  ? formatMoney(atHomePackageCents(furniture, count))
                  : extraCents > 0
                  ? `+${formatMoney(extraCents)}`
                  : "Included"}
              </span>
            </button>
          );
        })}
      </div>
    </OptionGroup>
  </div>
);

export default VariantOptions;
