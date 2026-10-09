import {
  type DinnerExperienceQuote,
  experienceLabel,
  type PickupOption,
  pickupLabel,
} from "@/lib/booking/dinnerExperience";
import { formatMoney } from "@/lib/booking/format";

type Props = {
  packageName: string;
  guestCount: number;
  usesClientFurniture: boolean;
  pickupOption: PickupOption | null;
  quote: DinnerExperienceQuote;
};

const QuoteSummary = ({
  packageName,
  guestCount,
  usesClientFurniture,
  pickupOption,
  quote,
}: Props) => {
  const rows: { label: string; value: string }[] = [
    {
      label: `${experienceLabel(usesClientFurniture)} · ${guestCount} guests`,
      value: formatMoney(quote.basePriceCents + quote.guestAdjustmentCents),
    },
  ];
  if (quote.accessFeeCents > 0) {
    rows.push({
      label: "Special building access",
      value: formatMoney(quote.accessFeeCents),
    });
  }
  if (pickupOption) {
    rows.push({
      label: pickupLabel(pickupOption),
      value: quote.pickupFeeCents > 0 ? formatMoney(quote.pickupFeeCents) : "Included",
    });
  }
  if (quote.travelFeeCents > 0) {
    rows.push({
      label: "Outside standard service area",
      value: formatMoney(quote.travelFeeCents),
    });
  }

  return (
    <section
      aria-label="Your quote"
      className="rounded-2xl border border-brown-100 bg-white p-6 shadow-md"
    >
      <p className="text-sm font-medium uppercase tracking-wide text-brown-500">
        Your quote
      </p>
      <h2 className="mt-1 text-xl font-semibold text-[#CE6B69]">{packageName}</h2>
      <dl className="mt-4 space-y-2 text-sm">
        {rows.map((row) => (
          <div key={row.label} className="flex justify-between gap-4">
            <dt className="text-brown-700">{row.label}</dt>
            <dd className="shrink-0 font-medium text-brown-800">{row.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 flex items-baseline justify-between border-t border-brown-100 pt-4">
        <span className="font-semibold text-brown-800">Total</span>
        <span className="text-2xl font-semibold text-brown-800">
          {formatMoney(quote.quotedTotalCents)}
        </span>
      </div>
    </section>
  );
};

export default QuoteSummary;
