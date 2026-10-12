import type { BookingConfirmation } from "@/lib/ase-admin/booking";
import {
  bookingCalendarEvent,
  buildIcs,
  googleCalendarUrl,
} from "@/lib/booking/calendar";
import { bookingDetailRows } from "@/lib/booking/confirmation";

const booking: BookingConfirmation = {
  reference: "cmv5n1fcj0002lbxz8ztt8dg3",
  paid: true,
  packageName: "Fantasy Forest",
  firstName: "Agustin",
  eventDate: "2026-10-23",
  eventStartTime: "18:00",
  eventEndTime: "21:00",
  guestCount: 6,
  totalCents: 45000,
  setupStartsAt: "2026-10-23T19:00:00.000Z",
  setupEndsAt: "2026-10-23T21:00:00.000Z",
  pickupStartsAt: "2026-10-24T02:30:00.000Z",
  pickupEndsAt: "2026-10-24T03:30:00.000Z",
  address: {
    addressLine1: "123 Main St, Apt 4",
    addressLine2: null,
    city: "Pflugerville",
    state: "TX",
    zipcode: "78660",
  },
};

describe("booking calendar", () => {
  it("places the celebration in Central time", () => {
    const event = bookingCalendarEvent(booking);
    // October is CDT (UTC-5).
    expect(event?.start.toISOString()).toBe("2026-10-23T23:00:00.000Z");
    expect(event?.end.toISOString()).toBe("2026-10-24T02:00:00.000Z");
  });

  it("uses standard time after daylight saving ends", () => {
    const event = bookingCalendarEvent({ ...booking, eventDate: "2026-12-05" });
    // December is CST (UTC-6).
    expect(event?.start.toISOString()).toBe("2026-12-06T00:00:00.000Z");
  });

  it("rolls an end time past midnight into the next day", () => {
    const event = bookingCalendarEvent({
      ...booking,
      eventStartTime: "22:00",
      eventEndTime: "01:00",
    });
    expect(event?.end.toISOString()).toBe("2026-10-24T06:00:00.000Z");
  });

  it("returns null without a date or times", () => {
    expect(bookingCalendarEvent({ ...booking, eventStartTime: null })).toBeNull();
  });

  it("builds a Google Calendar link", () => {
    const event = bookingCalendarEvent(booking);
    if (!event) throw new Error("expected an event");
    const url = new URL(googleCalendarUrl(event));
    expect(url.origin + url.pathname).toBe(
      "https://calendar.google.com/calendar/render"
    );
    expect(url.searchParams.get("action")).toBe("TEMPLATE");
    expect(url.searchParams.get("dates")).toBe("20261023T230000Z/20261024T020000Z");
    expect(url.searchParams.get("text")).toBe("Intimate Celebration · Fantasy Forest");
    expect(url.searchParams.get("location")).toBe(
      "123 Main St, Apt 4, Pflugerville, TX 78660"
    );
  });

  it("builds an escaped, folded ICS file", () => {
    const event = bookingCalendarEvent(booking);
    if (!event) throw new Error("expected an event");
    const ics = buildIcs(event, new Date("2026-10-12T12:00:00.000Z"));
    const lines = ics.split("\r\n");

    expect(ics.endsWith("\r\n")).toBe(true);
    expect(lines).toContain("DTSTART:20261023T230000Z");
    expect(lines).toContain("DTEND:20261024T020000Z");
    expect(lines).toContain("DTSTAMP:20261012T120000Z");
    expect(lines).toContain(`UID:${booking.reference}@aniahsocialevents.com`);
    expect(ics).toContain("LOCATION:123 Main St\\, Apt 4\\, Pflugerville\\, TX 78660");

    const unfolded = ics.replace(/\r\n /g, "");
    expect(unfolded).toContain("\\nBooking reference: cmv5n1fcj0002lbxz8ztt8dg3");
    for (const line of lines) {
      expect(Buffer.byteLength(line, "utf8")).toBeLessThanOrEqual(75);
    }
  });
});

describe("booking detail rows", () => {
  it("lists the booking facts in order", () => {
    expect(bookingDetailRows(booking).map((row) => row.label)).toEqual([
      "Package",
      "Event date",
      "Celebration",
      "Guests",
      "Setup",
      "Pickup",
      "Location",
      "Total paid",
      "Booking reference",
    ]);
  });

  it("skips facts the booking does not have", () => {
    const rows = bookingDetailRows({
      ...booking,
      paid: false,
      setupStartsAt: null,
      address: null,
    });
    const labels = rows.map((row) => row.label);
    expect(labels).not.toContain("Setup");
    expect(labels).not.toContain("Location");
    expect(labels).toContain("Total");
  });
});
