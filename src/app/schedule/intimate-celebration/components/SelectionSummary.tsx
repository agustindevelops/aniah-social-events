import Link from "next/link";

import {
  atHomePackageCents,
  type AtHomeSelection,
} from "@/lib/booking/atHomeSelection";
import { experienceLabel, zonedDateTime } from "@/lib/booking/atHomeExperience";
import { formatEventDay, formatMoney } from "@/lib/booking/format";

type Props = {
  packageName: string;
  selection: AtHomeSelection;
  changeHref: string;
};

/** Reminds the customer what they picked on the package page. */
const SelectionSummary = ({ packageName, selection, changeHref }: Props) => {
  const rows = [
    {
      label: "Style",
      value: experienceLabel(selection.furniture === "CLIENT"),
    },
    { label: "Guests", value: `${selection.guestCount} guests` },
    {
      label: "Event date",
      value: formatEventDay(zonedDateTime(selection.eventDate, "12:00")),
    },
    {
      label: "Package price",
      value: formatMoney(
        atHomePackageCents(selection.furniture, selection.guestCount)
      ),
    },
  ];

  return (
    <section
      aria-labelledby="selection-heading"
      className="rounded-2xl bg-white p-5 shadow-md sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-brown-500">
            Your intimate celebration
          </p>
          <h2
            id="selection-heading"
            className="font-moonjelly text-2xl text-[#CE6B69]"
          >
            {packageName}
          </h2>
        </div>
        <Link
          href={changeHref}
          className="text-sm font-medium text-green-700 underline hover:text-green-800"
        >
          Change
        </Link>
      </div>
      <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="text-sm text-brown-600">{row.label}</dt>
            <dd className="font-medium text-brown-800">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default SelectionSummary;
