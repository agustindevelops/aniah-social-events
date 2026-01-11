import ServicesGrid from "@/app/services/components/Grid";
import ServicesGroup from "@/app/services/components/Group";
import { getServicesGrouped } from "@/app/services/utils/functions";
import { getServices } from "@/lib/contentful/api";
import Header from "./components/Header";

const Services = async ({
  display = "grid",
}: {
  display?: "grid" | "grouped";
}) => {
  return display === "grouped" ? <LoadGroupedServices /> : <LoadGridServices />;
};

const LoadGroupedServices = async () => {
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

const LoadGridServices = async () => {
  const services = await getServices();
  return (
    <div className="layout container grid gap-2 p-2">
      <Header />
      <ServicesGrid services={services} />
    </div>
  );
};

export default Services;
