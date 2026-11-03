import OptimizedImage from "@/components/OptimizedImage";

type MomentImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const PEOPLE: {
  label: string;
  title: string;
  body: string;
  image: MomentImage;
}[] = [
  {
    label: "Event Planning",
    title: "You have something to celebrate, but where do you start?",
    body: "You have the occasion in mind, but turning all those ideas into a plan feels overwhelming. We'll guide you through the decisions, details, and logistics so you can enjoy the journey as much as the celebration.",
    image: {
      src: "/images/homepage/wedding-planning.webp",
      alt: "A bride and groom walking down stone stairs after their ceremony, with their wedding party close behind",
      width: 1080,
      height: 1350,
    },
  },
  {
    label: "Event Design & Styling",
    title: "You have a vision. Let's bring it to life.",
    body: "You know how you want your celebration to feel, but aren't sure how to create it. We'll turn your inspiration into a thoughtfully styled experience that feels uniquely yours.",
    image: {
      src: "/images/homepage/tablescape.webp",
      alt: "A blush tablescape with white plates, gold flatware, taper candles, and a centerpiece of cream and peach roses",
      width: 1200,
      height: 1500,
    },
  },
  {
    label: "Day-of Coordination",
    title: "You've planned everything. Now you deserve to enjoy it.",
    body: "You've put so much thought into every detail. Let us take care of the timeline, vendors, and moving pieces so you can be fully present for the moments that matter.",
    image: {
      src: "/images/homepage/coordinator.webp",
      alt: "A coordinator sitting in a venue pew, writing the ceremony timeline on a clipboard",
      width: 1200,
      height: 1500,
    },
  },
];

const Picture = ({ label, image }: { label: string; image: MomentImage }) => {
  return (
    <figure className="w-full">
      <div className="rounded-3xl border border-brown-200 bg-[#f9f1ec] p-3 sm:p-4">
        <div className="overflow-hidden rounded-2xl">
          <OptimizedImage
            host="vercel"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="aspect-[4/5] h-auto w-full object-cover"
            sizes="(min-width: 768px) 28rem, 100vw"
          />
        </div>
        <figcaption className="mt-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-brown-500 sm:mt-4">
          {label}
        </figcaption>
      </div>
    </figure>
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
        {PEOPLE.map(({ label, title, body, image }, index) => {
          const pictureFirst = index % 2 === 1;

          return (
            <article
              key={label}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
            >
              <div
                className={`order-1 text-center md:text-left ${
                  pictureFirst ? "md:order-2" : ""
                }`}
              >
                <h3 className="font-moonjelly text-3xl text-brown-800 sm:text-4xl">
                  {title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-brown-700 sm:text-lg">
                  {body}
                </p>
              </div>
              <div className={`order-2 ${pictureFirst ? "md:order-1" : ""}`}>
                <Picture label={label} image={image} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default WhoWeAreFor;
