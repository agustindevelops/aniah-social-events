import {
  CakeIcon,
  ClockIcon,
  ShoppingCartIcon,
  GiftIcon,
  HandRaisedIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';

const features = [
  {
    name: '2 hrs of Tea Time',
    description:
      'Enjoy a relaxing two-hour tea time with your closest friends.',
    icon: ClockIcon,
  },
  {
    name: 'Grazing Table Brunch',
    description:
      'Indulge in a lavish grazing table brunch, carefully curated with a variety of delightful options.',
    icon: CakeIcon,
  },
  {
    name: '3 Different Teas',
    description:
      'Taste three different types of teas served directly at your table.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Flower Market Access',
    description:
      'Gain access to our Flower Market featuring a range of wonderful vendors.',
    icon: ShoppingCartIcon,
  },
  {
    name: 'Goodie Bag & Tea Cups',
    description:
      'Receive a goodie bag filled with fun tea time treats and take your special tea cups home with you at the end of the event.',
    icon: GiftIcon,
  },
];

const Features = () => {
  return (
    <section className='my-48 overflow-hidden'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
          <div className='lg:ml-auto lg:pl-4 lg:pt-4'>
            <div className='lg:max-w-lg'>
              <h2 className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
                What Do You Get With Your Ticket?
              </h2>
              <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='text-brown-500 inline font-semibold'>
                      <feature.icon
                        className='text-peach-500 absolute left-1 top-1 h-5 w-5'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>
                    {': '}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className='flex items-start justify-end lg:order-first'>
            <Image
              src='/images/blossoms-and-brews/features.jpg'
              alt='An elegantly set tea party table outdoors with pastel-colored tablecloths and floral centerpieces. The table displays various delicate pastries and three types of tea in elegant teacups. Soft, flowing curtains frame the table, enhancing the whimsical and inviting atmosphere with soft, warm lighting. The background shows a lush garden, adding to the luxurious and serene setting.'
              className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
