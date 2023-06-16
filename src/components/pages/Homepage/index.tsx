import Hero from '@/components/pages/Homepage/Hero';
import SectionLayout from '@/components/pages/Homepage/SectionLayout';
import PlanningCoordination from '@/components/pages/Homepage/PlanningCoordination';
import OurServices from '@/components/pages/Homepage/OurServices';
import GetToKnowMe from '@/components/pages/Homepage/GetToKnowMe';
import ContactUs from '@/components/pages/Homepage/ContactUs';

const Homepage = () => {
  return (
    <div className={'w-full text-center'}>
      <Hero />
      <SectionLayout>
        <OurServices />
      </SectionLayout>
      <SectionLayout>
        <GetToKnowMe />
      </SectionLayout>
      <SectionLayout>
        <PlanningCoordination />
      </SectionLayout>
      <SectionLayout>
        <ContactUs />
      </SectionLayout>
    </div>
  );
};

export default Homepage;
