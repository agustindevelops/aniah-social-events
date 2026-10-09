import Services from "@/app/services/Services";
import { WEDDINGS_AND_EVENTS } from "@/utils/content/offerings";

const ServicesPage = async () => {
  return (
    <div className="my-24">
      <Services />
    </div>
  );
};

export const metadata = {
  title: "Weddings & Events | Aniah Social Events",
  description: WEDDINGS_AND_EVENTS.description,
};

export default ServicesPage;
