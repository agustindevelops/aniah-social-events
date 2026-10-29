import type { ReactNode } from "react";

import type { PublicPackageVariant } from "@/lib/ase-admin/packages";
import { atHomePackageCents } from "@/lib/booking/atHomeSelection";
import { AT_HOME_EXPERIENCE_PRICING } from "@/lib/booking/atHomeExperience";
import { formatMoney } from "@/lib/booking/format";
import clsxm from "@/lib/clsxm";

const { baseGuestCount, maxGuestCount, additionalGuestCents } =
  AT_HOME_EXPERIENCE_PRICING;
const GUEST_COUNTS = Array.from(
  { length: maxGuestCount - baseGuestCount + 1 },
  (_, index) => baseGuestCount + index
);

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
  packageBasePriceCents: number;
  variants: PublicPackageVariant[];
  variantId: string | null;
  guestCount: number | null;
  onVariantChange: (value: string) => void;
  onGuestCountChange: (value: number) => void;
};

/** Product-page variants: each tile shows package base + style modifier. */
const VariantOptions = ({
  packageBasePriceCents,
  variants,
  variantId,
  guestCount,
  onVariantChange,
  onGuestCountChange,
}: Props) => {
  const selectedVariant =
    variants.find((row) => row.id === variantId) ?? null;

  return (
    <div className="space-y-6">
      <OptionGroup label="Style" selected={selectedVariant?.name ?? null}>
        <div role="radiogroup" className="mt-3 grid gap-3 sm:grid-cols-2">
          {variants.map((variant) => {
            const selected = variantId === variant.id;
            return (
              <button
                key={variant.id}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => onVariantChange(variant.id)}
                className={clsxm(tileClass(selected), "flex flex-col p-4")}
              >
                <span className="font-medium text-brown-800">{variant.name}</span>
                <span className="mt-1 flex-1 text-sm text-brown-600">
                  {variant.preview}
                </span>
                <span className="mt-3 text-lg font-semibold text-brown-800">
                  {formatMoney(
                    atHomePackageCents(
                      packageBasePriceCents,
                      variant.priceCents,
                      guestCount ?? baseGuestCount
                    )
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
                  {selectedVariant
                    ? formatMoney(
                        atHomePackageCents(
                          packageBasePriceCents,
                          selectedVariant.priceCents,
                          count
                        )
                      )
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
};

export default VariantOptions;
