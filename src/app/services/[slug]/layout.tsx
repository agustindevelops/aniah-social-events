import React, { FC, ReactNode } from 'react';
import PlanningCoordination from 'src/app/services/components/PlanningCoordination';
import Tabs from '@/app/services/[slug]/Tabs';
interface ServiceLayoutProps {
  children: ReactNode;
}

const ServiceLayout: FC<ServiceLayoutProps> = ({ children }) => {
  return (
    <div className='layout container mt-24 grid grid-cols-3 gap-2 p-2 lg:grid-cols-4'>
      <div className='col-span-1 hidden md:block'>
        <PlanningCoordination />
      </div>
      <div className='col-span-3 md:col-span-2 lg:col-span-3'>
        <div className='md:hidden'>
          <Tabs />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ServiceLayout;
