'use client';

import Hero from '@/components/pages/Homepage/Hero';
import SectionLayout from '@/components/pages/Homepage/SectionLayout';
import OurServices from '@/components/pages/Homepage/OurServices';
import GetToKnowMe from '@/components/pages/Homepage/GetToKnowMe';
import ContactUs from '@/components/pages/Homepage/ContactUs';

const Homepage = () => {
  return (
    <div className={'w-full text-center'} id={'home'}>
      <Hero />
      <SectionLayout id={'ourServices'}>
        <OurServices />
      </SectionLayout>
      <SectionLayout id={'getToKnowMe'}>
        <GetToKnowMe />
      </SectionLayout>
      <SectionLayout id={'contactUs'}>
        <ContactUs />
      </SectionLayout>
    </div>
  );
};

export default Homepage;
