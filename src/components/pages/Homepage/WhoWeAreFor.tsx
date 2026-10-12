import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
  PaintBrushIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

type Icon = typeof ClockIcon;

const PEOPLE: {
  label: string;
  title: string;
  body: string;
  icons: Icon[];
}[] = [
  {
    label: "Event Planning",
    title: "You have something to celebrate, but where do you start?",
    body: "You have the occasion in mind, but turning all those ideas into a plan feels overwhelming. We'll guide you through the decisions, details, and logistics so you can enjoy the journey as much as the celebration.",
    icons: [ClipboardDocumentListIcon],
  },
  {
    label: "Event Design & Styling",
    title: "You have a vision. Let's bring it to life.",
    body: "You know how you want your celebration to feel, but aren't sure how to create it. We'll turn your inspiration into a thoughtfully styled experience that feels uniquely yours.",
    icons: [PaintBrushIcon],
  },
  {
    label: "Day-of Coordination",
    title: "You've planned everything. Now you deserve to enjoy it.",
    body: "You've put so much thought into every detail. Let us take care of the timeline, vendors, and moving pieces so you can be fully present for the moments that matter.",
    icons: [ClockIcon, ClipboardDocumentCheckIcon, UserGroupIcon],
  },
];

const Picture = ({ label, icons }: { label: string; icons: Icon[] }) => {
  const grouped = icons.length > 1;

  return (
    <div className="flex min-h-72 w-full items-center justify-center rounded-3xl border border-brown-200 bg-[#f9f1ec] py-14 sm:min-h-80">
      <div className="px-6 text-center">
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {icons.map((Icon, index) => (
            <span
              key={`${label}-${index}`}
              className={
                grouped
                  ? "flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm sm:h-20 sm:w-20"
                  : "flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-sm sm:h-32 sm:w-32"
              }
            >
              <Icon
                className={
                  grouped
                    ? "h-8 w-8 text-[#CE6B69] sm:h-10 sm:w-10"
                    : "h-14 w-14 text-[#CE6B69] sm:h-16 sm:w-16"
                }
                aria-hidden="true"
              />
            </span>
          ))}
        </div>
        <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-brown-500">
          {label}
        </p>
      </div>
    </div>
  );
};

const WhoWeAreFor = () => {
  return (
    <section className="mx-auto my-24 w-full max-w-6xl px-4 sm:px-6">
      <header className="mx-auto max-w-2xl text-center">
        <h2 className="font-nickainley text-5xl text-[#CE6B69] sm:text-6xl md:text-7xl">
          Who we&apos;re for
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-brown-700">
          Different packages for different people. Wherever you are, there is a
          way in.
        </p>
      </header>
      <div className="mt-16 flex flex-col gap-16 md:gap-24">
        {PEOPLE.map(({ label, title, body, icons }, index) => {
          const pictureFirst = index % 2 === 1;

          return (
            <article
              key={label}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
            >
              <div
                className={`order-1 text-center md:text-left ${pictureFirst ? "md:order-2" : ""}`}
              >
                <h3 className="font-moonjelly text-3xl text-brown-800 sm:text-4xl">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-brown-700 sm:text-lg">
                  {body}
                </p>
              </div>
              <div className={`order-2 ${pictureFirst ? "md:order-1" : ""}`}>
                <Picture label={label} icons={icons} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default WhoWeAreFor;
