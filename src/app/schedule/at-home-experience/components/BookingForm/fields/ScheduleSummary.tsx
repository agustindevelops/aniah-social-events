import type { ReactNode } from "react";

import { formatEventClock, formatEventDay } from "@/lib/booking/format";

const ScheduleCard = ({
  title,
  day,
  children,
}: {
  title: string;
  day: Date;
  children: ReactNode;
}) => (
  <div className="rounded-xl border border-brown-100 bg-cream px-5 py-4">
    <p className="text-sm font-medium uppercase tracking-wide text-brown-500">
      {title}
    </p>
    <p className="mt-1 font-semibold text-brown-800">{formatEventDay(day)}</p>
    <p className="text-lg text-brown-800">{children}</p>
  </div>
);

type Props = {
  setupStartsAt: Date;
  setupEndsAt: Date;
  pickupStartsAt: Date;
};

const ScheduleSummary = ({ setupStartsAt, setupEndsAt, pickupStartsAt }: Props) => (
  <div className="grid gap-4 sm:grid-cols-2">
    <ScheduleCard title="Setup" day={setupStartsAt}>
      {formatEventClock(setupStartsAt)} – {formatEventClock(setupEndsAt)}
    </ScheduleCard>
    <ScheduleCard title="Pickup" day={pickupStartsAt}>
      {formatEventClock(pickupStartsAt)}
    </ScheduleCard>
  </div>
);

export default ScheduleSummary;
