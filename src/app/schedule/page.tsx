import Link from "next/link";

import { AT_HOME_EXPERIENCES } from "@/utils/content/offerings";
import {
  APPOINTMENT_ROUTE,
  START_PLANNING_ROUTE,
} from "@/utils/content/schedule";

const CHOICES = [
  {
    href: APPOINTMENT_ROUTE,
    eyebrow: "Consultation",
    title: "Plan it with us",
    description:
      "Weddings, celebrations, and events that start with a conversation. We'll book a time to talk through your vision.",
    action: "Book a consultation",
    note: "Not sure yet? Start here.",
  },
  {
    href: AT_HOME_EXPERIENCES.href,
    eyebrow: "At-home experience",
    title: "Choose a package",
    description:
      "A dinner or celebration set up in your home. Pick a package and we'll handle the planning, setup, and details.",
    action: "See packages",
    note: "Ready to book an at-home event.",
  },
];

const SchedulePage = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24 pt-36 sm:px-6">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-brown-500">
          Start planning
        </p>
        <h1 className="font-nickainley mt-4 text-5xl text-[#CE6B69] sm:text-6xl">
          What are you planning?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-brown-700">
          One answer is enough. Book a consultation, or choose a package.
        </p>
      </header>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {CHOICES.map(({ href, eyebrow, title, description, action, note }) => (
          <Link
            key={href}
            href={href}
            className="group block rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            <article className="flex h-full flex-col rounded-3xl border border-brown-200 bg-white px-6 py-8 text-left shadow-sm transition group-hover:shadow-md sm:px-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-brown-500">
                {eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-brown-800">
                {title}
              </h2>
              <p className="mt-3 flex-1 leading-relaxed text-brown-700">
                {description}
              </p>
              <p className="mt-4 text-sm text-brown-500">{note}</p>
              <span className="mt-6 inline-flex self-start rounded-full bg-green-500 px-5 py-2.5 text-sm font-medium text-white transition group-hover:bg-green-700">
                {action}
              </span>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const metadata = {
  title: "Start Planning | Aniah Social Events",
  description:
    "Tell us what you're planning. Book a consultation or choose an at-home experience package.",
  alternates: {
    canonical: `https://www.aniahsocialevents.com${START_PLANNING_ROUTE}`,
  },
};

export default SchedulePage;
