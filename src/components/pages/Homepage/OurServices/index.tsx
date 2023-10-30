import Image from 'next/image';
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
      <div
        className={'flex flex-col gap-2 px-2 sm:grid sm:grid-cols-3 sm:gap-8'}
      >
        {servicesData.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
