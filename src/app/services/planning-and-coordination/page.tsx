import React from 'react';
import PlanningCoordination from '@/components/pages/Homepage/PlanningCoordination';

const Page = () => {
  return (
    <div className={'my-24 flex flex-col items-center justify-center'}>
      <h1 className='my-12'>Planning & Coordination</h1>
      <PlanningCoordination />
    </div>
  );
};

export default Page;
