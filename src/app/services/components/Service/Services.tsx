import { AiFillHeart } from "react-icons/ai";

const Services = ({ services }: { services: string[] }) => {
  return (
    <ul className="mt-6 px-2 text-sm lg:px-12 lg:text-xl">
      {services.map((service) => (
        <li key={service} className="my-2 flex items-start gap-4 text-left">
          <div className="py-2">
            <AiFillHeart />
          </div>
          <span className="self-center">{service}</span>
        </li>
      ))}
    </ul>
  );
};

export default Services;
