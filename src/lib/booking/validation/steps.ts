import { addDays } from "@/lib/booking/dinnerExperience";
import { todayAtEventLocation } from "@/lib/booking/format";

export const BOOKING_STEPS = [
  "Experience",
  "Event & timing",
  "Access & setup",
  "Notes & contact",
  "Confirm",
] as const;

export type BookingStep = number;

export const minEventDate = () => addDays(todayAtEventLocation(), 1);
