import Image from "next/image";

const TikTok = () => {
  return (
    <a
      href="https://www.tiktok.com/@aniahsocialevents"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-110"
    >
      <Image src="/svg/tiktok.svg" alt="Instagram" width={60} height={60} />
    </a>
  );
};

export default TikTok;
