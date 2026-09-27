import { forwardRef, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/ui/Button";

const FAN = [
  { rotate: -15, tx: -44, ty: 18, z: 10 },
  { rotate: 10, tx: 38, ty: 10, z: 20 },
  { rotate: -2, tx: -6, ty: 0, z: 30 },
];

const CaseSlide = forwardRef(function CaseSlide(
  { study, index, activeIndex },
  ref,
) {
  const distance = Math.abs(index - activeIndex);
  const isActive = distance === 0;

  const imageScrollRef = useRef(null);

  return (
    <div
      ref={ref}
      className="snap-center h-full w-full flex-shrink-0 flex items-center justify-center px-12"
    >
      <div
        style={{
          opacity: isActive ? 1 : Math.max(0.08, 1 - distance * 0.55),
          filter: isActive ? "none" : `blur(${distance * 5}px)`,
          transform: `scale(${isActive ? 1 : 1 - distance * 0.06})`,
          transition:
            "opacity 0.7s ease, filter 0.7s ease, transform 0.7s ease",
        }}
        className="flex flex-col items-center gap-5 w-full max-w-2xl"
      >
        {/* Image scroll row / bouquet */}
        <motion.div
          ref={imageScrollRef}
          layout
          className={
            isActive
              ? "w-full flex overflow-x-auto snap-x snap-mandatory gap-5 px-8 py-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              : "relative w-[260px] h-[300px] flex items-center justify-center"
          }
        >
          {study.images.map((src, i) => {
            const { rotate, tx, ty, z } = FAN[i] ?? FAN[FAN.length - 1];
            return (
              <motion.img
                layout
                key={src}
                src={src}
                alt=""
                className={`object-cover rounded-2xl ${
                  isActive
                    ? "w-[240px] h-[250px] shrink-0 snap-center relative"
                    : "w-[200px] h-[250px] absolute"
                }`}
                initial={false}
                animate={{
                  rotate: isActive ? 0 : rotate,
                  x: isActive ? 0 : tx,
                  y: isActive ? 0 : ty,
                  zIndex: isActive ? 1 : z,
                  boxShadow: isActive
                    ? "0 12px 30px rgba(0,0,0,0.2)"
                    : "0 20px 60px rgba(0,0,0,0.4)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                  mass: 0.8,
                }}
              />
            );
          })}
        </motion.div>

        {/* Text content */}
        <div className="flex flex-col items-center gap-3 text-center px-4">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-camel font-semibold">
            {study.label}
          </p>
          <h3 className="font-serif text-3xl xl:text-4xl leading-tight max-w-sm">
            {study.title}
          </h3>
          <p className="font-sans text-base text-textmuted leading-relaxed max-w-sm">
            {study.description}
          </p>
          {study.link && (
            <Button
              variant="outline"
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              See More Details
            </Button>
          )}
        </div>
      </div>
    </div>
  );
});

export default CaseSlide;
