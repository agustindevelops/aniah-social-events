"use client";

import { getRandomFromId } from "@/utils/functions";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

interface CardStackProps<T> {
  data: T[];
  children: (item: T, index: number) => React.ReactNode;
  getKey: (item: T) => string;
}

const CardStack = <T,>({ data, children, getKey }: CardStackProps<T>) => {
  const [stack, setStack] = useState(data);
  const remove = (index: number) =>
    setStack(() => stack.filter((_, i) => i !== index));

  return (
    <div
      className="stack-container w-full"
      style={{
        position: "relative",
        margin: "0 auto",
        height: "420px",
      }}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-4xl font-bold font-moonjelly max-w-xs">
        🎉 WOW! You found our secret $100 OFF code: ASE24 🎉
      </div>
      {stack.map((item, i) => (
        <CardWrapper key={getKey(item)} index={i} id={getKey(item)}>
          <Card key={getKey(item)} onSwipe={() => remove(i)}>
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
      transform: `translate(-50%, -50%) translate(${
        getRandomFromId(id, 0, 10) - 5
      }px, ${getRandomFromId(id, 0, 10) - 5}px) rotate(${
        getRandomFromId(id, 0, 4) - 2
      }deg)`,
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
          const direction = info.velocity.x > 0 ? 1 : -1;
          const targetX = direction * window.innerWidth * 2;

          animate(x, targetX, {
            duration: 0.5,
            ease: "easeOut",
          });

          setTimeout(() => {
            onSwipe();
          }, 100);
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
