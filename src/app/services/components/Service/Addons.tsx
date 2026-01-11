import { AiFillHeart } from "react-icons/ai";

const Addons = ({ addons }: { addons: string[] }) => {
  return (
    <div>
      <h3 className="font-pacifico text-2xl lg:text-3xl text-[#ffcfc8] mb-4">
        Add-Ons:
      </h3>
      <ul className="mt-6 px-2 text-sm lg:px-12 lg:text-xl">
        {addons.map((addon) => {
          return (
            <li key={addon} className="my-2 flex items-start gap-4 text-left">
              <div className="py-2 text-[#56674a]">
                <AiFillHeart />
              </div>
              <span className="self-center font-pacifico text-[#56674a]">
                {addon}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Addons;
