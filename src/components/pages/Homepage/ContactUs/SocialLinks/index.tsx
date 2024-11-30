import Instagram from "@/components/pages/Homepage/ContactUs/SocialLinks/Instagram";
import TheKnot from "@/components/pages/Homepage/ContactUs/SocialLinks/TheKnot";
import TikTok from "@/components/pages/Homepage/ContactUs/SocialLinks/TikTok";

const Links = () => {
  return (
    <div className="mx-auto my-4 flex w-full justify-center gap-4">
      <div className="mb-4 text-center">
        <h3 className="mb-2 text-xl font-semibold">
          What can we help you with?
        </h3>
        <p className="text-sm text-gray-600">
          Connect with us on social media or reach out directly!
        </p>
      </div>
      <TheKnot />
      <Instagram />
      <TikTok />
    </div>
  );
};

export default Links;
