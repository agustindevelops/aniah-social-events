'use client';

import UnstyledLink from '@/components/links/UnstyledLink';
import { Service } from '@/components/pages/Homepage/OurServices/servicesTypes';
import Image from 'next/image';

const ServiceCard = ({ service, i = 1 }: { service: Service; i?: number }) => {
  return (
    <UnstyledLink
      href={service.link}
      className='bg-peach-100 relative overflow-hidden rounded-t-lg border transition duration-300 hover:scale-105 hover:shadow-lg lg:p-4'
    >
      <div className={'relative h-72'}>
        <Image
          src={service.image}
          alt={service.title}
          className='rounded-t-full'
          fill
          style={{ objectFit: 'cover' }}
          quality={50}
        />
      </div>

      <div className='p-2 md:p-4'>
        <h2 className='font-gentySans mb-2 text-lg md:mb-1 md:text-2xl'>
          {service.title}
        </h2>
        <p className='font-shrikhand mb-2 text-lg font-semibold'>
          {service.price}
        </p>
        <p className='font-gentySans sm:text-md text-lg md:text-lg'>
          {service.description}
        </p>
      </div>
    </UnstyledLink>
  );
};

export default ServiceCard;
