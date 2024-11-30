import Image from "next/image";

const Facebook = () => {
  return (
    <a
      href="https://www.facebook.com/profile.php?id=61557795788814&notif_id=1712091510186342&notif_t=follower_invite&ref=notif"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-110"
    >
      <Image src="/svg/facebook.svg" alt="Instagram" width={25} height={25} />
    </a>
  );
};

export default Facebook;
