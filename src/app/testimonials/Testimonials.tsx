"use client";
import CardStack from "../components/CardStack";
import TestimonialsCard from "./Card";
import data from "./data";

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-nickainley text-4xl sm:text-5xl md:text-6xl">
        Testimonials
      </h2>
      <CardStack data={data} getKey={(item) => item.id}>
        {(item) => <TestimonialsCard {...item} />}
      </CardStack>
    </div>
  );
};

export default Testimonials;
