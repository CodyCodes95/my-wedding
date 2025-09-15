"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Testimonial = {
  quote: string;
  name: string;
  src: string;
  designation?: string;
  price?: string;
  href?: string;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  onActiveChange,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  onActiveChange?: (index: number) => void;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => {
      const nextIndex = (prev + 1) % testimonials.length;
      if (onActiveChange) onActiveChange(nextIndex);
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setActive((prev) => {
      const nextIndex = (prev - 1 + testimonials.length) % testimonials.length;
      if (onActiveChange) onActiveChange(nextIndex);
      return nextIndex;
    });
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  // Deterministic per-index rotation to avoid SSR/CSR hydration mismatch
  const deterministicRotateY = (index: number) => {
    const a = 9301;
    const c = 49297;
    const m = 233280;
    const seed = (index + 1) * 12345;
    const rnd = (seed * a + c) % m; // 0..m-1
    return Math.floor((rnd / m) * 21) - 10; // -10..10
  };
  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: deterministicRotateY(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : deterministicRotateY(index),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: deterministicRotateY(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    fill
                    priority={index === active}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    draggable={false}
                    className="rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-black dark:text-white">
              {testimonials[active].name}
            </h3>
            <motion.p className="mt-6 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              {testimonials[active].price && (
                <p className="text-sm text-gray-600 dark:text-neutral-400">
                  Price per night: <span className="font-medium text-foreground">{testimonials[active].price}</span>
                </p>
              )}
              {testimonials[active].href && (
                <Button asChild>
                  <a href={testimonials[active].href} target="_blank" rel="noopener noreferrer">
                    View website
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              type="button"
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
