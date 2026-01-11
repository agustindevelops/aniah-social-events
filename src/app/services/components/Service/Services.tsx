import { AiFillHeart } from "react-icons/ai";

const Services = ({ services }: { services: string[] }) => {
  const textColor = "text-[#ce6b69]";
  const iconColor = "text-[#ce6b69]";
  return (
    <ul className="mt-6 px-2 text-sm lg:px-12 lg:text-xl">
      {services.map((service) => {
        return (
          <li key={service} className="my-2 flex items-start gap-4 text-left">
            <div className={`py-2 ${iconColor}`}>
              <AiFillHeart />
            </div>
            <span className={`self-center font-pacifico ${textColor}`}>
              {service}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Services;
