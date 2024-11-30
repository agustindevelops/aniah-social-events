import BottomHeart from "@/app/services/components/PlanningCoordination/BottomHeart";
import { SERVICES } from "@/utils/data";

const { PLANNING_AND_COORDINATION } = SERVICES;

const PlanningCoordination = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      {Object.values(PLANNING_AND_COORDINATION).map((props, key) => (
        <BottomHeart key={props.slug} {...props} />
      ))}
    </div>
  );
};

export default PlanningCoordination;
