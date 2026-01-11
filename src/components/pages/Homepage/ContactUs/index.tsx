import Button from "@/components/buttons/Button";
import SocialLinks from "@/components/pages/Homepage/ContactUs/SocialLinks";

const ContactUs = () => {
  return (
    <div>
      <Button href="/schedule">Book Now</Button>
      <p className="mt-2">(210)426-5860</p>
      <p>aniahsocialevents@gmail.com</p>
      <SocialLinks />
    </div>
  );
};

export default ContactUs;
