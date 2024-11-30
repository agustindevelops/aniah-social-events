import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { SERVICES } from "@/utils/data";
import { Package } from "@/app/services/[slug]/page";

const DEFAULT_VALUE: Package = {
  slug: "",
  pathname: "",
  title: "",
  subTitle: "",
  price: "",
  body: "",
  services: [],
};

const { PLANNING_AND_COORDINATION, TABLESCAPES } = SERVICES;

const getService: (params: { slug?: string }) => Package = (params) => {
  const slug = params?.slug as string;
  return (
    [...Object.values(PLANNING_AND_COORDINATION), TABLESCAPES].find((item) => {
      return item.slug === slug;
    }) || DEFAULT_VALUE
  );
};

const Service = ({ params }: { params: { slug: string } }) => {
  const { title, subTitle, price, body, services } = getService(params);

  return (
    <section className="">
      <div className="text-brown-500 rounded-lg pb-16 pt-4 text-center shadow-xl">
        <div className="py-4">
          <div className="container mx-auto px-2">
            <h1 className="font-pacifico mb-6 text-5xl font-normal lg:text-6xl">
              {title}
            </h1>
            <Image
              src="/images/services/leaf.png"
              alt="artsy-leaf"
              width={300}
              height={200}
              className="mx-auto my-4"
            />
            <h2 className="font-libre mt-2 text-2xl font-medium">{subTitle}</h2>
            <p className="font-libre mt-2 text-3xl font-semibold tracking-widest">
              {price}
            </p>
          </div>
        </div>

        <div className="font-libre container mx-auto px-4 text-lg lg:text-2xl">
          <p className="mt-2 font-bold lg:mt-6">{body}</p>
          <ul className="mt-6 px-2 text-sm lg:px-12 lg:text-xl">
            {services.map((service) => (
              <li
                key={service}
                className="my-2 flex items-start gap-4 text-left"
              >
                <div className="py-2">
                  <AiFillHeart />
                </div>
                <span className="self-center">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Service;
