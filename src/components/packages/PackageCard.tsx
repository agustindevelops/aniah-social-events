import Link from "next/link";
import ReactMarkdown from "react-markdown";

import type { PublicPackage } from "@/lib/ase-admin/packages";
import { AT_HOME_EXPERIENCES } from "@/utils/content/offerings";

const PackageCard = ({ pkg }: { pkg: PublicPackage }) => {
  const image = pkg.media.find((media) => media.type === "image");

  return (
    <Link
      href={`${AT_HOME_EXPERIENCES.href}/${pkg.slug}`}
      className="group block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
    >
      <article className="flex w-full flex-col overflow-hidden rounded-2xl bg-cream text-start shadow-md transition group-hover:shadow-lg sm:min-h-80 sm:flex-row">
        <div className="relative aspect-[3/4] w-full shrink-0 bg-peach-200/20 sm:w-64 md:w-72 lg:w-80">
          {image ? (
            // Signed admin URLs expire and are not on the Next image allowlist.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image.url}
              alt={pkg.name}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          ) : null}
        </div>
        <div className="flex min-w-0 flex-1 flex-col bg-white px-6 py-6 sm:px-8 sm:py-8">
          <h2 className="font-moonjelly text-2xl text-brown-800 sm:text-3xl">
            {pkg.name}
          </h2>
          {pkg.summary ? (
            <div className="prose prose-sm mt-4 max-w-none font-libre text-brown-700 prose-headings:font-moonjelly prose-headings:text-brown-800 prose-p:text-brown-700 prose-li:text-brown-700 prose-strong:text-brown-800">
              {/* The whole card is a link, so markdown links cannot nest. */}
              <ReactMarkdown components={{ a: ({ children }) => <span>{children}</span> }}>
                {pkg.summary}
              </ReactMarkdown>
            </div>
          ) : null}
          {pkg.items.length > 0 ? (
            <ul className="mt-4 space-y-1 font-libre text-brown-700">
              {pkg.items.map((item) => (
                <li key={item.itemId}>
                  {item.name}
                  {item.quantity > 1 ? ` × ${item.quantity}` : ""}
                </li>
              ))}
            </ul>
          ) : null}
          <span className="mt-6 inline-flex self-start rounded-full bg-green-500 px-5 py-2 font-medium text-white shadow-sm transition group-hover:bg-green-700">
            Book this celebration
          </span>
        </div>
      </article>
    </Link>
  );
};

export default PackageCard;
