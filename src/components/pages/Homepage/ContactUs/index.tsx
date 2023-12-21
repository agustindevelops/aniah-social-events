import Link from 'next/link';
import SocialLinks from '@/components/pages/Homepage/ContactUs/SocialLinks';

const ContactUs = () => {
  return (
    <div className='text-xl md:text-2xl'>
      <Link
        href='https://www.honeybook.com/widget/aniah_social_events_258611/cf_id/64ac6b5f5c67b511146db09e'
        passHref
      >
        <button className='bg-peach-500 my-4 transform rounded px-4 py-2 font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-400'>
          <h2>Let's Get in Touch!</h2>
        </button>
      </Link>
      <p>(210)426-5860</p>
      <p>aniahsocialevents@gmail.com</p>
      <SocialLinks />
    </div>
  );
};

export default ContactUs;
