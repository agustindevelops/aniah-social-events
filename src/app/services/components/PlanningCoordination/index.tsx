import { TypeServiceFields } from "@/lib/contentful/types";

import BottomHeart from "@/app/services/components/PlanningCoordination/BottomHeart";

type PropTypes = {
  services: TypeServiceFields[];
};

const PlanningCoordination = ({ services }: PropTypes) => {
  return (
    <div className="flex flex-col items-center gap-4">
      {services.map((service) => (
        <BottomHeart key={service.slug} {...service} />
      ))}
    </div>
  );
};

export default PlanningCoordination;
