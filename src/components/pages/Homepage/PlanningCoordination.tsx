import Image from 'next/image';
import { FC } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import UnstyledLink from '@/components/links/UnstyledLink';

const PlanningCoordination = () => {
  return (
    <div>
      <div className='flex flex-col items-center gap-4'>
        <BottomHeart
          href='/services/planning-and-coordination/social-affair'
          src='/images/social-affair-title-nosp.png'
          alt='Social Affair'
          width={326}
          height={100}
        />
        <BottomHeart
          href='/services/planning-and-coordination/socially-chic'
          src='/images/socially-chic-title-nosp.png'
          alt='Socially Chic'
          width={260}
          height={100}
        />
        <BottomHeart
          href='/services/planning-and-coordination/social-soiree'
          src='/images/social-soiree-title-nosp.png'
          alt='Social Soiree'
          width={350}
          height={100}
        />
        <BottomHeart
          href='/services/planning-and-coordination/socially-atelier'
          src='/images/social-atelier-title-nosp.png'
          alt='Social Atelier Title Nosp'
          width={345}
          height={100}
        />
      </div>
    </div>
  );
};

const BottomHeart: FC<{
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}> = ({ href, src, alt, width, height }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <UnstyledLink
        href={href}
        className='bg-peach-100 w-96 rounded border transition duration-300 hover:scale-105 hover:shadow-lg'
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className='mx-auto'
        />
      </UnstyledLink>
      <AiFillHeart />
    </div>
  );
};

export default PlanningCoordination;
