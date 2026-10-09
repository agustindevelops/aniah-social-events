import type { BookingDraft, BookingPhoto } from "@/lib/booking/draft";

import { BOOKING_STEPS, type BookingStep, minEventDate } from "./steps";
import {
  accessErrors,
  confirmErrors,
  contactErrors,
  eventErrors,
  experienceErrors,
} from "./stepValidators";

export * from "./steps";

export function validateBookingStep(
  step: BookingStep,
  draft: BookingDraft,
  photos: BookingPhoto[],
  earliestDate: string = minEventDate()
): string[] {
  switch (step) {
    case 0:
      return experienceErrors(draft, photos);
    case 1:
      return eventErrors(draft, earliestDate);
    case 2:
      return accessErrors(draft);
    case 3:
      return contactErrors(draft);
    case 4:
      return confirmErrors(draft);
    default:
      return [];
  }
}

/** First step with errors, so submit can send the customer back to fix it. */
export function firstInvalidStep(
  draft: BookingDraft,
  photos: BookingPhoto[],
  earliestDate: string = minEventDate()
): { step: BookingStep; errors: string[] } | null {
  for (let step = 0; step < BOOKING_STEPS.length; step += 1) {
    const errors = validateBookingStep(step, draft, photos, earliestDate);
    if (errors.length > 0) return { step, errors };
  }
  return null;
}
