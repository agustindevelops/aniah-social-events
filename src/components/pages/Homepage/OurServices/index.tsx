"use client";

import Image from "next/image";

import ServiceCard from "@/components/pages/Homepage/OurServices/ServiceCard";

import { servicesData } from "./data";

const OurServices = () => {
  return (
    <div className="my-12">
      <Image
        src="/images/our-services-title.png"
        alt="Our Services"
        width={471}
        height={114}
        className="mx-auto mb-12"
      />
      <div className="grid grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.title} service={service} i={index} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
