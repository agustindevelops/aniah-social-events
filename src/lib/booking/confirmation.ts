import type { BookingConfirmation } from "@/lib/ase-admin/booking";
import { addDays, timeToMinutes, zonedDateTime } from "@/lib/booking/atHomeExperience";
import {
  formatEventClock,
  formatEventDay,
  formatMoney,
  formatTimeOfDay,
} from "@/lib/booking/format";

export const BOOKING_CONTACT_EMAIL = "aniahsocialevents@gmail.com";

export const BOOKING_POLICIES = [
  "All payments are non-refundable.",
  "One reschedule is included at no charge; additional rescheduling requests incur additional charges.",
  "Lost, broken, or damaged rental property may result in additional charges after the event.",
];

export type BookingDetailRow = { label: string; value: string };

/** Celebration start and end as instants; an end at or before the start runs past midnight. */
export function bookingEventInstants(
  booking: BookingConfirmation
): { start: Date; end: Date } | null {
  const { eventDate, eventStartTime, eventEndTime } = booking;
  if (!eventDate || !eventStartTime || !eventEndTime) return null;
  const endDate =
    timeToMinutes(eventEndTime) <= timeToMinutes(eventStartTime)
      ? addDays(eventDate, 1)
      : eventDate;
  return {
    start: zonedDateTime(eventDate, eventStartTime),
    end: zonedDateTime(endDate, eventEndTime),
  };
}

export function bookingEventDay(booking: BookingConfirmation): string | null {
  return booking.eventDate
    ? formatEventDay(zonedDateTime(booking.eventDate, "12:00"))
    : null;
}

/** "Friday, October 23 · 2:00 PM – 4:00 PM" */
export function formatBookingWindow(
  startsAt: string | null,
  endsAt: string | null
): string | null {
  if (!startsAt || !endsAt) return null;
  const start = new Date(startsAt);
  const end = new Date(endsAt);
  return `${formatEventDay(start)} · ${formatEventClock(start)} – ${formatEventClock(end)}`;
}

export function bookingAddressLines(booking: BookingConfirmation): string[] {
  const address = booking.address;
  if (!address) return [];
  const cityLine = [
    address.city,
    [address.state, address.zipcode].filter(Boolean).join(" "),
  ]
    .filter(Boolean)
    .join(", ");
  return [address.addressLine1, address.addressLine2, cityLine].filter(
    (line): line is string => Boolean(line)
  );
}

/** Rows shared by the booked page and the PDF; missing facts are left out. */
export function bookingDetailRows(booking: BookingConfirmation): BookingDetailRow[] {
  const rows: (BookingDetailRow | null)[] = [
    booking.packageName ? { label: "Package", value: booking.packageName } : null,
    (() => {
      const day = bookingEventDay(booking);
      return day ? { label: "Event date", value: day } : null;
    })(),
    booking.eventStartTime && booking.eventEndTime
      ? {
          label: "Celebration",
          value: `${formatTimeOfDay(booking.eventStartTime)} – ${formatTimeOfDay(booking.eventEndTime)}`,
        }
      : null,
    booking.guestCount != null
      ? { label: "Guests", value: String(booking.guestCount) }
      : null,
    (() => {
      const value = formatBookingWindow(booking.setupStartsAt, booking.setupEndsAt);
      return value ? { label: "Setup", value } : null;
    })(),
    (() => {
      const value = formatBookingWindow(booking.pickupStartsAt, booking.pickupEndsAt);
      return value ? { label: "Pickup", value } : null;
    })(),
    (() => {
      const lines = bookingAddressLines(booking);
      return lines.length > 0 ? { label: "Location", value: lines.join("\n") } : null;
    })(),
    booking.totalCents != null
      ? {
          label: booking.paid ? "Total paid" : "Total",
          value: formatMoney(booking.totalCents),
        }
      : null,
    { label: "Booking reference", value: booking.reference },
  ];
  return rows.filter((row): row is BookingDetailRow => row !== null);
}
