import React from 'react';
import { BLOSSOMS_AND_BREWS } from '@/utils/content/events';

const TicketButton = () => {
  return (
    <div className='flex flex-col items-center text-center'>
      <a
        href={BLOSSOMS_AND_BREWS.CTA.URL}
        className='text-cream-200 text-brown-500 mt-4 transform rounded-full border border-pink-300 bg-white px-4 py-2 text-lg font-bold shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-pink-300 hover:shadow-md'
      >
        {BLOSSOMS_AND_BREWS.HERO.CTA_LABEL}
      </a>
    </div>
  );
};

export default TicketButton;
