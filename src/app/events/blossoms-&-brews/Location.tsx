import React, { FC } from 'react';
import Image from 'next/image';
import { MapIcon, CalendarIcon } from '@heroicons/react/24/outline';
import * as process from 'process';

const Location = () => {
  return (
    <section className='relative mx-4 max-w-7xl overflow-hidden rounded-lg bg-white shadow md:mx-auto '>
      <div
        className='absolute inset-0 z-0 bg-gradient-to-b from-transparent via-white to-white'
        style={{ backgroundSize: '100% 200%' }}
      />
      <div className='relative h-96 w-full'>
        <Image
          src='/images/blossoms-and-brews/venue_banner.jpg'
          layout='fill'
          objectFit='cover'
          quality={100}
          alt='Elegant glass greenhouse venue adorned with string lights at dusk, showcasing interior warm lighting and exterior spot cooling units.'
          title='Dusk View of a Modern Glasshouse Event Venue'
        />
        <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-transparent to-white' />
      </div>
      <div className='relative z-20 space-y-5 md:p-6'>
        <div className='grid grid-cols-1 justify-evenly bg-white bg-opacity-90 px-4 py-5 sm:p-6 md:grid-cols-2'>
          <div className='mb-4'>
            <h2 className='mb-12 text-3xl'>
              Steeped in Elegance: San Antonio Tea Party Time & Venue
            </h2>
            <div className='mb-8'>
              <div className='flex items-center space-x-2'>
                <CalendarIcon className='h-5 w-5' aria-hidden='true' />
                <h3 className='text-peach-500 text-2xl font-bold'>
                  Date and Time
                </h3>
              </div>
              <span className='mt-4 flex flex-col gap-1 font-semibold'>
                <time
                  className='mb-1 pl-7 text-xl font-bold'
                  dateTime='2024-08-04'
                >
                  Sunday, August 4, 2024
                </time>
                <TimeSlot
                  groupName='Daffodil Group:'
                  start='9:40 AM'
                  end='11:30 AM'
                />
                <TimeSlot
                  groupName='Sunflower Group:'
                  start='12:40 PM'
                  end='2:30 PM'
                />
              </span>
            </div>
            <div className='mb-8'>
              <div className='flex items-center space-x-2'>
                <MapIcon className='h-5 w-5' aria-hidden='true' />
                <p className='text-peach-500 text-2xl font-bold'>Location</p>
              </div>
              <p className='mt-4 flex flex-col gap-1 font-semibold'>
                <p className='mb-1 pl-7 text-xl font-bold'>
                  San Antonio Glasshouse
                </p>
                <p className='pl-7 text-sm font-bold'>
                  3847 Grosenbacher Road San Antonio, TX 78245
                </p>
              </p>
            </div>
          </div>
          <iframe
            className='w-full'
            height='450'
            loading='lazy'
            allowFullScreen
            src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJwxLAYhNEXIYRwWSb59Wzk3Q&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}`}
          />
        </div>
      </div>
    </section>
  );
};

const TimeSlot: FC<{ groupName: string; start: string; end: string }> = ({
  groupName,
  start,
  end,
}) => (
  <div className='pl-7'>
    <label className='font-bold'>{groupName}</label>
    <time className='pl-1' dateTime='2024-08-04T12:40-05:00'>
      {start}
    </time>{' '}
    -
    <time className='pl-1' dateTime='2024-08-04T14:30-05:00'>
      {end}
    </time>
  </div>
);

export default Location;
