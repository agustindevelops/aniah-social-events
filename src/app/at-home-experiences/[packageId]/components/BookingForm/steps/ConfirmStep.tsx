import type { Acknowledgments, BookingSchedule } from "@/lib/booking/draft";

import { Acknowledgment, SectionTitle } from "../controls";
import ScheduleSummary from "../fields/ScheduleSummary";
import type { StepProps } from "../types";

const POLICY_ACKNOWLEDGMENTS: {
  key: Exclude<keyof Acknowledgments, "times">;
  text: string;
}[] = [
  { key: "indoors", text: "I confirm this event will take place indoors." },
  { key: "nonRefundable", text: "I understand all payments are non-refundable." },
  {
    key: "reschedule",
    text: "I understand one reschedule is included at no charge and additional rescheduling requests may incur additional charges.",
  },
  {
    key: "damage",
    text: "I understand lost, stained, broken, or damaged rental property may result in additional charges after the event.",
  },
];

type Props = StepProps & { schedule: BookingSchedule };

const ConfirmStep = ({ draft, update, schedule }: Props) => {
  const setAck = (key: keyof Acknowledgments) => (checked: boolean) =>
    update("acks", { ...draft.acks, [key]: checked });
  const { setupWindow, pickupWindow } = schedule;

  return (
    <>
      <SectionTitle
        title="Confirm your booking"
        description="Review the details below, then continue to secure payment."
      />
      <div className="space-y-3">
        {POLICY_ACKNOWLEDGMENTS.map(({ key, text }) => (
          <Acknowledgment key={key} checked={draft.acks[key]} onChange={setAck(key)}>
            {text}
          </Acknowledgment>
        ))}
      </div>

      {setupWindow && pickupWindow ? (
        <ScheduleSummary
          setupStartsAt={setupWindow.setupStartsAt}
          setupEndsAt={setupWindow.setupEndsAt}
          pickupStartsAt={pickupWindow.pickupStartsAt}
        />
      ) : null}

      <Acknowledgment checked={draft.acks.times} onChange={setAck("times")}>
        I confirm these setup and pickup times work for my event location.
      </Acknowledgment>
    </>
  );
};

export default ConfirmStep;
