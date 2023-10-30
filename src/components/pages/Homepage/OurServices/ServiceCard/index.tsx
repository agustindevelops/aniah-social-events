import UnstyledLink from '@/components/links/UnstyledLink';
import { Service } from '@/components/pages/Homepage/OurServices/servicesTypes';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const ServiceCard = ({ service, i = 1 }: { service: Service; i?: number }) => {
  return (
    <UnstyledLink
      href={service.link}
      className='bg-peach-100 relative overflow-hidden rounded-t-lg border p-4 transition duration-300 hover:scale-105 hover:shadow-lg'
    >
      <div className='px-4'>
        <ParallaxBanner className='aspect-[8/9] rounded-t-full'>
          <ParallaxBannerLayer
            speed={0}
            className={`bg-peach-${i % 2 === 0 ? 2 : 5}00`}
          />
          <ParallaxBannerLayer
            image={service.image}
            speed={-10}
            className={'my-24 rounded-t-full'}
          />
        </ParallaxBanner>
      </div>

      <div className='p-4'>
        <h2 className='font-gentySans mb-2 text-2xl md:mb-4 md:text-4xl'>
          {service.title}
        </h2>
        <p className='font-shrikhand mb-2 text-lg font-semibold'>
          {service.price}
        </p>
        <p className='font-gentySans text-lg'>{service.description}</p>
      </div>
    </UnstyledLink>
  );
};

export default ServiceCard;
