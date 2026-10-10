import type { FurnitureChoice } from "@/lib/booking/draft";

export const BOOKING_STEP_LABELS = {
  tables: "Your tables",
  event: "Event & timing",
  access: "Access & setup",
  contact: "Notes & contact",
  confirm: "Confirm",
} as const;

export type BookingStep = keyof typeof BOOKING_STEP_LABELS;

/** Style, guests and date are picked on the package page; "Your tables" only applies to client furniture. */
export function bookingSteps(furniture: FurnitureChoice): BookingStep[] {
  const steps: BookingStep[] = ["event", "access", "contact", "confirm"];
  return furniture === "CLIENT" ? ["tables", ...steps] : steps;
}
