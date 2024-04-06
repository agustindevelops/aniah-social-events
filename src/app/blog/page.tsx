import contentfulClientApi from '@/lib/contentful/contentfulClientApi';
import { GetEntriesType } from '@/lib/contentful/types';
import Link from 'next/link';

export default async function Blogs() {
  const blogs: GetEntriesType = await contentfulClientApi.getEntries({
    content_type: 'pageBlogPost',
  });

  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            From the blog
          </h2>
          <p className='mt-2 text-lg leading-8 text-gray-600'>
            Learn how to grow your business with our expert advice.
          </p>
          <div className='mt-16 space-y-20 lg:mt-20 lg:space-y-20'>
            {blogs.items.map(
              ({
                fields: {
                  slug,
                  publishedDate,
                  title,
                  shortDescription,
                  author: {
                    fields: {
                      name: authorName,
                      avatar: {
                        fields: {
                          file: { url: avatarUrl },
                        },
                      },
                    },
                  },
                  featuredImage: {
                    fields: {
                      file: { url: featuredUrl },
                    },
                  },
                },
              }) => (
                <article
                  key={slug}
                  className='relative isolate flex flex-col gap-8 lg:flex-row'
                >
                  <div className='relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0'>
                    <img
                      src={featuredUrl}
                      alt=''
                      className='absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover'
                    />
                    <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
                  </div>
                  <div>
                    <div className='flex items-center gap-x-4 text-xs'>
                      <time dateTime={publishedDate} className='text-gray-500'>
                        {publishedDate}
                      </time>
                    </div>
                    <div className='group relative max-w-xl'>
                      <h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
                        <Link href={slug}>
                          <span className='absolute inset-0' />
                          {title}
                        </Link>
                      </h3>
                      <p className='mt-5 text-sm leading-6 text-gray-600'>
                        {shortDescription}
                      </p>
                    </div>
                    <div className='mt-6 flex border-t border-gray-900/5 pt-6'>
                      <div className='relative flex items-center gap-x-4'>
                        <img
                          src={avatarUrl}
                          alt=''
                          className='h-10 w-10 rounded-full bg-gray-50'
                        />
                        <div className='text-sm leading-6'>
                          <p className='font-semibold text-gray-900'>
                            <span>
                              <span className='absolute inset-0' />
                              {authorName}
                            </span>
                          </p>
                          <p className='text-gray-600'>{'post.author.role'}</p>
                        </div>
                      </div>
                    </div>
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
