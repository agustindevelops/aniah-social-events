"use client";

import { getRandomFromId } from "@/utils/functions";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

interface CardStackProps<T> {
  data: T[];
  children: (item: T, index: number) => React.ReactNode;
  getKey: (item: T) => string;
}

const CardStack = <T,>({ data, children, getKey }: CardStackProps<T>) => {
  const [stack, setStack] = useState(data);
  const removeTop = () => setStack((s) => (s.length > 1 ? s.slice(1) : data));

  return (
    <div
      className="stack-container"
      style={{
        position: "relative",
        margin: "0 auto",
        height: "420px",
      }}
    >
      {stack.map((item, i) => (
        <CardWrapper key={getKey(item)} index={i} id={getKey(item)}>
          <Card key={getKey(item)} onSwipe={removeTop}>
            {children(item, i)}
          </Card>
        </CardWrapper>
      ))}
    </div>
  );
};

const CardWrapper = ({
  children,
  index,
  id,
}: {
  id: string;
  children: React.ReactNode;
  index: number;
}) => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: `translate(-50%, -50%) translate(${getRandomFromId(id, 0, 20)}px, ${getRandomFromId(id,0,20)}px)
                rotate(${getRandomFromId(id, 0, 10) - 5}deg)`,
      zIndex: 10 - index,
      width: "48rem",
      maxWidth: "calc(100vw - 4rem)",
      minHeight: "24rem",
    }}
  >
    {children}
  </div>
);

const Card = ({
  children,
  onSwipe,
}: {
  children: React.ReactNode;
  onSwipe: () => void;
}) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-20, 0, 20]);

  return (
    <motion.div
      drag="x"
      style={{ x, rotate }}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (Math.abs(info.velocity.x) > 500 || Math.abs(info.point.x) > 150) {
          onSwipe();
        }
      }}
      whileTap={{ scale: 1.05 }}
      className="card"
    >
      {children}
    </motion.div>
  );
};

export default CardStack;
