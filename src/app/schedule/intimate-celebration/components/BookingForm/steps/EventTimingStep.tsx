import type { BookingSchedule } from "@/lib/booking/draft";

import { Question, SectionTitle, YesNo } from "../controls";
import AddressFields from "../fields/AddressFields";
import EventTimeFields from "../fields/EventTimeFields";
import InstallationWindowNotice from "../fields/InstallationWindowNotice";
import PickupOptions from "../fields/PickupOptions";
import type { StepProps } from "../types";

type Props = StepProps & {
  schedule: BookingSchedule;
  changeDateHref: string;
  onStartTimeChange: (value: string) => void;
  onEndTimeChange: (value: string) => void;
};

const EventTimingStep = ({
  draft,
  update,
  schedule,
  changeDateHref,
  onStartTimeChange,
  onEndTimeChange,
}: Props) => (
  <>
    <SectionTitle title="Event & timing" />
    <EventTimeFields
      eventDate={draft.eventDate}
      changeDateHref={changeDateHref}
      startTime={draft.startTime}
      endTime={draft.endTime}
      onStartTimeChange={onStartTimeChange}
      onEndTimeChange={onEndTimeChange}
    />
    {schedule.setupWindow ? (
      <InstallationWindowNotice {...schedule.setupWindow} />
    ) : null}
    <AddressFields
      value={draft.address}
      onChange={(value) => update("address", value)}
    />
    <Question label="Is this a private home?">
      <YesNo
        value={draft.isPrivateHome}
        onChange={(value) => update("isPrivateHome", value)}
      />
    </Question>
    {draft.endTime ? (
      <PickupOptions
        endTime={draft.endTime}
        options={schedule.pickupOptions}
        lateEvent={schedule.lateEvent}
        nextMorningDay={schedule.nextMorningDay}
        pickupOption={draft.pickupOption}
        morningTime={draft.morningTime}
        onPickupOptionChange={(value) => update("pickupOption", value)}
        onMorningTimeChange={(value) => update("morningTime", value)}
      />
    ) : null}
  </>
);

export default EventTimingStep;
