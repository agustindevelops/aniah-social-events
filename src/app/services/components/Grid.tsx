import ServicesCard from "@/app/services/components/Card";
import { TypeServiceFields } from "@/lib/contentful/types";

const ServicesGrid = ({ services }: { services: TypeServiceFields[] }) => {
  return (
    <div id="services-container" className="mb-8 space-y-16">
      <section id="category-photography" className="category-section">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServicesCard key={service.slug} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesGrid;
