import Link from 'next/link';

const ContactUs = () => {
  return (
    <div className='text-xl md:text-2xl'>
      <Link
        href='https://www.honeybook.com/widget/aniah_social_events_258611/cf_id/64ac6b5f5c67b511146db09e'
        passHref
      >
        <button className='my-4 transform rounded bg-blue-500 px-4 py-2 font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-400'>
          <h2>Let's Get in Touch!</h2>
        </button>
      </Link>
      <p>(210)802-5661</p>
      <p>@aniahsocialevents.co</p>
      <p>Aniahsocialevents@gmail.com</p>
    </div>
  );
};

export default ContactUs;
