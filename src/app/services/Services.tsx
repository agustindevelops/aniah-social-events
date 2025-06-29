import ServicesGroup from "@/app/services/components/Group";
import { getServicesGrouped } from "@/app/services/utils/functions";
import Header from "./components/Header";

const Services = async () => {
  const groupedServices = await getServicesGrouped();

  return (
    <div className="layout container grid gap-2 p-2">
      <Header />
      {groupedServices.map(({ category, services }) => (
        <ServicesGroup key={category} category={category} services={services} />
      ))}
    </div>
  );
};

export default Services;
