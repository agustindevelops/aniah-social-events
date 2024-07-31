'use client';

import { SERVICES } from '@/utils/data';
import { usePathname } from 'next/navigation';
import BottomHeart from '@/app/services/components/PlanningCoordination/BottomHeart';

const tabs = Object.values(SERVICES.PLANNING_AND_COORDINATION);

const Tabs = () => {
  const currentPath = usePathname();

  return (
    <nav
      aria-label='Services Tabs'
      className='isolate grid grid-cols-2 divide-x divide-gray-200 rounded-lg shadow'
    >
      {tabs.map((p, tabIdx) => (
        <BottomHeart {...p} key={`service-tab-${tabIdx}`} />
      ))}
    </nav>
  );
};

export default Tabs;
