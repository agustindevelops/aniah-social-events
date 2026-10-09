import { DINNER_EXPERIENCE_PRICING } from "@/lib/booking/dinnerExperience";

import { PillOption, Question } from "../controls";

const { baseGuestCount, maxGuestCount } = DINNER_EXPERIENCE_PRICING;
const GUEST_COUNTS = Array.from(
  { length: maxGuestCount - baseGuestCount + 1 },
  (_, index) => baseGuestCount + index
);

type Props = {
  value: number;
  onChange: (value: number) => void;
};

const GuestCountPicker = ({ value, onChange }: Props) => (
  <Question label="How many guests?">
    <div role="radiogroup" className="flex flex-wrap gap-2">
      {GUEST_COUNTS.map((count) => (
        <PillOption
          key={count}
          selected={value === count}
          onSelect={() => onChange(count)}
          className="h-12 w-14 rounded-xl text-lg"
        >
          {count}
        </PillOption>
      ))}
    </div>
  </Question>
);

export default GuestCountPicker;
