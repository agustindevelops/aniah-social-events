import Hero from '@/components/pages/Homepage/Hero';
import SectionLayout from '@/components/pages/Homepage/SectionLayout';
import PlanningCoordination from '@/components/pages/Homepage/PlanningCoordination';
import OurServices from '@/components/pages/Homepage/OurServices';

const Homepage = () => {
  return (
    <div className={'w-full'}>
      <Hero />
      <SectionLayout>Our Services</SectionLayout>
      <SectionLayout>
        <OurServices />
      </SectionLayout>
      <SectionLayout>
        <PlanningCoordination />
      </SectionLayout>
    </div>
  );
};

export default Homepage;
