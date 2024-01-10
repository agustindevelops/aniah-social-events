'use client';

import Image from 'next/image';
import { servicesData } from './data';
import ServiceCard from '@/components/pages/Homepage/OurServices/ServiceCard';

const OurServices = () => {
  return (
    <div className='my-12'>
      <Image
        src='/images/our-services-title.png'
        alt='Our Services'
        width={471}
        height={114}
        className='mx-auto sm:mb-4'
      />
      <div
        className={
          'flex flex-col gap-8 px-2 sm:grid sm:grid-cols-3 sm:gap-2 md:gap-4'
        }
      >
        {servicesData.map((service, index) => (
          <ServiceCard key={service.title} service={service} i={index} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
