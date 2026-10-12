import type { Metadata } from "next";
import Link from "next/link";

import BookingActions from "@/app/intimate-celebrations/booked/components/BookingActions";
import { NEXT_STEPS } from "@/app/intimate-celebrations/booked/components/nextSteps";
import {
  type BookingConfirmation,
  getBookingConfirmation,
} from "@/lib/ase-admin/booking";
import { bookingDetailRows } from "@/lib/booking/confirmation";

export const metadata: Metadata = {
  title: "Your Intimate Celebration Is Booked | Aniah Social Events",
  robots: { index: false },
};

type Props = {
  searchParams: Promise<{
    order?: string | string[];
    session_id?: string | string[];
  }>;
};

/** A failed lookup falls back to the generic confirmation. */
async function loadBooking(
  sessionId: string | null
): Promise<BookingConfirmation | null> {
  if (!sessionId) return null;
  try {
    return await getBookingConfirmation(sessionId);
  } catch {
    return null;
  }
}

const BookingDetails = ({ booking }: { booking: BookingConfirmation }) => (
  <div className="mx-auto mt-10 max-w-xl rounded-2xl bg-white p-6 text-left shadow-md">
    <h2 className="text-lg font-semibold text-brown-800">Your booking</h2>
    <dl className="mt-3 divide-y divide-brown-100">
      {bookingDetailRows(booking).map((row) => (
        <div key={row.label} className="grid grid-cols-3 gap-4 py-2.5 text-sm">
          <dt className="text-brown-500">{row.label}</dt>
          <dd
            className={
              row.label === "Booking reference"
                ? "col-span-2 break-all font-mono text-xs text-brown-800"
                : "col-span-2 whitespace-pre-line text-brown-800"
            }
          >
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
    <BookingActions booking={booking} />
  </div>
);

const BookedPage = async ({ searchParams }: Props) => {
  const { order, session_id: sessionIdParam } = await searchParams;
  const orderId = typeof order === "string" ? order : null;
  const sessionId = typeof sessionIdParam === "string" ? sessionIdParam : null;
  const booking = await loadBooking(sessionId);
  const confirming = booking !== null && !booking.paid;

  return (
    <div className="mx-auto max-w-2xl px-4 pb-24 pt-40 text-center sm:px-6">
      <h1 className="font-nickainley text-5xl text-[#CE6B69] sm:text-6xl">
        You&apos;re booked!
      </h1>
      <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-brown-700">
        {booking?.firstName ? `Thank you, ${booking.firstName}, for` : "Thank you for"}{" "}
        booking your intimate celebration.{" "}
        {confirming
          ? "We're confirming your payment with Stripe; this page will show it once it's done."
          : "Your payment was received and a receipt is on its way to your inbox."}
      </p>

      {booking ? <BookingDetails booking={booking} /> : null}

      <div className="mx-auto mt-10 max-w-md rounded-2xl bg-white p-6 text-left shadow-md">
        <h2 className="text-lg font-semibold text-brown-800">
          What happens next
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-brown-700">
          {NEXT_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
        {!booking && orderId ? (
          <p className="mt-5 border-t border-brown-100 pt-4 text-xs text-brown-500">
            Booking reference: <span className="font-mono">{orderId}</span>
          </p>
        ) : null}
      </div>
      <Link
        href="/"
        className="mt-10 inline-flex rounded-full bg-green-500 px-6 py-2.5 font-medium text-white shadow-sm transition hover:bg-green-700"
      >
        Back to home
      </Link>
    </div>
  );
};

export default BookedPage;
