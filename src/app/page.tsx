import ContactUs from "@/components/pages/Homepage/ContactUs";
import Gallery from "@/components/pages/Homepage/Gallery";
import Hero from "@/components/pages/Homepage/Hero";
import SectionLayout from "@/components/pages/Homepage/SectionLayout";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";

const Homepage = async () => {
  return (
    <div className="w-full text-center" id="home">
      <Hero />

      <section className="mt-36 my-24">
        <Gallery />
      </section>

      <SectionLayout id="ourServices">
        <Services />
      </SectionLayout>
      <SectionLayout id="testimonials">
        <Testimonials />
      </SectionLayout>
      <SectionLayout id="contactUs">
        <ContactUs />
      </SectionLayout>
    </div>
  );
};

export default Homepage;
