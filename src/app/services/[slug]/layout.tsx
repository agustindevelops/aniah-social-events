import React, { FC, ReactNode } from 'react';
import PlanningCoordination from '@/app/services/PlanningCoordination';
interface ServiceLayoutProps {
  children: ReactNode;
}

const ServiceLayout: FC<ServiceLayoutProps> = ({ children }) => {
  return (
    <div className='layout container mt-24 grid grid-cols-3 gap-2 p-2 lg:grid-cols-4'>
      <div className='col-span-1'>
        <PlanningCoordination />
      </div>
      <div className='col-span-2 lg:col-span-3'>{children}</div>
    </div>
  );
};

export default ServiceLayout;
