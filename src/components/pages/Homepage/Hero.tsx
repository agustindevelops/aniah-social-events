import Image from 'next/image';

const Hero = () => {
  return (
    <div className={'h-screen'}>
      <div
        className='flex h-full w-full flex-col items-center justify-center bg-cover'
        style={{
          backgroundImage: "url('/images/aniah-social-events-flowers.jpg')",
        }}
      >
        <div className='container mx-auto text-center text-center text-white'>
          <div className='absolute inset-0 flex items-center justify-center sm:hidden'>
            <Image
              src='/images/aniah-social-events-large-logo.png'
              alt='Placeholder image'
              width={300}
              height={300}
            />
          </div>
          <div className='absolute inset-0 hidden items-center justify-center sm:flex'>
            <Image
              src='/images/aniah-social-events-large-logo.png'
              alt='Placeholder image'
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
