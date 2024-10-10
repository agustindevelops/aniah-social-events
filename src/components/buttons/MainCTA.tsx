import Link from 'next/link';

const MainCTA = () => {
  return (
    <Link href='https://www.honeybook.com/widget/aniah_social_events_258611/cf_id/64ac6b5f5c67b511146db09e' passHref>
      <button className='bg-peach-500 my-4 transform rounded px-4 py-2 font-bold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-400'>
        Let's Get in Touch!
      </button>
    </Link>
  );
};

export default MainCTA;
