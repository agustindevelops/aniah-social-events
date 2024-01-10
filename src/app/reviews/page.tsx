import { FaFacebookSquare } from 'react-icons/fa';
import TheKnot from '@/components/pages/Homepage/ContactUs/SocialLinks/TheKnot';
import Image from 'next/image';

const Reviews = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4 text-center'>
      <h1 className='mb-6 text-3xl font-bold'>Share Your Experience</h1>
      <p className='mb-6 text-lg'>
        We value your feedback! Please let us know about your experience working
        with us.
      </p>

      <a
        href='https://www.theknot.com/marketplace/redirect-2079260?utm_source=vendor_website&utm_medium=banner&utm_term=8b31c857-d48a-404a-9cec-324f879fbb67&utm_campaign=vendor_badge_assets'
        target='_blank'
        rel='noopener noreferrer'
        className='mb-4 flex w-60 items-center justify-center rounded-lg bg-[#FD43CB] px-4 py-2 text-white transition hover:bg-slate-700'
      >
        <Image
          alt='TheKnot.com'
          src='https://d13ns7kbjmbjip.cloudfront.net/For_Your_Website/TK-icon_circle_large.png'
          width={25}
          height={25}
          quality={100}
          className='mr-3'
        />
        Review on the Knot
      </a>
      <a
        href='https://www.facebook.com/anishsocialevents.co/?sk=reviews'
        target='_blank'
        rel='noopener noreferrer'
        className='flex w-60 items-center justify-center rounded-lg bg-[#1877F2] px-4 py-2 text-white transition hover:bg-[#3399FF]'
      >
        <FaFacebookSquare className='mr-2 text-2xl' />
        Review on Facebook
      </a>
    </div>
  );
};

export default Reviews;
