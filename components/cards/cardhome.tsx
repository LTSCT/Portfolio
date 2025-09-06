"use client";
import React from "react";
import { motion } from "motion/react";

export function AnimatedModalDemo() {
  const images = [
    "/leyll.jpg",
    "/flp1.jpg",
    "/flp2.jpg",
    "/army.jpg",
    "/vvv2.png",
    
  ];
  return (
    <div className="py-16  relative w-full">
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-3 mt-3 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                >
                  <img
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-80 md:w-45 object-cover shrink-0"
                  />
                </motion.div>
              ))}
            </div>
    </div>
  );
}
