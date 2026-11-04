import OptimizedImage, { type ImageHost } from "@/components/OptimizedImage";

type MomentImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  host?: ImageHost;
};

const contentfulPhoto = (path: string) =>
  `https://images.ctfassets.net/9fe6qu05vk1m/${path}?w=960&h=1200&fit=fill&f=center&q=75`;

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
      src: contentfulPhoto(
        "4qDg6b2K6fvpZq7uRy9EKz/f6ef56c91e2193f5baeb776521057a7e/RuizWedding-081.jpg"
      ),
      alt: "Wedding Planner pinning boutonniere on Grandfather of Bride",
      width: 960,
      height: 1200,
      host: "contentful",
    },
  },
  {
    label: "Event Design & Styling",
    title: "You have a vision. Let's bring it to life.",
    body: "You know how you want your celebration to feel, but aren't sure how to create it. We'll turn your inspiration into a thoughtfully styled experience that feels uniquely yours.",
    image: {
      src: contentfulPhoto(
        "1Ubr24PF6ZhBzoHcOJn2Hz/8228d7ec42b967c5c1211787ab187e35/AI6A5370.jpg"
      ),
      alt: "Tablescape Styled by ASE",
      width: 960,
      height: 1200,
      host: "contentful",
    },
  },
  {
    label: "Day-of Coordination",
    title: "You've planned everything. Now you deserve to enjoy it.",
    body: "You've put so much thought into every detail. Let us take care of the timeline, vendors, and moving pieces so you can be fully present for the moments that matter.",
    image: {
      src: contentfulPhoto(
        "2V2hIbQB5EPUKbkpt6d7IW/388d2f5905c351e87a926470b1f30b9f/IMG_0357__2_.jpg"
      ),
      alt: "Bride & Groom Sunset First Dance",
      width: 960,
      height: 1200,
      host: "contentful",
    },
  },
];

const Picture = ({ label, image }: { label: string; image: MomentImage }) => {
  return (
    <figure className="w-full">
      <div className="rounded-3xl border border-brown-200 bg-[#f9f1ec] p-3 sm:p-4">
        <div className="overflow-hidden rounded-2xl">
          <OptimizedImage
            host={image.host ?? "vercel"}
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
