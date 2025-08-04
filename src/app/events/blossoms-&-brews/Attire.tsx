import React, { FC } from "react";
import { BLOSSOMS_AND_BREWS } from "@/utils/content/events";
import Image from "next/image";

type FeatureType = { name?: string; description?: string[]; url?: string };

const features = [
  {
    name: "For Women",
    description: [
      "Pastel-colored sundresses with floral patterns",
      "Wide-brimmed hats adorned with ribbons",
      "Optional lace gloves",
      "Elegant, low-heeled shoes or sandals",
    ],
  },
  { url: "/images/blossoms-and-brews/attire.jpg" },
  {
    name: "For Men",
    description: [
      "Summer suits in light colors like beige or light blue",
      "Long-sleeve shirts and optional ties",
      "Straw boater hats or Panama hats",
      "Dress shoes or loafers",
    ],
  },
];

const Attire = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Dress Code
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, i) => (
              <Feature {...feature} key={`attire-${i}`} />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

const Feature: FC<FeatureType> = ({ name = "", description = [], url = "" }) =>
  url ? (
    <Image
      src={url}
      alt={BLOSSOMS_AND_BREWS.BANNER.ALT}
      className="w-full object-cover xl:rounded-3xl"
    />
  ) : (
    <div key={name} className="flex flex-col">
      <dt className="text-peach-500 flex items-center gap-x-3 text-2xl font-semibold leading-7 ">
        {name}
      </dt>
      <dd className="mt-4 flex flex-auto flex-col pl-7 text-base leading-7">
        <ul className="flex-auto list-disc">
          {description.map((d, i) => (
            <li
              className="text-lg font-semibold"
              key={`attire-${name}-tip-${i}`}
            >
              {d}
            </li>
          ))}
        </ul>
      </dd>
    </div>
  );

export default Attire;
