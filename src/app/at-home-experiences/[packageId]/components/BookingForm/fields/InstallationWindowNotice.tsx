import { formatEventClock } from "@/lib/booking/format";

import { Notice } from "../controls";

type Props = {
  setupStartsAt: Date;
  setupEndsAt: Date;
};

const InstallationWindowNotice = ({ setupStartsAt, setupEndsAt }: Props) => (
  <Notice>
    <p className="font-semibold">Your installation window</p>
    <p className="text-lg">
      {formatEventClock(setupStartsAt)} – {formatEventClock(setupEndsAt)}
    </p>
    <p className="text-brown-600">
      We reserve the two hours immediately before your event for installation.
    </p>
  </Notice>
);

export default InstallationWindowNotice;
