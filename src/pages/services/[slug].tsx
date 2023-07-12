import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';
import { AiFillHeart } from 'react-icons/ai';

import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import DATA from '../../utils/data';

type Package = {
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

// This function generates the paths for each page based on the slug property of the data
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = DATA.SERVICES.map((item) => ({
    params: { slug: item.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

// This function fetches the data for each page based on the slug parameter and passes it as props
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const data =
    DATA.SERVICES.find((item) => item.slug === slug) || DEFAULT_VALUE;
  return {
    props: { ...data },
  };
};

const Service: FC<Package> = ({ title, subTitle, price, body, services }) => {
  return (
    <Layout>
      <Seo />

      <main className='min-h-screen'>
        <Header />
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
      </main>
    </Layout>
  );
};

export default Service;
