"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "motion/react";
import { HeartIcon, TentIcon } from "lucide-react";

export const DraggableCardBody = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  // physics biatch
  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const springConfig = {
    stiffness: 80,
    damping: 30,
    mass: 0.7,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [12, -12]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-12, 12]),
    springConfig,
  );

  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]),
    springConfig,
  );

  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.1, 0, 0.1]),
    springConfig,
  );

  useEffect(() => {
    // Update constraints when component mounts or window resizes
    const updateConstraints = () => {
      if (typeof window !== "undefined") {
        setConstraints({
          top: -window.innerHeight / 2,
          left: -window.innerWidth / 2,
          right: window.innerWidth / 2,
          bottom: window.innerHeight / 2,
        });
      }
    };

    updateConstraints();

    // Add resize listener
    window.addEventListener("resize", updateConstraints);

    // Clean up
    return () => {
      window.removeEventListener("resize", updateConstraints);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraints}
      onDragStart={() => {
        document.body.style.cursor = "grabbing";
      }}
      onDragEnd={(event, info) => {
        document.body.style.cursor = "default";

        controls.start({
          rotateX: 0,
          rotateY: 0,
          transition: {
            type: "spring",
            ...springConfig,
          },
        });
        const currentVelocityX = velocityX.get();
        const currentVelocityY = velocityY.get();

        const velocityMagnitude = Math.sqrt(
          currentVelocityX * currentVelocityX +
            currentVelocityY * currentVelocityY,
        );
        const bounce = Math.min(0.8, velocityMagnitude / 1000);

        animate(info.point.x, info.point.x + currentVelocityX * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });

        animate(info.point.y, info.point.y + currentVelocityY * 0.3, {
          duration: 0.8,
          ease: [0.2, 0, 0, 1],
          bounce,
          type: "spring",
          stiffness: 50,
          damping: 15,
          mass: 0.8,
        });
      }}
      style={{
        rotateX,
        rotateY,
        opacity,
        willChange: "transform",
      }}
      animate={controls}
      whileHover={{ scale: 1.01 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative min-h-96 w-80 overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl transform-3d dark:bg-neutral-900",
        className,
      )}
    >
      {children}
      <motion.div
        style={{
          opacity: glareOpacity,
        }}
        className="pointer-events-none absolute inset-0 bg-white select-none"
      />
    </motion.div>
  );
};

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("[perspective:3000px]", className)}>{children}</div>
  );
};

// Assets from public/timeline
const TIMELINE_IMAGES = [
  { imgSrc: "/timeline/web_start-dating.JPG", title: <HeartIcon /> },
  { imgSrc: "/timeline/first-date.JPG", title: "Our first date" },
  { imgSrc: "/timeline/first-christmas.jpg", title: "Our first Christmas" },
  { imgSrc: "/timeline/first-holiday.jpg", title: "Our first holiday" },
  { imgSrc: "/timeline/teach-drive.JPG", title: "Teaching Ash to drive" },
  { imgSrc: "/timeline/web_move-in.jpg", title: "Moving in together" },
  { imgSrc: "/timeline/web_move-melb-1.jpg", title: "Moving to Melbourne" },
  { imgSrc: "/timeline/move-melb.jpg", title: "Picnic in Melbourne" },
  { imgSrc: "/timeline/web_move-melb-2.JPG", title: "Luna supervising our move" },
  { imgSrc: "/timeline/web_first-oveseas-1.jpg", title: "Our first overseas holiday" },
  { imgSrc: "/timeline/web_first-overseas-2.jpg", title: <HeartIcon /> },
  { imgSrc: "/timeline/web_first-bled-1.jpg", title: "First time in Bled" },
  { imgSrc: "/timeline/web_first-bled-2.jpg", title: <TentIcon /> },
  { imgSrc: "/timeline/web_first-bled-3.jpg", title: "Breakfast in Bled" },
  { imgSrc: "/timeline/web_first-bled-4.jpg", title: "Cycling the Bled countryside" },
    { imgSrc: "/timeline/web_son-biscuit-1.jpg", title: "Welcome home Biscuit" },
  { imgSrc: "/timeline/web_son-biscuit-2.JPG", title: "" },
  { imgSrc: "/timeline/web_second-bled-1.jpg", title: "Our second visit to Bled" },
    { imgSrc: "/timeline/web_2nd-overseas-1.jpg", title: "" },
  { imgSrc: "/timeline/web_second-overseas-2.jpg", title: "" },
  { imgSrc: "/timeline/web_second-overseas-3.JPG", title: "" },
  { imgSrc: "/timeline/web_second-overseas-4.jpg", title: "" },
  { imgSrc: "/timeline/web_second-overseas.jpg", title: "" },
  { imgSrc: "/timeline/web_house-move.jpg", title: "Moving into our home" },
  { imgSrc: "/timeline/web_new-home-one.JPG", title: "Biscui'ts first Halloween" },
  { imgSrc: "/timeline/web_propose.jpg", title: "The proposal" },
  { imgSrc: "/timeline/web_toastie-1.jpg", title: "Welcome home Toastie" },
];

export function DraggableCardDemo() {
  const numColumns = 4;
  const columnPercents = [0, 24, 48, 72];
  const rowStepPx = 320;
  const baseTopPx = 60;

  const rows = Math.ceil(TIMELINE_IMAGES.length / numColumns);
  const totalHeightPx = baseTopPx + rows * rowStepPx + 800;

  const noise = (n: number, seed: number) => Math.sin(n * 0.91 + seed);

  const [zOrder, setZOrder] = useState<Map<string, number>>(() => new Map());
  const zCounterRef = useRef<number>(1000);

  return (
    <div className="relative ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] w-screen" style={{ height: totalHeightPx }}>
      <DraggableCardContainer className="relative w-full h-full overflow-visible">
        {TIMELINE_IMAGES.map(({ imgSrc, title }, index) => {
          const columnIndex = index % numColumns;
          const rowIndex = Math.floor(index / numColumns);

          const jitterX = Math.round(noise(index, 1.7) * 24); // px
          const jitterY = Math.round(noise(index, 2.3) * 14); // px
          const rotationDeg = Math.round(noise(index, 3.1) * 4); // degrees

          const topPx = baseTopPx + rowIndex * rowStepPx + jitterY;
          const leftPercent = columnPercents[columnIndex];

          const zIndex = zOrder.get(imgSrc) ?? index;
          const bringToFront = () => {
            zCounterRef.current += 1;
            setZOrder((prev) => {
              const next = new Map(prev);
              next.set(imgSrc, zCounterRef.current);
              return next;
            });
          };

          return (
            <div
              className="absolute"
              key={imgSrc}
              style={{
                top: topPx,
                left: `calc(${leftPercent}% + ${jitterX}px)`,
                transform: `rotate(${rotationDeg}deg)`,
                zIndex,
              }}
              onMouseOver={bringToFront}
              onPointerDown={bringToFront}
            >
              <DraggableCardBody>
                <div className="relative z-10 h-80 w-full">
                  <Image
                    alt={title}
                    src={imgSrc}
                    fill
                    sizes="320px"
                    className="object-cover"
                    priority={false}
                  />
                </div>
                <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                  {title}
                </h3>
              </DraggableCardBody>
            </div>
          );
        })}
      </DraggableCardContainer>
    </div>
  );
}
