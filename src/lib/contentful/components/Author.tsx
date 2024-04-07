import React, { FC } from 'react';
import { AuthorType } from '@/lib/contentful/types';

const Author: FC<AuthorType> = ({
  fields: {
    name,
    avatar: {
      fields: {
        file: { url },
      },
    },
  },
}) => {
  return (
    <div className='mt-6 flex border-t border-gray-900/5 pt-6'>
      <div className='relative flex items-center gap-x-4'>
        <img src={url} alt='' className='h-10 w-10 rounded-full bg-gray-50' />
        <div className='text-sm leading-6'>
          <p className='font-semibold text-gray-900'>
            <span>
              <span className='absolute inset-0' />
              {name}
            </span>
          </p>
          <p className='text-gray-600'>Author</p>
        </div>
      </div>
    </div>
  );
};

export default Author;
