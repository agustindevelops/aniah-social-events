import ContactUs from "@/components/pages/Homepage/ContactUs";
import Gallery from "@/components/pages/Homepage/Gallery";
import GetToKnowMe from "@/components/pages/Homepage/GetToKnowMe";
import Hero from "@/components/pages/Homepage/Hero";
import SectionLayout from "@/components/pages/Homepage/SectionLayout";
import Services from "./services/Services";

const Homepage = async () => {
  return (
    <div className="w-full text-center" id="home">
      <Hero />
      <SectionLayout id="ourServices">
        <Services />
      </SectionLayout>
      <Gallery />
      <SectionLayout id="getToKnowMe">
        <GetToKnowMe />
      </SectionLayout>
      <SectionLayout id="contactUs">
        <ContactUs />
      </SectionLayout>
    </div>
  );
};

export default Homepage;
