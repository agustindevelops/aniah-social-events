import React from 'react';
import { BLOSSOMS_AND_BREWS } from '@/utils/content/events';

const Banner = () => {
  return (
    <div className='my-32 sm:my-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
      <img
        src={BLOSSOMS_AND_BREWS.BANNER.URL}
        alt=''
        className='aspect-[2/1] w-full object-cover xl:rounded-3xl'
      />
    </div>
  );
};

export default Banner;