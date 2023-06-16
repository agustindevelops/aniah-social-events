import Image from 'next/image';

const OurServices = () => {
  return (
    <div>
      <Image
        src='/images/our-services-title.png'
        alt='Our Services'
        width={471}
        height={114}
        className='mx-auto mb-12'
      />
      <div className={'grid grid-cols-1 gap-4 sm:grid-cols-3'}>
        <Image
          src='/images/invitation-signage-and-design.png'
          alt='Planning & Coordination'
          width={470}
          height={124}
          className='mx-auto mb-12'
        />
        <Image
          src='/images/tablescape-event-design.png'
          alt='Planning & Coordination'
          width={470}
          height={124}
          className='mx-auto mb-12'
        />
        <Image
          src='/images/wedding-day-content-creation.png'
          alt='Planning & Coordination'
          width={470}
          height={124}
          className='mx-auto mb-12'
        />
      </div>
    </div>
  );
};

export default OurServices;
