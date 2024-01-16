import { AiFillHeart } from 'react-icons/ai';

import { SERVICES } from '@/utils/data';

export type Package = {
  slug: string;
  title: string;
  subTitle: string;
  price: string;
  body: string;
  services: string[];
};

const DEFAULT_VALUE: Package = {
  slug: '',
  title: '',
  subTitle: '',
  price: '',
  body: '',
  services: [],
};

export const generateStaticParams = async () =>
  Object.values(SERVICES.PLANNING_AND_COORDINATION).map(({ slug }) => ({
    slug,
  }));

const getService: (params: { slug?: string }) => Package = (params) => {
  const slug = params?.slug as string;
  return (
    Object.values(SERVICES.PLANNING_AND_COORDINATION).find((item) => {
      return item.slug === slug;
    }) || DEFAULT_VALUE
  );
};

const Service = ({ params }: { params: { slug: string } }) => {
  const { title, subTitle, price, body, services } = getService(params);

  return (
    <section className='pt-24'>
      <div className='text-brown-500 rounded-lg text-center'>
        <div className='bg-peach-50 py-4'>
          <div className='container mx-auto px-2'>
            <h1 className='text-8xl font-bold'>{title}</h1>
            <h2 className='mt-2 text-4xl font-medium'>{subTitle}</h2>
            <p className='mt-2 text-2xl font-bold'>{price}</p>
          </div>
        </div>

        <div className='container mx-auto px-8 text-2xl'>
          <p className='mt-6'>{body}</p>
          <ul className='mt-8'>
            {services.map((service) => (
              <li
                key={service}
                className='my-2 flex items-start justify-center gap-4'
              >
                <div className='py-2'>
                  <AiFillHeart />
                </div>
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
