"use client";

import Image from "next/image";

import Button from "@/components/buttons/Button";
import UnstyledLink from "@/components/links/UnstyledLink";
import { Service } from "@/components/pages/Homepage/OurServices/servicesTypes";

const ServiceCard = ({ service }: { service: Service; i?: number }) => (
  <div className="bg-peach-100 relative flex h-full flex-col overflow-hidden rounded-lg border lg:p-4">
    <div className="relative h-72 flex-shrink-0">
      <Image
        src={service.image}
        alt={service.title}
        className="rounded-t-lg"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>

    <div className="flex flex-grow flex-col justify-between p-4">
      <div>
        <h2 className="font-gentySans mb-2 text-lg md:mb-1 md:text-2xl">
          {service.title}
        </h2>
        <p className="font-shrikhand mb-2 text-lg font-semibold">
          {service.price}
        </p>
        <p className="font-gentySans sm:text-md text-lg md:text-lg">
          {service.description}
        </p>
      </div>
      <UnstyledLink href={service.link} className="mt-4 flex flex-col">
        <Button className="bg-peach-500 border-white transition duration-300 hover:scale-105">
          {service.ctaLabel}
        </Button>
      </UnstyledLink>
    </div>
  </div>
);

export default ServiceCard;
