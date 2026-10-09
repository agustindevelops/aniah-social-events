import { BOOKING_STEPS } from "@/lib/booking/validation";
import clsxm from "@/lib/clsxm";

type Props = {
  step: number;
  onSelect: (step: number) => void;
};

/** Completed steps are clickable; later steps unlock by passing validation. */
const StepNav = ({ step, onSelect }: Props) => (
  <ol className="mb-8 flex flex-wrap gap-2" aria-label="Booking steps">
    {BOOKING_STEPS.map((label, index) => (
      <li key={label}>
        <button
          type="button"
          disabled={index > step}
          onClick={() => onSelect(index)}
          aria-current={index === step ? "step" : undefined}
          className={clsxm(
            "rounded-full px-3 py-1 text-sm transition",
            index === step
              ? "bg-green-500 text-white"
              : index < step
              ? "bg-green-100 text-green-800 hover:bg-green-200"
              : "bg-brown-50 text-brown-500"
          )}
        >
          {index + 1}. {label}
        </button>
      </li>
    ))}
  </ol>
);

export default StepNav;
