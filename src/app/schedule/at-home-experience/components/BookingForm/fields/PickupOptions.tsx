import {
  AT_HOME_EXPERIENCE_PRICING,
  NEXT_MORNING_PICKUP_TIMES,
  type PickupOption,
  pickupLabel,
} from "@/lib/booking/atHomeExperience";
import { formatMoney, formatTimeOfDay } from "@/lib/booking/format";

import { ChoiceCard, labelClass, Notice, PillOption, Question } from "../controls";

type Props = {
  endTime: string;
  options: PickupOption[];
  lateEvent: boolean;
  nextMorningDay: string;
  pickupOption: PickupOption | null;
  morningTime: string;
  onPickupOptionChange: (value: PickupOption) => void;
  onMorningTimeChange: (value: string) => void;
};

const optionDescription = (
  option: PickupOption,
  endTime: string,
  nextMorningDay: string
) =>
  option === "NEXT_MORNING"
    ? `Between 8:00 AM and 11:00 AM on ${nextMorningDay}.`
    : `Right after your event ends at ${formatTimeOfDay(endTime)}.`;

const optionBadge = (option: PickupOption) =>
  option === "LATE_NIGHT"
    ? `+${formatMoney(AT_HOME_EXPERIENCE_PRICING.lateNightPickupCents)}`
    : "Included";

const PickupOptions = ({
  endTime,
  options,
  lateEvent,
  nextMorningDay,
  pickupOption,
  morningTime,
  onPickupOptionChange,
  onMorningTimeChange,
}: Props) => (
  <Question label="Pickup">
    {lateEvent ? (
      <Notice>
        <p className="font-semibold">
          Your event ends late, so we&apos;ll pick up the next morning.
        </p>
        <p className="text-brown-600">
          Choose a pickup time between 8:00 AM and 11:00 AM on {nextMorningDay}.
        </p>
      </Notice>
    ) : null}

    <div role="radiogroup" className="grid gap-3">
      {options.map((option) => (
        <ChoiceCard
          key={option}
          selected={pickupOption === option}
          onSelect={() => onPickupOptionChange(option)}
          title={pickupLabel(option)}
          description={optionDescription(option, endTime, nextMorningDay)}
          badge={optionBadge(option)}
        />
      ))}
    </div>

    {pickupOption === "NEXT_MORNING" ? (
      <div>
        <p className={labelClass}>Next-morning pickup time</p>
        <div role="radiogroup" className="mt-2 flex flex-wrap gap-2">
          {NEXT_MORNING_PICKUP_TIMES.map((time) => (
            <PillOption
              key={time}
              selected={morningTime === time}
              onSelect={() => onMorningTimeChange(time)}
              className="rounded-full px-3 py-1.5 text-sm"
            >
              {formatTimeOfDay(time)}
            </PillOption>
          ))}
        </div>
      </div>
    ) : null}
  </Question>
);

export default PickupOptions;
