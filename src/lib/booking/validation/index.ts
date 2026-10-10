import { earliestBookableDate } from "@/lib/booking/atHomeExperience";
import type { BookingDraft, BookingPhoto } from "@/lib/booking/draft";

import { type BookingStep, bookingSteps } from "./steps";
import {
  accessErrors,
  confirmErrors,
  contactErrors,
  eventErrors,
  tablesErrors,
} from "./stepValidators";

export * from "./steps";

export function validateBookingStep(
  step: BookingStep,
  draft: BookingDraft,
  photos: BookingPhoto[],
  earliestDate: string = earliestBookableDate()
): string[] {
  switch (step) {
    case "tables":
      return tablesErrors(draft, photos);
    case "event":
      return eventErrors(draft, earliestDate);
    case "access":
      return accessErrors(draft);
    case "contact":
      return contactErrors(draft);
    case "confirm":
      return confirmErrors(draft);
  }
}

/** First step with errors, so submit can send the customer back to fix it. */
export function firstInvalidStep(
  draft: BookingDraft,
  photos: BookingPhoto[],
  earliestDate: string = earliestBookableDate()
): { step: BookingStep; errors: string[] } | null {
  for (const step of bookingSteps(draft.furniture)) {
    const errors = validateBookingStep(step, draft, photos, earliestDate);
    if (errors.length > 0) return { step, errors };
  }
  return null;
}
