import { FC } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import UnstyledLink from '@/components/links/UnstyledLink';
import { SERVICES } from '@/utils/data';
import { Package } from '@/app/services/planning-and-coordination/[slug]/page';

const { SOCIAL_AFFAIR, SOCIALLY_CHIC, SOCIAL_SOIREE, SOCIALLY_ATELIER } =
  SERVICES.PLANNING_AND_COORDINATION;

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
          data={SOCIAL_AFFAIR}
        />
        <BottomHeart
          href='/services/planning-and-coordination/socially-chic'
          src='/images/socially-chic-title-nosp.png'
          alt='Socially Chic'
          width={260}
          height={100}
          data={SOCIALLY_CHIC}
        />
        <BottomHeart
          href='/services/planning-and-coordination/social-soiree'
          src='/images/social-soiree-title-nosp.png'
          alt='Social Soiree'
          width={350}
          height={100}
          data={SOCIAL_SOIREE}
        />
        <BottomHeart
          href='/services/planning-and-coordination/socially-atelier'
          src='/images/social-atelier-title-nosp.png'
          alt='Social Atelier Title Nosp'
          width={345}
          height={100}
          data={SOCIALLY_ATELIER}
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
  data: Package;
}> = ({ href, src, alt, width, height, data: { title, subTitle, price } }) => {
  return (
    <div className='flex flex-col items-center gap-2'>
      <UnstyledLink
        href={href}
        className='bg-peach-100 flex w-96 flex-col items-center rounded border p-4 text-center transition duration-300 hover:scale-105 hover:shadow-lg'
      >
        <h2 className='text-4xl italic'>{title}</h2>
        <h3 className='mb-2 text-lg font-bold'>{subTitle}</h3>
        <p className='text-lg font-bold'>{price}</p>
      </UnstyledLink>
      <AiFillHeart />
    </div>
  );
};

export default PlanningCoordination;
