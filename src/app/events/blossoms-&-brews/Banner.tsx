import React from 'react';
import { BLOSSOMS_AND_BREWS } from '@/utils/content/events';

const Banner = () => {
  return (
    <div className='lg:my-64 xl:mx-auto xl:max-w-7xl xl:px-8'>
      <img
        src={BLOSSOMS_AND_BREWS.BANNER.URL}
        alt={BLOSSOMS_AND_BREWS.BANNER.ALT}
        className='aspect-[2/1] w-full object-cover xl:rounded-3xl'
      />
    </div>
  );
};

export default Banner;
