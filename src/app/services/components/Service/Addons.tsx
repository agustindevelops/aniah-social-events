import { AiFillHeart } from "react-icons/ai";

const Addons = ({ addons }: { addons: string[] }) => {
  return (
    <div>
      <h3>Add-Ons:</h3>
      <ul className="mt-6 px-2 text-sm lg:px-12 lg:text-xl">
        {addons.map((addon) => (
          <li key={addon} className="my-2 flex items-start gap-4 text-left">
            <div className="py-2">
              <AiFillHeart />
            </div>
            <span className="self-center">{addon}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Addons;
