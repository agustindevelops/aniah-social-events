'use client';
import Hero from '@/app/events/blossoms-&-brews/Hero';
import CTA from '@/app/events/blossoms-&-brews/CTA';
import Emotion from '@/app/events/blossoms-&-brews/Emotion';
import Banner from '@/app/events/blossoms-&-brews/Banner';
import Facts from '@/app/events/blossoms-&-brews/Facts';

const TeaParty = () => {
  return (
    <div className='my-24'>
      <title>Blossoms and Brews</title>
      <Hero />
      <Emotion />
      <Banner />
      {/*<Facts />*/}
      <CTA />
    </div>
  );
};

export default TeaParty;
