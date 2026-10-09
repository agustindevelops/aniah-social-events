import {
  addDays,
  calculateDinnerExperienceQuote,
  calculatePickupWindow,
  calculateSetupWindow,
  getAvailablePickupOptions,
  isLateEvent,
  isOutsideServiceArea,
  type PickupOption,
  zonedDateTime,
} from "@/lib/booking/dinnerExperience";
import { formatEventDay } from "@/lib/booking/format";

import type { BookingDraft } from "./types";

export const usesClientFurniture = (draft: BookingDraft) =>
  draft.furniture === "CLIENT";

export function getBookingQuote(draft: BookingDraft) {
  return calculateDinnerExperienceQuote({
    guestCount: draft.guestCount,
    usesClientFurniture: usesClientFurniture(draft),
    accessType: draft.accessType,
    isLateNightPickup: draft.pickupOption === "LATE_NIGHT",
    isOutsideServiceArea: isOutsideServiceArea(draft.address),
  });
}

export type BookingSchedule = {
  setupWindow: ReturnType<typeof calculateSetupWindow> | null;
  pickupWindow: ReturnType<typeof calculatePickupWindow> | null;
  pickupOptions: PickupOption[];
  lateEvent: boolean;
  /** e.g. "Sunday, October 25", or "the next day" before a date is picked. */
  nextMorningDay: string;
};

/** Null until the customer has picked enough to compute the window. */
function pickupWindowFor(draft: BookingDraft): BookingSchedule["pickupWindow"] {
  const { eventDate, endTime, pickupOption, morningTime } = draft;
  if (!eventDate || !endTime || !pickupOption) return null;
  try {
    return calculatePickupWindow({
      eventDate,
      eventEndTime: endTime,
      pickupOption,
      morningPickupTime: morningTime || null,
    });
  } catch {
    return null;
  }
}

export function getBookingSchedule(draft: BookingDraft): BookingSchedule {
  const { eventDate, startTime, endTime } = draft;
  return {
    setupWindow:
      eventDate && startTime ? calculateSetupWindow(eventDate, startTime) : null,
    pickupWindow: pickupWindowFor(draft),
    pickupOptions: endTime ? getAvailablePickupOptions(endTime) : [],
    lateEvent: endTime ? isLateEvent(endTime) : false,
    nextMorningDay: eventDate
      ? formatEventDay(zonedDateTime(addDays(eventDate, 1), "12:00"))
      : "the next day",
  };
}
