import Image from 'next/image';
import UnstyledLink from '@/components/links/UnstyledLink';
import { servicesData } from './data';
import ServiceCard from '@/components/pages/Homepage/OurServices/ServiceCard'; // Import the services data

const OurServices = () => {
  return (
    <div>
      <Image
        src='/images/our-services-title.png'
        alt='Our Services'
        width={471}
        height={114}
        className='mx-auto sm:mb-12'
      />
      <div className={'hidden gap-4 sm:grid sm:grid-cols-3'}>
        {servicesData.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
      <div className={'flex flex-col gap-2 sm:hidden'}>
        {servicesData.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
