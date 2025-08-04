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
    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
      <div className="relative flex items-center gap-x-4">
        <Image src={url} alt="" className="h-40 w-40 rounded-full bg-gray-50" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <span>
              <span className="absolute inset-0" />
              {name}
            </span>
          </p>
          <p className="text-gray-600">Author</p>
        </div>
      </div>
    </div>
  );
};

export default Author;
