import Link from "next/link";

import { formatMoney } from "@/lib/booking/format";
import clsxm from "@/lib/clsxm";

import { helperClass } from "./controls";

const primaryClass =
  "rounded-full bg-green-500 px-6 py-2.5 font-medium text-white shadow-sm transition hover:bg-green-700 disabled:opacity-60";

const backClass =
  "rounded-full px-5 py-2.5 font-medium text-brown-700 transition hover:bg-brown-50";

type Props = {
  isFirstStep: boolean;
  isLastStep: boolean;
  submitting: boolean;
  totalCents: number;
  /** Where Back goes from the first step: the package page. */
  experienceHref: string;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
};

const StepActions = ({
  isFirstStep,
  isLastStep,
  submitting,
  totalCents,
  experienceHref,
  onBack,
  onNext,
  onSubmit,
}: Props) => (
  <>
    <div className="flex items-center justify-between gap-4 border-t border-brown-100 pt-6">
      {isFirstStep ? (
        <Link href={experienceHref} className={backClass}>
          Back
        </Link>
      ) : (
        <button type="button" onClick={onBack} className={backClass}>
          Back
        </button>
      )}
      {isLastStep ? (
        <button
          type="button"
          onClick={onSubmit}
          disabled={submitting}
          className={primaryClass}
        >
          {submitting ? "Opening secure checkout…" : `Pay ${formatMoney(totalCents)}`}
        </button>
      ) : (
        <button type="button" onClick={onNext} className={primaryClass}>
          Continue
        </button>
      )}
    </div>
    <p className={clsxm(helperClass, "text-center")}>
      Your final price is confirmed when you continue to payment.
    </p>
  </>
);

export default StepActions;
