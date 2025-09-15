"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export type TimelineEntry = {
  title: string;
  content: React.ReactNode;
};

export const Timeline = ({
  data,
  heading,
  subheading,
}: {
  data: TimelineEntry[];
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Track which timeline entry is closest to the sticky indicator position (mobile)
  useEffect(() => {
    if (typeof window === "undefined") return;

    let animationFrameId = 0;
    let scheduled = false;

    const updateActiveFromScroll = () => {
      // Match the sticky offset used in the left column: top-40 = 10rem = 160px
      const stickyAnchorY = 160;
      let closestIndex = 0;
      let smallestDelta = Number.POSITIVE_INFINITY;

      for (const [index, element] of itemRefs.current.entries()) {
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        const delta = Math.abs(rect.top - stickyAnchorY);
        if (delta < smallestDelta) {
          smallestDelta = delta;
          closestIndex = index;
        }
      }

      setActiveIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
      scheduled = false;
    };

    const onScrollOrResize = () => {
      if (scheduled) return;
      scheduled = true;
      animationFrameId = window.requestAnimationFrame(updateActiveFromScroll);
    };

    // Initialize once mounted
    onScrollOrResize();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [data.length]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      {(heading || subheading) && (
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
          {heading && (
            <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
              {subheading}
            </p>
          )}
        </div>
      )}

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
              {index === activeIndex ? (
                <div
                  className="md:hidden absolute left-8 top-12 -translate-x-1/2 z-50 pointer-events-none"
                  aria-live="polite"
                  role="status"
                >
                  <span className="rounded-md border border-neutral-200 dark:border-neutral-700 bg-background/90 dark:bg-neutral-900/90 shadow px-2 py-0.5 text-xs font-semibold text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
                    {item.title}
                  </span>
                </div>
              ) : null}
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary via-primary/70 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
