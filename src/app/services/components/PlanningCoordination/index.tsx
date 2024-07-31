import { SERVICES } from '@/utils/data';
import BottomHeart from '@/app/services/components/PlanningCoordination/BottomHeart';

const {
  TRUE_DAY_OF_COORDINATION,
  THIRTY_DAYS_OUT_COORDINATION,
  PARTIAL_PLANNING,
  FULL_PLANNING,
} = SERVICES.PLANNING_AND_COORDINATION;

const PlanningCoordination = () => {
  return (
    <div>
      <div className='flex flex-col items-center gap-4'>
        <BottomHeart {...TRUE_DAY_OF_COORDINATION} />
        <BottomHeart {...THIRTY_DAYS_OUT_COORDINATION} />
        <BottomHeart {...PARTIAL_PLANNING} />
        <BottomHeart {...FULL_PLANNING} />
      </div>
    </div>
  );
};

export default PlanningCoordination;
