import Button from "@/components/buttons/Button";
import SocialLinks from "@/components/pages/Homepage/ContactUs/SocialLinks";
import { START_PLANNING_ROUTE } from "@/utils/content/schedule";

const ContactUs = () => {
  return (
    <div>
      <Button href={START_PLANNING_ROUTE}>Start Planning</Button>
      <p className="mt-2">(210)426-5860</p>
      <p>aniahsocialevents@gmail.com</p>
      <SocialLinks />
    </div>
  );
};

export default ContactUs;
