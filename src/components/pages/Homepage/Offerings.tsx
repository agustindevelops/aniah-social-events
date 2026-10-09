import { OFFERINGS } from "@/utils/content/offerings";
import Link from "next/link";

const Offerings = () => {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-3 md:grid-cols-2 md:gap-4">
      {OFFERINGS.map(({ title, description, cta, href }) => (
        <article
          key={href}
          className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-peach-200 bg-cream/95 px-5 py-5 text-left shadow-lg backdrop-blur-md sm:px-6 xl:flex-row xl:items-center"
        >
          <div className="min-w-0">
            <h2 className="text-lg font-semibold tracking-tight text-[#CE6B69] sm:text-xl">
              {title}
            </h2>
            <p className="mt-1 text-sm leading-snug text-brown-700">
              {description}
            </p>
          </div>
          <Link
            href={href}
            className="shrink-0 rounded-full bg-green-500 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-green-700"
          >
            {cta}
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Offerings;
