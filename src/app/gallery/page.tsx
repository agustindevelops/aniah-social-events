import Image from 'next/image';
import getGallery, { sort } from '@/utils/s3/getGallery';
import formatUrl from '@/utils/s3/formatUrl';
import React from 'react';
import { getFileExt, isPhoto, isVideo } from '@/utils/functions';

const Page = async () => {
  const gallery = await getGallery();

  return (
    <div className='my-24 flex flex-col items-center justify-center'>
      <h1 className='my-12'>Gallery</h1>
      <div className='container mx-auto w-full columns-2 px-4 md:columns-4'>
        {gallery.map(({ Key }, i) => {
          const endOfUrl = getFileExt(Key);
          if (isPhoto(endOfUrl))
            return (
              <div key={i} className='aspect-w-1 aspect-h-1 mb-4'>
                <Image
                  src={formatUrl(Key || '')}
                  alt={'image'}
                  width={600}
                  height={600}
                  key={i}
                  className='h-auto max-w-full rounded-lg'
                />
              </div>
            );

          if (isVideo(endOfUrl))
            return (
              <div key={i} className='aspect-w-1 aspect-h-1 mb-4'>
                <video
                  autoPlay
                  loop
                  muted
                  preload='auto'
                  playsInline
                  className='h-full max-w-full rounded-lg'
                >
                  <source src={formatUrl(Key || '')} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            );

          return <></>;
        })}
      </div>
    </div>
  );
};

export default Page;
