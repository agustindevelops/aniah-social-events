import { FC, ReactNode } from 'react';
import * as React from 'react';

type Props = {
  id: string;
  children: ReactNode;
};

const SectionLayout: FC<Props> = ({ children, id }) => {
  return (
    <div className='flex scroll-mt-20 flex-col justify-between' id={id}>
      <div className='bg-primary-300 h-4' />
      <div className='container mx-auto py-2 sm:py-8'>{children}</div>
      <div className='bg-primary-400 h-4' />
    </div>
  );
};

export default SectionLayout;
