import { SERVICES } from '@/utils/data';
import BottomHeart from '@/app/services/components/PlanningCoordination/BottomHeart';

const { PLANNING_AND_COORDINATION } = SERVICES;

const PlanningCoordination = () => {
  return (
    <div>
      <div className='flex flex-col items-center gap-4'>
        {Object.values(PLANNING_AND_COORDINATION).map((props, key) => (
          <BottomHeart key={props.slug} {...props} />
        ))}
      </div>
    </div>
  );
};

export default PlanningCoordination;
