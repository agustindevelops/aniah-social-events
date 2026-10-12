"use client";

import { useState } from "react";

import type { BookingConfirmation } from "@/lib/ase-admin/booking";
import {
  bookingCalendarEvent,
  buildIcs,
  googleCalendarUrl,
} from "@/lib/booking/calendar";

const SECONDARY_BUTTON =
  "inline-flex items-center justify-center rounded-full border border-brown-300 bg-white px-5 py-2.5 text-sm font-medium text-brown-800 shadow-sm transition hover:border-brown-500 hover:bg-brown-50";

function downloadBlob(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

const BookingActions = ({ booking }: { booking: BookingConfirmation }) => {
  const [pdfState, setPdfState] = useState<"idle" | "working" | "error">("idle");
  const event = bookingCalendarEvent(booking);
  const fileBase = `aniah-booking-${booking.reference}`;

  const downloadIcs = () => {
    if (!event) return;
    downloadBlob(
      new Blob([buildIcs(event)], { type: "text/calendar;charset=utf-8" }),
      `${fileBase}.ics`
    );
  };

  const downloadPdf = async () => {
    setPdfState("working");
    try {
      const [{ pdf }, { default: BookingPdf }] = await Promise.all([
        import("@react-pdf/renderer"),
        import("./BookingPdf"),
      ]);
      const blob = await pdf(
        <BookingPdf
          booking={booking}
          logoUrl={`${window.location.origin}/images/aniah-social-events-logo.png`}
        />
      ).toBlob();
      downloadBlob(blob, `${fileBase}.pdf`);
      setPdfState("idle");
    } catch {
      setPdfState("error");
    }
  };

  return (
    <div className="mt-6 border-t border-brown-100 pt-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button
          type="button"
          onClick={downloadPdf}
          disabled={pdfState === "working"}
          className="inline-flex items-center justify-center rounded-full bg-green-500 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-green-700 disabled:opacity-60"
        >
          {pdfState === "working" ? "Preparing PDF…" : "Download PDF"}
        </button>
        {event ? (
          <>
            <a
              href={googleCalendarUrl(event)}
              target="_blank"
              rel="noopener noreferrer"
              className={SECONDARY_BUTTON}
            >
              Add to Google Calendar
            </a>
            <button type="button" onClick={downloadIcs} className={SECONDARY_BUTTON}>
              Apple / Outlook calendar
            </button>
          </>
        ) : null}
      </div>
      {pdfState === "error" ? (
        <p className="mt-3 text-sm text-peach-700" role="alert">
          We couldn&apos;t create the PDF. Please try again.
        </p>
      ) : null}
    </div>
  );
};

export default BookingActions;
