import Image from 'next/image';
import { FC } from 'react';
import { AiFillHeart } from 'react-icons/all';

const PlanningCoordination = () => {
  return (
    <div>
      <Image
        src='/images/planning-coordination-title.png'
        alt='Planning & Coordination'
        width={470}
        height={124}
        className={'mx-auto mb-12'}
      />
      <div className={'flex flex-col items-center gap-4'}>
        <BottomHeart
          src='/images/social-affair-title-nosp.png'
          alt='Social Affair'
          width={326}
          height={100}
        />
        <BottomHeart
          src='/images/socially-chic-title-nosp.png'
          alt='Socially Chic'
          width={260}
          height={100}
        />
        <BottomHeart
          src='/images/social-soiree-title-nosp.png'
          alt='Social Soiree'
          width={350}
          height={100}
        />
        <BottomHeart
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
  src: string;
  alt: string;
  width: number;
  height: number;
}> = ({ src, alt, width, height }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <Image src={src} alt={alt} width={width} height={height} />
      <AiFillHeart />
    </div>
  );
};

export default PlanningCoordination;
