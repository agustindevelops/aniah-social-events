import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import BookingForm from "@/app/at-home-experiences/[packageId]/components/BookingForm";
import PackageGallery from "@/app/at-home-experiences/[packageId]/components/PackageGallery";
import { getPublicPackage } from "@/lib/ase-admin/packages";

type Props = {
  params: Promise<{ packageId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { packageId } = await params;
  const pkg = await getPublicPackage(packageId);
  return {
    title: pkg
      ? `Book ${pkg.name} | Aniah Social Events`
      : "Book an At-Home Experience | Aniah Social Events",
  };
}

const BookPackagePage = async ({ params }: Props) => {
  const { packageId } = await params;
  const pkg = await getPublicPackage(packageId);
  if (!pkg) notFound();

  const hasMedia = pkg.media.length > 0;
  const details = pkg.description ?? pkg.summary;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-32 pt-36 sm:px-6 lg:px-8 lg:pb-24">
      <Link
        href="/at-home-experiences"
        className="text-sm font-medium text-brown-600 hover:text-brown-800"
      >
        ← All experiences
      </Link>
      <article
        className={`mb-16 mt-4 grid gap-8 ${
          hasMedia ? "lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:items-start" : ""
        }`}
      >
        {hasMedia ? <PackageGallery media={pkg.media} name={pkg.name} /> : null}
        <div className="min-w-0">
          <h1 className="font-moonjelly text-3xl text-[#CE6B69] sm:text-4xl">
            {pkg.name}
          </h1>
          {details ? (
            <div className="prose mt-6 max-w-none font-libre text-brown-700 prose-headings:font-moonjelly prose-headings:text-brown-800 prose-p:text-brown-700 prose-a:text-brown-800 prose-blockquote:text-brown-700 prose-strong:text-brown-800 prose-li:text-brown-700">
              <ReactMarkdown
                components={{
                  a: ({ href, children }) => (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
                }}
              >
                {details}
              </ReactMarkdown>
            </div>
          ) : null}
        </div>
      </article>

      <section aria-labelledby="book-heading">
        <h2
          id="book-heading"
          className="mb-6 font-moonjelly text-2xl text-[#CE6B69] sm:text-3xl"
        >
          Book your experience
        </h2>
        <BookingForm packageId={pkg.id} packageName={pkg.name} />
      </section>
    </div>
  );
};

export const revalidate = 3600;

export default BookPackagePage;
