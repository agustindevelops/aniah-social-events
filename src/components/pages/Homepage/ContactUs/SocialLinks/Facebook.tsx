import { FaFacebookF } from 'react-icons/fa';
import Image from 'next/image';

const Facebook = () => {
  return (
    <a
      href='https://www.facebook.com'
      target='_blank'
      rel='noopener noreferrer'
      className='transition-transform hover:scale-110'
    >
      <Image src='/svg/facebook.svg' alt='Instagram' width={25} height={25} />
    </a>
  );
};

export default Facebook;
