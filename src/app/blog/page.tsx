import { getBlogs } from "@/lib/contentful/api";
import Author from "@/lib/contentful/components/Author";
import Date from "@/lib/contentful/components/Date";
import Image from "next/image";
import Link from "next/link";

export default async function Blogs() {
  const blogs = await getBlogs();

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tips and Tricks with Aniah Social Events
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Discover the art of sophisticated event planning with Aniah Social
            Events. Dive into our blog for insider tips, trending decor ideas,
            and inspiration for creating memorable celebrations that charm and
            delight guests. Your journey to the perfect event starts here.
          </p>
          <div className="mt-16 space-y-10 lg:space-y-10">
            {blogs.map(
              ({
                slug,
                publishedDate,
                title,
                shortDescription,
                author,
                featuredImage: {
                  fields: {
                    file: { url: featuredUrl },
                  },
                },
              }) => (
                <Link
                  href={`/blog/${slug}`}
                  className="relative isolate flex flex-col lg:flex-row transition-shadow hover:shadow-xl focus:shadow-xl rounded-2xl border border-gray-200 shadow-md"
                  tabIndex={0}
                  aria-label={`View ${title} blog post`}
                  key={`${slug}-${title}`}
                >
                  <article className="flex flex-col lg:flex-row w-full">
                    <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                      <Image
                        src={`https:${featuredUrl}`}
                        alt={title}
                        className="absolute inset-0 h-full w-full rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none lg:rounded-l-2xl bg-gray-50 object-cover object-center"
                        width={512}
                        height={512}
                      />
                    </div>
                    <div className="py-4 mx-auto">
                      <div className="flex flex-col lg:flex-row justify-between gap-x-4 text-xs px-4">
                        <Date date={publishedDate} />
                        <div className="lg:block hidden">
                          <Author {...author} />
                        </div>
                      </div>
                      <hr className="my-2" />
                      <div className="group relative max-w-xl p-4">
                        <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          {title}
                        </h3>
                        <p className="mt-5 text-sm leading-6 text-gray-600">
                          {shortDescription}
                        </p>
                      </div>
                      <div className="lg:hidden px-4">
                        <Author {...author} />
                      </div>
                    </div>
                  </article>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Event Planning Tips & Advice – Blog by Aniah Social Events",
  description:
    "Explore expert event and wedding planning tips, inspiration, and behind-the-scenes insights from the Aniah Social Events team.",
};
