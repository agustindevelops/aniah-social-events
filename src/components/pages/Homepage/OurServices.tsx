import Image from 'next/image';

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
        <Image
          src='/images/invitation-signage-and-design.png'
          alt='Planning & Coordination'
          width={470}
          height={124}
          className='mx-auto'
        />
        <Image
          src='/images/wedding-day-content-creation.png'
          alt='Planning & Coordination'
          width={470}
          height={124}
          className='mx-auto'
        />
        <Image
          src='/images/tablescape-event-design.png'
          alt='Planning & Coordination'
          width={470}
          height={124}
          className='mx-auto'
        />
      </div>
      <div className={'flex flex-col gap-2 sm:hidden'}>
        <Image
          src='/images/invitation-signage-and-design.png'
          alt='Planning & Coordination'
          width={325}
          height={82}
          className='mx-auto'
        />
        <Image
          src='/images/wedding-day-content-creation.png'
          alt='Planning & Coordination'
          width={325}
          height={82}
          className='mx-auto'
        />
        <Image
          src='/images/tablescape-event-design.png'
          alt='Planning & Coordination'
          width={325}
          height={82}
          className='mx-auto'
        />
      </div>
    </div>
  );
};

export default OurServices;
