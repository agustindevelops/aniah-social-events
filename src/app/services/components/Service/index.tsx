import Image from "next/image";

import ListWrapper from "@/app/services/components/Service/ListWrapper";
import { getServiceBySlug } from "@/lib/contentful/api";

const Service = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const {
    title,
    subtitle,
    price,
    body,
    services = [],
    addons = [],
    disclaimer = [],
  } = await getServiceBySlug(slug);

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
            <h2 className="font-libre mt-2 text-2xl font-medium">{subtitle}</h2>
            <p className="font-libre mt-2 text-3xl font-semibold tracking-widest">
              ${price}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="font-libre container mx-auto px-4 text-lg lg:text-2xl col-span-1 lg:col-span-2">
            <p className="mt-2 font-bold lg:mt-6">{body}</p>
            <ListWrapper
              items={services}
              showHeading={false}
              iconColor="text-[#ce6b69]"
              primaryTextFont="font-pacifico"
              textColor="text-[#ce6b69]"
              secondaryTextFont="font-libre"
              listClassName="mt-6"
            />
          </div>
          <div className="col-span-1">
            <ListWrapper
              heading="Add-Ons:"
              items={addons}
              headingColor="text-[#ffcfc8]"
              textColor="text-[#56674a]"
              iconColor="text-[#56674a]"
              headingFont="font-pacifico"
              primaryTextFont="font-pacifico"
              secondaryTextFont="font-libre"
              listClassName="mt-6"
            />
            <ListWrapper
              heading="Please Note:"
              items={disclaimer}
              headingColor="text-[#ffcfc8]"
              textColor="text-[#56674a]"
              iconColor="text-[#56674a]"
              headingFont="font-pacifico"
              primaryTextFont="font-pacifico"
              secondaryTextFont="font-libre"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
