import contentfulClientApi from "@/lib/contentful/contentfulClientApi";
import { GetEntriesType } from "@/lib/contentful/types";
import Link from "next/link";
import Author from "@/lib/contentful/components/Author";
import Date from "@/lib/contentful/components/Date";

export default async function Blogs() {
  const blogs: GetEntriesType = (await contentfulClientApi.getEntries({
    content_type: "pageBlogPost",
  })) as unknown as GetEntriesType;

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
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {blogs.items.map(
              ({
                fields: {
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
                },
              }) => (
                <article
                  key={slug}
                  className="relative isolate flex flex-col gap-8 lg:flex-row"
                >
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      src={featuredUrl}
                      alt=""
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover object-bottom"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <Date date={publishedDate} />
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link href={`/blog/${slug}`}>
                          <span className="absolute inset-0" />
                          {title}
                        </Link>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">
                        {shortDescription}
                      </p>
                    </div>
                    <Author {...author} />
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
