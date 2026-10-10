import type { BookingDraft } from "@/lib/booking/draft";

import type { UpdateDraft } from "./useBookingForm";

export type StepProps = {
  draft: BookingDraft;
  update: UpdateDraft;
};
