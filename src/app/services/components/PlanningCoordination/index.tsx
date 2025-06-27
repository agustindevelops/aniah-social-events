import BottomHeart from "@/app/services/components/PlanningCoordination/BottomHeart";
import { ServiceGroup } from "@/app/services/utils/types";

type PropTypes = {
  groupedServices: ServiceGroup[];
};

const PlanningCoordination = ({ groupedServices }: PropTypes) => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      {groupedServices.map(({ category, services }) => (
        <div key={category} className="w-full">
          <h2 className="font-nickainley mb-4 text-4xl font-bold underline">
            {category}
          </h2>
          <div className="flex flex-col gap-2">
            {services.map((service) => (
              <BottomHeart key={service.slug} {...service} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanningCoordination;
