import ServicesGroup from "@/app/services/components/Group";
import { getServices } from "@/lib/contentful/api";
import Header from "./components/Header";

const Services = async () => {
  const rawServices = await getServices();

  const services = rawServices
    .reduce((acc, service) => {
      const category = service.category || "Other";
      const existingCategory = acc.find((group) => group.category === category);

      if (existingCategory) {
        existingCategory.items.push(service);
      } else {
        acc.push({ category, items: [service] });
      }

      return acc;
    }, [] as { category: string; items: typeof rawServices }[])
    .map((group) => ({
      ...group,
      items: group.items.sort((a, b) => (a.price || 0) - (b.price || 0)),
    }));

  return (
    <div className="layout container my-24 grid gap-2 p-2">
      <Header />
      {services.map(({ category, items }) => (
        <ServicesGroup key={category} category={category} services={items} />
      ))}
    </div>
  );
};

export default Services;
