import { BLOSSOMS_AND_BREWS } from '@/utils/content/events';
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'WHEN: ',
    description:
      'July 2024 on a sunday two time frames 11am-12:30pm; 1pm-2:30pm',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'WHERE: ',
    description: 'San Antonio: Exact Location TBD',
    icon: LockClosedIcon,
  },
];

const Facts = () => {
  return (
    <div className='font-pacifico text-peach-200 text-shadow-md px-4 text-center text-5xl font-bold md:text-8xl'>
      Coming Soon: Summer 2024
    </div>
  );
};

export default Facts;
