import {
  getDefaultPickupOption,
  timeToMinutes,
} from "@/lib/booking/dinnerExperience";

import type { BookingDraft } from "./types";

/** Clears the end time (and its pickup choice) when it would no longer follow the start. */
export function withStartTime(draft: BookingDraft, startTime: string): BookingDraft {
  const endStillValid =
    !draft.endTime || timeToMinutes(draft.endTime) > timeToMinutes(startTime);
  return endStillValid
    ? { ...draft, startTime }
    : { ...draft, startTime, endTime: "", pickupOption: null };
}

/** Pickup choices depend on the end time, so the default is re-picked on every change. */
export function withEndTime(draft: BookingDraft, endTime: string): BookingDraft {
  return {
    ...draft,
    endTime,
    pickupOption: endTime ? getDefaultPickupOption(endTime) : null,
  };
}
