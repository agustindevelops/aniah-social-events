import TheKnot from '@/components/pages/Homepage/ContactUs/SocialLinks/TheKnot';
import Instagram from '@/components/pages/Homepage/ContactUs/SocialLinks/Instagram';
import Facebook from '@/components/pages/Homepage/ContactUs/SocialLinks/Facebook';
import TikTok from '@/components/pages/Homepage/ContactUs/SocialLinks/TikTok';

const Links = () => {
  return (
    <div className='mx-auto my-2 flex w-full justify-center gap-4'>
      <TheKnot />
      <Instagram />
      <Facebook />
      <TikTok />
    </div>
  );
};

export default Links;
