import { FC, ReactNode } from 'react';
import * as React from 'react';

type Props = {
  children: ReactNode;
};

const SectionLayout: FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-col justify-between'>
      <div className='bg-primary-300 h-4' />
      <div className='container mx-auto py-8'>{children}</div>
      <div className='bg-primary-400 h-4' />
    </div>
  );
};

export default SectionLayout;
