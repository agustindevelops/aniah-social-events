import Media from "@/app/blog/[slug]/Media";
import { getBlogsBySlug } from "@/lib/contentful/api";
import Author from "@/lib/contentful/components/Author";
import Date from "@/lib/contentful/components/Date";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const blogs = await getBlogsBySlug(params.slug);

  const [
    {
      publishedDate,
      title,
      author,
      featuredImage: {
        fields: {
          file: { url: featuredImageUrl },
        },
      },
      featuredVideo,
      content,
    },
  ] = blogs;

  return (
    <div className="mt-24">
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
          {featuredVideo?.fields?.file?.url || featuredImageUrl ? (
            <Media
              video={featuredVideo?.fields?.file?.url}
              image={`https:${featuredImageUrl}`}
              alt={title}
            />
          ) : (
            <></>
          )}
          <div className="px-6 lg:contents">
            <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
              <Link
                href="/blog"
                type="button"
                aria-label="Go back to blogs"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition"
              >
                <HomeIcon className="h-8 w-8 stroke-zinc-500 transition group-hover:stroke-zinc-700" />
              </Link>
              <Date date={publishedDate} />
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h1>
              <article className="prose my-8">
                {documentToReactComponents(content)}
              </article>
              <Author {...author} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
