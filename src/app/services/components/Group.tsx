import ServicesCard from "@/app/services/components/Card";
import { TypeServiceFields } from "@/lib/contentful/types";

const ServicesGroup = ({
  category,
  services,
}: {
  category: string;
  services: TypeServiceFields[];
}) => {
  return (
    <div id="services-container" className="mb-8 space-y-16">
      <section id="category-photography" className="category-section">
        <div className="mb-8">
          <h2 className="font-nickainley text-brown-500 text-3xl">
            {category}
          </h2>
          <div className="bg-peach-200 mt-2 h-1 w-20"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServicesCard key={service.slug} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesGroup;
