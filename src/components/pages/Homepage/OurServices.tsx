import Image from 'next/image';
import UnstyledLink from '@/components/links/UnstyledLink';

const OurServices = () => {
  return (
    <div>
      <Image
        src='/images/our-services-title.png'
        alt='Our Services'
        width={471}
        height={114}
        className='mx-auto sm:mb-12'
      />
      <div className={'hidden gap-4 sm:grid sm:grid-cols-3'}>
        <div className='flex flex-col items-center gap-2'>
          <UnstyledLink
            href='/services/invitations-and-paper-goods'
            className='bg-peach-100 rounded border transition duration-300 hover:scale-105 hover:shadow-lg'
          >
            <Image
              src='/images/invitation-signage-and-design.png'
              alt='Invitations & Paper Goods'
              width={470}
              height={124}
              className='mx-auto'
            />
          </UnstyledLink>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <UnstyledLink
            href='/services/event-content-creator'
            className='bg-peach-100 rounded border transition duration-300 hover:scale-105 hover:shadow-lg'
          >
            <Image
              src='/images/wedding-day-content-creation.png'
              alt='Event Content Creator'
              width={470}
              height={124}
              className='mx-auto'
            />
          </UnstyledLink>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <UnstyledLink
            href='/services/all-about-tablescapes'
            className='bg-peach-100 rounded border transition duration-300 hover:scale-105 hover:shadow-lg'
          >
            <Image
              src='/images/tablescape-event-design.png'
              alt='All About Tablescapes'
              width={470}
              height={124}
              className='mx-auto'
            />
          </UnstyledLink>
        </div>
      </div>
      <div className={'flex flex-col gap-2 sm:hidden'}>
        <UnstyledLink
          href='/services/invitations-and-paper-goods'
          className='bg-peach-100 rounded border transition duration-300 hover:scale-105 hover:shadow-lg'
        >
          <Image
            src='/images/invitation-signage-and-design.png'
            alt='Invitations & Paper Goods'
            width={325}
            height={82}
            className='mx-auto'
          />
        </UnstyledLink>
        <UnstyledLink
          href='/services/event-content-creator'
          className='bg-peach-100 rounded border transition duration-300 hover:scale-105 hover:shadow-lg'
        >
          <Image
            src='/images/wedding-day-content-creation.png'
            alt='Event Content Creator'
            width={325}
            height={82}
            className='mx-auto'
          />
        </UnstyledLink>
        <UnstyledLink
          href='/services/all-about-tablescapes'
          className='bg-peach-100 rounded border transition duration-300 hover:scale-105 hover:shadow-lg'
        >
          <Image
            src='/images/tablescape-event-design.png'
            alt='All About Tablescapes'
            width={325}
            height={82}
            className='mx-auto'
          />
        </UnstyledLink>
      </div>
    </div>
  );
};

export default OurServices;
