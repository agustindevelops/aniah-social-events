import { AiFillHeart } from "react-icons/ai";

const Disclaimer = ({ disclaimer }: { disclaimer: string[] }) => {
  return (
    <div>
      <h3>Please Note:</h3>
      <ul className="px-2 text-sm lg:px-12 lg:text-xl">
        {disclaimer.map((disclaimer) => (
          <li
            key={disclaimer}
            className="my-2 flex items-start gap-4 text-left"
          >
            <div className="py-2">
              <AiFillHeart />
            </div>
            <span className="self-center">{disclaimer}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Disclaimer;
