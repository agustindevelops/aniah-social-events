import ContactUs from "@/components/pages/Homepage/ContactUs";
import FAQ from "@/components/pages/Homepage/FAQ";
import Gallery from "@/components/pages/Homepage/Gallery";
import Hero from "@/components/pages/Homepage/Hero";
import SectionLayout from "@/components/pages/Homepage/SectionLayout";
import Subtitle from "@/components/pages/Homepage/Subtitle";
import Section from "@/components/Section";
import { getLandingPage } from "@/lib/contentful/api";
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";

const Homepage = async () => {
  const {
    heroImage,
    title,
    subtitle,
    whatWeDoTitle,
    whatWeDoParagraph,
    whatWeDoList,
    whoWeAreForTitle,
    whoWeAreForParagraph,
    whoWeAreForList,
    faqTitle,
    faqParagraph,
  } = await getLandingPage();

  return (
    <div className="w-full text-center overflow-x-hidden" id="home">
      <Hero heroImage={heroImage} title={title} />
      <Subtitle subtitle={subtitle} />
      <Section
        title={whatWeDoTitle}
        paragraph={whatWeDoParagraph}
        list={whatWeDoList}
      />
      <SectionLayout id="ourServices">
        <Services />
      </SectionLayout>
      <Section
        title={whoWeAreForTitle}
        paragraph={whoWeAreForParagraph}
        list={whoWeAreForList}
      />
      <section className="mt-36 my-24">
        <Gallery />
      </section>
      <SectionLayout id="testimonials">
        <Testimonials />
      </SectionLayout>
      <Section title={faqTitle} paragraph={faqParagraph}>
        <FAQ />
      </Section>
      <SectionLayout id="contactUs">
        <ContactUs />
      </SectionLayout>
    </div>
  );
};

export default Homepage;
