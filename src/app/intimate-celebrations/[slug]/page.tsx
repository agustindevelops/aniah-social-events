import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import ReactMarkdown from "react-markdown";

import PackageExperience from "@/app/intimate-celebrations/[slug]/components/PackageExperience";
import PackageGallery from "@/app/intimate-celebrations/[slug]/components/PackageGallery";
import {
  getPublicPackageById,
  getPublicPackageBySlug,
} from "@/lib/ase-admin/packages";
import { parseAtHomeSelection, type SearchParams } from "@/lib/booking/atHomeSelection";
import { AT_HOME_EXPERIENCES } from "@/utils/content/offerings";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<SearchParams>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = await getPublicPackageBySlug(slug);
  if (!pkg) {
    return { title: "Book an Intimate Celebration | Aniah Social Events" };
  }
  return {
    title: `${pkg.name} | Intimate Celebrations | Aniah Social Events`,
    description: pkg.summary ?? undefined,
    alternates: { canonical: `${AT_HOME_EXPERIENCES.href}/${pkg.slug}` },
  };
}

/** Package pages were addressed by id before slugs existed; keep those links working. */
async function findPackage(slug: string) {
  const pkg = await getPublicPackageBySlug(slug);
  if (pkg) return pkg;
  const legacy = await getPublicPackageById(slug);
  if (legacy) permanentRedirect(`${AT_HOME_EXPERIENCES.href}/${legacy.slug}`);
  notFound();
}

const PackagePage = async ({ params, searchParams }: Props) => {
  const { slug } = await params;
  const pkg = await findPackage(slug);
  const selection = parseAtHomeSelection(await searchParams);

  const details = pkg.description ?? pkg.summary;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <Link
        href={AT_HOME_EXPERIENCES.href}
        className="text-sm font-medium text-brown-600 hover:text-brown-800"
      >
        ← All intimate celebrations
      </Link>
      <PackageExperience
        packageSlug={pkg.slug}
        packageName={pkg.name}
        initialSelection={selection}
        gallery={
          pkg.media.length > 0 ? (
            <PackageGallery media={pkg.media} name={pkg.name} />
          ) : null
        }
        description={
          details ? (
            <div className="prose max-w-none font-libre text-brown-700 prose-headings:font-moonjelly prose-headings:text-brown-800 prose-p:text-brown-700 prose-a:text-brown-800 prose-blockquote:text-brown-700 prose-strong:text-brown-800 prose-li:text-brown-700">
              <ReactMarkdown
                components={{
                  a: ({ href, children }) => (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      {children}
                    </a>
                  ),
                  hr: () => null,
                }}
              >
                {details}
              </ReactMarkdown>
            </div>
          ) : null
        }
      />
    </div>
  );
};

export default PackagePage;
