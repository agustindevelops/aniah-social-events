import { Parallax, Background } from 'react-parallax';
import UnstyledLink from '@/components/links/UnstyledLink';
import { Service } from '@/components/pages/Homepage/OurServices/servicesTypes';

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <UnstyledLink
      href={service.link}
      className='bg-peach-100 relative overflow-hidden rounded-t-lg border transition duration-300 hover:scale-105 hover:shadow-lg'
    >
      <div className='rounded-t-full px-4 py-2'>
        <Parallax bgImage={service.image} strength={100} className='h-[300px]'>
          <Background className='rounded-t-full px-4 py-2'>
            <div
              style={{
                height: 200,
                width: 200,
                backgroundImage: `url('${service.image}')`,
              }}
            />
          </Background>
        </Parallax>
      </div>

      <div className='p-4'>
        <h2 className='text-xl font-bold'>{service.title}</h2>
        <h3 className='text-lg'>{service.subtitle}</h3>
        <p className='text-md font-semibold'>{service.price}</p>
        <p className='text-sm'>{service.description}</p>
      </div>
    </UnstyledLink>
  );
};

export default ServiceCard;
