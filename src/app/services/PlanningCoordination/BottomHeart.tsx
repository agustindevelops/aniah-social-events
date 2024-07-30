'use client';

import { FC } from 'react';
import { Package } from '@/app/services/[slug]/page';
import { usePathname } from 'next/navigation';
import UnstyledLink from '@/components/links/UnstyledLink';
import { AiFillHeart } from 'react-icons/ai';
import classNames from 'classnames';

const BottomHeart: FC<Package> = ({ title, subTitle, price, slug }) => {
  const href = `/services/${slug}`;
  const pathname = usePathname();

  return (
    <div className='flex w-full flex-col items-center gap-2'>
      <UnstyledLink
        href={href}
        className={classNames(
          'flex w-full flex-col items-center rounded border-4 p-4 text-center transition duration-300 hover:scale-105 hover:shadow-lg',
          pathname === href ? 'bg-peach-200 border-secondary' : 'bg-peach-50'
        )}
      >
        <h2 className='font-pacifico mb-2 text-4xl'>{title}</h2>
        <h3 className='font-libre mb-2 text-lg font-bold'>{subTitle}</h3>
      </UnstyledLink>
      <AiFillHeart />
    </div>
  );
};

export default BottomHeart;
