import { FaFacebookSquare } from 'react-icons/fa';
import Seo from '@/components/Seo';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';

const Reviews = () => {
  return (
    <Layout>
      <Seo />
      <main className='min-h-screen'>
        <Header />
        <section className='flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 text-center'>
          <h1 className='mb-6 text-3xl font-bold'>Share Your Experience</h1>
          <p className='mb-6 text-lg'>
            We value your feedback! Please let us know about your experience
            working with us.
          </p>

          <a
            href='https://www.facebook.com/anishsocialevents.co/?sk=reviews'
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center rounded-lg bg-[#1877F2] px-4 py-2 text-white transition hover:bg-[#3399FF]'
          >
            <FaFacebookSquare className='mr-2 text-2xl' />
            Review on Facebook
          </a>
        </section>
      </main>
    </Layout>
  );
};

export default Reviews;
