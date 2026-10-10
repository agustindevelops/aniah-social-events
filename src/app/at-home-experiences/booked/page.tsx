import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your At-Home Experience Is Booked | Aniah Social Events",
  robots: { index: false },
};

type Props = {
  searchParams: Promise<{ order?: string | string[] }>;
};

const BookedPage = async ({ searchParams }: Props) => {
  const { order } = await searchParams;
  const orderId = typeof order === "string" ? order : null;

  return (
    <div className="mx-auto max-w-2xl px-4 pb-24 pt-40 text-center sm:px-6">
      <h1 className="font-nickainley text-5xl text-[#CE6B69] sm:text-6xl">
        You&apos;re booked!
      </h1>
      <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-brown-700">
        Thank you for booking your at-home experience. Your payment was
        received and a receipt is on its way to your inbox.
      </p>
      <div className="mx-auto mt-10 max-w-md rounded-2xl bg-white p-6 text-left shadow-md">
        <h2 className="text-lg font-semibold text-brown-800">
          What happens next
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-brown-700">
          <li>
            We&apos;ll review your photos and reach out if we have any questions
            about your space.
          </li>
          <li>
            Please have the setup area cleared before your installation window
            begins.
          </li>
          <li>
            Need to reschedule? One reschedule is included. Just reply to your
            confirmation email.
          </li>
        </ul>
        {orderId ? (
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
