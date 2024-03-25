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
    <div className='overflow-hidden py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='flex h-full items-center lg:pr-8 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <dl className='mt-10 max-w-xl space-y-8 text-2xl lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold'>
                      <feature.icon
                        className='text-brown-500 absolute left-1 top-1 h-5 w-5'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={BLOSSOMS_AND_BREWS.FACTS.IMAGE}
            alt='Product screenshot'
            className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
};

export default Facts;
