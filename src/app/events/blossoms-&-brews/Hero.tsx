import Image from 'next/image';
import { BLOSSOMS_AND_BREWS } from '@/utils/content/events';

export default function Hero() {
  return (
    <div className='bg-gray-900'>
      <div className='relative isolate overflow-hidden pt-14'>
        <Image
          className='-z-10'
          src='/images/blossoms-and-brews/hero.jpg'
          alt='Luxurious tea party set with pastel teapots, desserts, and floral decorations, framed for a central message, evoking an elegant and magical ambiance.'
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className='z-20 mx-auto max-w-2xl py-24 sm:py-64 lg:py-64'>
          <div className='flex flex-col items-center text-center'>
            <Image
              src={BLOSSOMS_AND_BREWS.HERO.IMAGE}
              alt='Blossoms & Brews Logo'
              height={450}
              width={400}
              priority
              className='mx-auto max-w-full'
            />

            <a
              href='#cta'
              className='text-cream-200 mb-24 mt-4 transform rounded-full border border-pink-300 bg-white px-4 py-2 text-lg font-bold shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-pink-300 hover:shadow-md'
            >
              {BLOSSOMS_AND_BREWS.HERO.CTA_LABEL}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
