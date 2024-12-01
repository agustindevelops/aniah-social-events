import BottomHeart from "@/app/services/components/PlanningCoordination/BottomHeart";
import { TypeServiceFields } from "@/lib/contentful/types";

type PropTypes = {
  services: TypeServiceFields[];
};

const Tabs = ({ services }: PropTypes) => (
  <nav
    aria-label="Services Tabs"
    className="isolate grid grid-cols-2 divide-x divide-gray-200 rounded-lg shadow"
  >
    {services.map((service, tabIdx) => (
      <BottomHeart {...service} key={`service-tab-${tabIdx}`} />
    ))}
  </nav>
);

export default Tabs;
