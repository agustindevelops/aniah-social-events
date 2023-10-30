import UnstyledLink from '@/components/links/UnstyledLink';
import { Service } from '@/components/pages/Homepage/OurServices/servicesTypes';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <UnstyledLink
      href={service.link}
      className='bg-peach-100 relative overflow-hidden rounded-t-lg border p-4 transition duration-300 hover:scale-105 hover:shadow-lg'
    >
      <div className='px-12'>
        <ParallaxBanner className='aspect-[9/10] rounded-t-full'>
          <ParallaxBannerLayer
            image={service.image}
            speed={-10}
            startScroll={250}
            endScroll={1000}
          />
        </ParallaxBanner>
      </div>

      <div className='p-4'>
        <h2 className='font-gentySans mb-4 text-4xl'>{service.title}</h2>
        <p className='font-shrikhand mb-2 text-xl font-semibold'>
          {service.price}
        </p>
        <p className='font-gentySans text-lg'>{service.description}</p>
      </div>
    </UnstyledLink>
  );
};

export default ServiceCard;
