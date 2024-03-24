import Image from 'next/image';

export default function Hero() {
  return (
    <div className='bg-gray-900'>
      <div className='relative isolate overflow-hidden pt-14'>
        <Image
          className='-z-10'
          src='/images/blossoms-and-brews/hero.jpg'
          alt='Blossoms and Brews'
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className='z-20 mx-auto max-w-2xl py-24 sm:py-64 lg:py-64'>
          <div className='flex flex-col items-center text-center'>
            <Image
              src='/images/blossoms-and-brews/logo.png'
              alt='Blossoms & Brews Logo'
              height={450}
              width={400}
              priority
              className='mx-auto max-w-full'
            />

            <button className='text-cream-200 mb-24 mt-4 transform rounded-full border border-pink-300 bg-white px-4 py-2 text-lg font-bold shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-pink-300 hover:shadow-md'>
              Reserve Your Cup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
