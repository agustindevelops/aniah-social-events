import Link from "next/link";

import { BOOKING_STEP_LABELS, type BookingStep } from "@/lib/booking/validation";
import clsxm from "@/lib/clsxm";

type Props = {
  steps: BookingStep[];
  step: BookingStep;
  onSelect: (step: BookingStep) => void;
  /** The package page, where style, guests and date were chosen. */
  experienceHref: string;
};

const pillClass = "rounded-full px-3 py-1 text-sm transition";
const doneClass = "bg-green-100 text-green-800 hover:bg-green-200";

/** Completed steps are clickable; later steps unlock by passing validation. */
const StepNav = ({ steps, step, onSelect, experienceHref }: Props) => {
  const current = steps.indexOf(step);
  return (
    <ol className="mb-8 flex flex-wrap gap-2" aria-label="Booking steps">
      <li>
        <Link href={experienceHref} className={clsxm(pillClass, doneClass, "block")}>
          1. At-home experience
        </Link>
      </li>
      {steps.map((id, index) => (
        <li key={id}>
          <button
            type="button"
            disabled={index > current}
            onClick={() => onSelect(id)}
            aria-current={index === current ? "step" : undefined}
            className={clsxm(
              pillClass,
              index === current
                ? "bg-green-500 text-white"
                : index < current
                ? doneClass
                : "bg-brown-50 text-brown-500"
            )}
          >
            {index + 2}. {BOOKING_STEP_LABELS[id]}
          </button>
        </li>
      ))}
    </ol>
  );
};

export default StepNav;
