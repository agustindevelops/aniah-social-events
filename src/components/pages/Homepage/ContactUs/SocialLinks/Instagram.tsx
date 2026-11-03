import OptimizedImage from "@/components/OptimizedImage";

const Instagram = () => {
  return (
    <a
      href="https://www.instagram.com/aniahsocialevents.co"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-110"
    >
      <OptimizedImage
        host="vercel"
        src="/svg/instagram.svg"
        alt="Instagram"
        width={60}
        height={60}
      />
    </a>
  );
};

export default Instagram;
