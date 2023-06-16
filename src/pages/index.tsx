import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import Header from '@/components/layout/Header';
import Homepage from '@/components/pages/Homepage';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main className={'min-h-screen '}>
        <Header />
        <section className='bg-white'>
          <Homepage />
          <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>
            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href=''>Ragustin</UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
