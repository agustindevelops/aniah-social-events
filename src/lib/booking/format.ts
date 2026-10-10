import { AT_HOME_EXPERIENCE_TIME_ZONE } from "@/lib/booking/atHomeExperience";

export function formatMoney(cents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

/** "19:30" → "7:30 PM" */
export function formatTimeOfDay(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  const suffix = hours >= 12 ? "PM" : "AM";
  const hour12 = hours % 12 === 0 ? 12 : hours % 12;
  return `${hour12}:${String(minutes).padStart(2, "0")} ${suffix}`;
}

export function formatEventDay(instant: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: AT_HOME_EXPERIENCE_TIME_ZONE,
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(instant);
}

export function formatEventClock(instant: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: AT_HOME_EXPERIENCE_TIME_ZONE,
    hour: "numeric",
    minute: "2-digit",
  }).format(instant);
}