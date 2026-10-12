import type { BookingConfirmation } from "@/lib/ase-admin/booking";
import {
  bookingAddressLines,
  bookingEventInstants,
  formatBookingWindow,
} from "@/lib/booking/confirmation";

export type CalendarEvent = {
  uid: string;
  title: string;
  start: Date;
  end: Date;
  location: string;
  description: string;
};

export function bookingCalendarEvent(
  booking: BookingConfirmation
): CalendarEvent | null {
  const instants = bookingEventInstants(booking);
  if (!instants) return null;
  const setup = formatBookingWindow(booking.setupStartsAt, booking.setupEndsAt);
  const pickup = formatBookingWindow(booking.pickupStartsAt, booking.pickupEndsAt);
  return {
    uid: `${booking.reference}@aniahsocialevents.com`,
    title: booking.packageName
      ? `Intimate Celebration · ${booking.packageName}`
      : "Intimate Celebration",
    ...instants,
    location: bookingAddressLines(booking).join(", "),
    description: [
      "Your Aniah Social Events intimate celebration.",
      setup ? `Setup: ${setup}` : null,
      pickup ? `Pickup: ${pickup}` : null,
      `Booking reference: ${booking.reference}`,
    ]
      .filter(Boolean)
      .join("\n"),
  };
}

/** 2026-10-23T19:00:00.000Z → 20261023T190000Z */
function utcStamp(instant: Date): string {
  return instant.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export function googleCalendarUrl(event: CalendarEvent): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${utcStamp(event.start)}/${utcStamp(event.end)}`,
    details: event.description,
    location: event.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function escapeIcsText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");
}

function utf8Length(char: string): number {
  const code = char.codePointAt(0) ?? 0;
  if (code < 0x80) return 1;
  if (code < 0x800) return 2;
  if (code < 0x10000) return 3;
  return 4;
}

/** RFC 5545 caps content lines at 75 octets; continuation lines start with a space. */
function foldIcsLine(line: string): string {
  const parts: string[] = [];
  let current = "";
  let bytes = 0;
  for (const char of line) {
    const size = utf8Length(char);
    const limit = parts.length === 0 ? 75 : 74;
    if (bytes + size > limit) {
      parts.push(current);
      current = char;
      bytes = size;
    } else {
      current += char;
      bytes += size;
    }
  }
  parts.push(current);
  return parts.join("\r\n ");
}

export function buildIcs(event: CalendarEvent, now: Date = new Date()): string {
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Aniah Social Events//Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${event.uid}`,
    `DTSTAMP:${utcStamp(now)}`,
    `DTSTART:${utcStamp(event.start)}`,
    `DTEND:${utcStamp(event.end)}`,
    `SUMMARY:${escapeIcsText(event.title)}`,
    `LOCATION:${escapeIcsText(event.location)}`,
    `DESCRIPTION:${escapeIcsText(event.description)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return `${lines.map(foldIcsLine).join("\r\n")}\r\n`;
}
