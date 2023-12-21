import Image from 'next/image';

const Instagram = () => {
  return (
    <a
      href='https://www.instagram.com/aniahsocialevents.co'
      target='_blank'
      rel='noopener noreferrer'
      className='transition-transform hover:scale-110'
    >
      <Image src='/svg/instagram.svg' alt='Instagram' width={25} height={25} />
    </a>
  );
};

export default Instagram;
