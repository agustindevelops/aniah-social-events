import { BOOKING_FORM_YOUR_TABLES } from "@/lib/booking/draft/derived";

export const BOOKING_STEP_LABELS = {
  tables: "Your tables",
  event: "Event & timing",
  access: "Access & setup",
  contact: "Notes & contact",
  confirm: "Confirm",
} as const;

export type BookingStep = keyof typeof BOOKING_STEP_LABELS;

/**
 * Style, guests and date are picked on the package page. Extra steps come from
 * the forms attached to the selected variant; unknown codes are ignored.
 */
export function bookingSteps(forms: string[]): BookingStep[] {
  const steps: BookingStep[] = ["event", "access", "contact", "confirm"];
  return forms.includes(BOOKING_FORM_YOUR_TABLES) ? ["tables", ...steps] : steps;
}
