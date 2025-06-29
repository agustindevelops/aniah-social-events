"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ImageCard from "./ImageCard";

const ImageCarousel = ({ images }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth);
    }
  }, []);

  return (
    <div className="h-48 my-24 relative">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, -width] }}
        transition={{
          duration: images.length * 5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 flex items-center"
        ref={ref}
      >
        <div className="flex  whitespace-nowrap">
          {images.map((image) => (
            <ImageCard
              key={image.id}
              imageUrl={image.imageUrl}
              alt={image.alt}
              id={image.id}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

type Props = {
  images: { id: string; alt: string; imageUrl: string }[];
};

export default ImageCarousel;
