import { FaTiktok } from 'react-icons/fa';
import Image from 'next/image';

const TikTok = () => {
  return (
    <a
      href='https://www.tiktok.com/@aniahsocialevents'
      target='_blank'
      rel='noopener noreferrer'
      className='transition-transform hover:scale-110'
    >
      <Image src='/svg/tiktok.svg' alt='Instagram' width={25} height={25} />
    </a>
  );
};

export default TikTok;
