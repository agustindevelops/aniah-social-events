import React from 'react';

const Banner = () => {
  return (
    <div className='my-32 sm:my-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
      <img
        src='/images/blossoms-and-brews/banner.png'
        alt=''
        className='aspect-[2/1] w-full object-cover xl:rounded-3xl'
      />
    </div>
  );
};

export default Banner;
