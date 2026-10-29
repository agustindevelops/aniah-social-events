import Link from "next/link";

import type { PublicPackageVariant } from "@/lib/ase-admin/packages";
import {
  atHomePackageCents,
  type AtHomeSelection,
} from "@/lib/booking/atHomeSelection";
import { zonedDateTime } from "@/lib/booking/atHomeExperience";
import { formatEventDay, formatMoney } from "@/lib/booking/format";

type Props = {
  packageName: string;
  packageBasePriceCents: number;
  variant: PublicPackageVariant;
  selection: AtHomeSelection;
  changeHref: string;
};

const SelectionSummary = ({
  packageName,
  packageBasePriceCents,
  variant,
  selection,
  changeHref,
}: Props) => {
  const rows = [
    { label: "Package", value: packageName },
    { label: "Style", value: variant.name },
    { label: "Guests", value: `${selection.guestCount} guests` },
    {
      label: "Event date",
      value: formatEventDay(zonedDateTime(selection.eventDate, "12:00")),
    },
    {
      label: "Package total",
      value: formatMoney(
        atHomePackageCents(
          packageBasePriceCents,
          variant.priceCents,
          selection.guestCount
        )
      ),
    },
  ];

  return (
    <section className="rounded-2xl border border-brown-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h2 className="text-lg font-semibold text-brown-800">Your selection</h2>
        <Link
          href={changeHref}
          className="text-sm font-medium text-brown-600 underline-offset-2 hover:text-brown-800 hover:underline"
        >
          Change
        </Link>
      </div>
      <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="text-xs font-medium uppercase tracking-wide text-brown-500">
              {row.label}
            </dt>
            <dd className="mt-1 text-brown-800">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default SelectionSummary;
