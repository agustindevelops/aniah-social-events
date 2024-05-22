import contentfulClientApi from '@/lib/contentful/contentfulClientApi';
import { GetEntriesType } from '@/lib/contentful/types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Author from '@/lib/contentful/components/Author';
import { HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Date from '@/lib/contentful/components/Date';
import { getFileExt, isPhoto, isVideo } from '@/utils/functions';
import formatUrl from '@/utils/s3/formatUrl';
import React from 'react';

export default async function Page({ params }: { params: { slug: string } }) {
  const blogs = (await contentfulClientApi.getEntries({
    content_type: 'pageBlogPost',
    'fields.slug': params.slug,
  })) as unknown as GetEntriesType;

  const [
    {
      fields: {
        internalName,
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
        content,
      },
    },
  ] = blogs.items;

  const endOfUrl = getFileExt(featuredUrl);

  return (
    <div className='mt-24'>
      <div className='relative bg-white'>
        <div className='mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end'>
          <div className='lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2'>
            <div className='relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0'>
              {isPhoto(endOfUrl) ? (
                <img
                  className='absolute inset-0 h-full w-full bg-gray-50 object-cover object-bottom'
                  src={featuredUrl}
                  alt=''
                />
              ) : isVideo(endOfUrl) ? (
                <video
                  autoPlay
                  loop
                  muted
                  preload='auto'
                  playsInline
                  className='absolute inset-0 h-full w-full bg-gray-50 object-cover object-bottom'
                >
                  <source src={featuredUrl} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className='px-6 lg:contents'>
            <div className='mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2'>
              <Link
                href='/blog'
                type='button'
                aria-label='Go back to blogs'
                className='group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition'
              >
                <HomeIcon className='h-8 w-8 stroke-zinc-500 transition group-hover:stroke-zinc-700' />
              </Link>
              <Date date={publishedDate} />
              <h1 className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                {title}
              </h1>
              <article className='prose my-8'>
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
