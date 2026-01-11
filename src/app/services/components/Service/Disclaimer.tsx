import { AiFillHeart } from "react-icons/ai";

const Disclaimer = ({ disclaimer }: { disclaimer: string[] }) => {
  return (
    <div>
      <h3 className="font-pacifico text-2xl lg:text-3xl text-[#ffcfc8] mb-4">
        Please Note:
      </h3>
      <ul className="px-2 text-sm lg:px-12 lg:text-xl">
        {disclaimer.map((item) => {
          return (
            <li key={item} className="my-2 flex items-start gap-4 text-left">
              <div className="py-2 text-[#56674a]">
                <AiFillHeart />
              </div>
              <span className="self-center font-pacifico text-[#56674a]">
                {item}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Disclaimer;
