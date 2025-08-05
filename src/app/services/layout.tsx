import Testimonials from "@/app/testimonials/Testimonials";
import Gallery from "@/components/pages/Homepage/Gallery";

const ServiceLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-16">
      {children}
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default ServiceLayout;
