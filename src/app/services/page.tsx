import React, { FC, ReactNode } from 'react';
import PlanningCoordination from 'src/app/services/components/PlanningCoordination';
interface ServiceLayoutProps {
  children: ReactNode;
}

const Services: FC<ServiceLayoutProps> = ({ children }) => {
  return (
    <div className='layout container my-24 grid gap-2 p-2'>
      <PlanningCoordination />
    </div>
  );
};

export default Services;
