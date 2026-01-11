import { TypeComponentAuthor } from "@/lib/contentful/types";
import Image from "next/image";

const Author = (props: TypeComponentAuthor) => {
  if (!props) return <></>;
  const {
    fields: { name, avatar },
  } = props;
  if (!avatar) return <></>;

  const {
    fields: {
      file: { url },
    },
  } = avatar;

  return (
    <div className="flex border-gray-900/5 w-full">
      <div className="relative flex items-center gap-x-4 justify-between lg:justify-start w-full">
        <Image
          src={`https:${url}`}
          objectFit="cover"
          alt={name}
          className="w-24 h-12 rounded-full bg-gray-50 object-cover"
          width={96}
          height={96}
        />
        <div className="text-sm leading-6 flex flex-row gap-x-1 lg:flex-col">
          <p className="text-gray-600">Written by:</p>
          <p className="text-gray-900 font-semibold">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Author;
