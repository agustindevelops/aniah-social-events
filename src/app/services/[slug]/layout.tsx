import { getServicesGrouped } from "@/app/services/utils/functions";
import { ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa";
import PlanningCoordination from "src/app/services/components/PlanningCoordination";

interface ServiceLayoutProps {
  children: ReactNode;
}

const ServiceLayout = async ({ children }: ServiceLayoutProps) => {
  const groupedServices = await getServicesGrouped();

  return (
    <div className="layout container mt-24 grid grid-cols-3 gap-2 p-2 lg:grid-cols-4">
      <div className="col-span-1 hidden md:block">
        <PlanningCoordination groupedServices={groupedServices} />
      </div>
      <div className="col-span-3 md:col-span-2 lg:col-span-3">
        <div className="md:hidden">
          <details className="group">
            <summary className="bg-peach-50 hover:bg-peach-100 flex cursor-pointer items-center justify-between rounded-lg p-4">
              <span className="font-moonjelly text-lg">Services Menu</span>
              <FaChevronDown className="transition-transform duration-300 ease-in-out group-open:rotate-180" />
            </summary>
            <div className="group-open:animate-fade-in group-open:slide-in-from-top-2 bg-gray-50 p-4 shadow-md transition-all duration-300 ease-in-out">
              <PlanningCoordination groupedServices={groupedServices} />
            </div>
          </details>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ServiceLayout;
