import { FaPinterestP } from "react-icons/fa";

const Pinterest = () => {
  return (
    <a
      href="https://www.pinterest.com"
      target="_blank"
      rel="noopener noreferrer"
      className="transition-transform hover:scale-110"
    >
      <FaPinterestP className="text-2xl" />
    </a>
  );
};

export default Pinterest;
