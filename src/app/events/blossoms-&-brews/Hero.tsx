import Image from 'next/image';
import { BLOSSOMS_AND_BREWS } from '@/utils/content/events';
import TicketButton from '@/app/events/blossoms-&-brews/TicketButton';
import { FaChevronDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className='bg-gray-900'>
      <div className='relative isolate overflow-hidden pt-14'>
        <Image
          className='-z-10'
          src='/images/blossoms-and-brews/hero.jpg'
          alt='Luxurious tea party set with pastel teapots, desserts, and floral decorations, framed for a central message, evoking an elegant and magical ambiance.'
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className='z-20 mx-auto max-w-2xl sm:py-36 lg:py-64'>
          <div className='flex flex-col items-center text-center'>
            <Image
              src={BLOSSOMS_AND_BREWS.HERO.IMAGE}
              alt='Blossoms & Brews Logo'
              height={400}
              width={300}
              priority
              className='mx-auto max-w-full'
            />
            <div className='mb-4'>
              <TicketButton />
            </div>
            <div className='text-primary mx-auto mb-24'>
              <FaChevronDown size={36} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
