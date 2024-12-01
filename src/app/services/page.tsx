import { getServices } from "@/lib/contentful/api";
import PlanningCoordination from "src/app/services/components/PlanningCoordination";

const Services = async () => {
  const services = await getServices();
  return (
    <div className="layout container my-24 grid gap-2 p-2">
      <PlanningCoordination services={services} />
    </div>
  );
};

export default Services;
