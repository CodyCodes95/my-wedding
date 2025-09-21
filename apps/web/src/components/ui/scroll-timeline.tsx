"use client";
import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo(): React.ReactElement {
  const data = [
    {
      title: "March 23rd, 2018",
      content: (
        <div>
          <h2 className="text-primary text-3xl">
            We start dating
          </h2>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/timeline/web_start-dating.JPG"
              alt="When we started dating"
              width={500}
              height={500}
              className="w-full max-h-96 rounded-lg object-contain"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Our First Date",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our first date was magical and set the foundation for everything that would follow. From that moment, we knew there was something special between us.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/timeline/first-date.JPG"
              alt="Our first date"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Learning to Drive",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Teaching Ash how to drive became some of our sweetest early memories. Those patient (and sometimes white-knuckle) lessons in the car brought us even closer together.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/timeline/teach-drive.JPG"
              alt="Teaching Ash to drive"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "September 2018",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our first holiday together - discovering new places and falling deeper in love. This trip showed us how well we traveled together and how much we enjoyed exploring the world as a team.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/timeline/first-holiday.jpg"
              alt="Our first holiday together"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "First Christmas Together",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our first Christmas together, starting traditions that would become the foundation of our life together. This was when we truly began to feel like a family.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/timeline/first-christmas.jpg"
              alt="Our first Christmas together"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "January 19th, 2019",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our first trip to Melbourne together. Walking through the vibrant streets, we both knew - one day, we'll call this place home. This was the moment our Melbourne dream was born.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/timeline/web_move-melb-1.jpg"
              alt="First Melbourne trip"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "November 8th, 2020",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A huge milestone - we move in together for the first time! Creating our first shared space and learning the joy (and challenges) of living together. This was the beginning of our shared daily life.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/timeline/web_move-in.jpg"
              alt="Moving in together"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "September 10th, 2022",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            The big move to Melbourne! An epic 18-hour drive with Luna giving us those judgmental looks from the backseat. Our dream of living in Melbourne finally becoming reality.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/timeline/move-melb.jpg"
              alt="The big move to Melbourne"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/web_move-melb-2.JPG"
              alt="Luna supervising our move"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "May 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our first overseas holiday together - an adventure that brought us even closer. Exploring new countries and cultures together, creating memories that would last a lifetime.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/timeline/web_first-overseas-2.jpg"
              alt="Our first overseas holiday"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "May 23rd, 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We visit Bled, Slovenia for the first time. The breathtaking beauty of this place left us both speechless and created memories we'll treasure forever. Little did we know how significant this place would become for us.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/timeline/web_first-bled-1.jpg"
              alt="First time in Bled"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/timeline/web_first-bled-2.jpg"
              alt="Beautiful Bled memories"
              width={500}
              height={500}
              className="w-full h-auto rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "December 5th, 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We welcome our son Biscuit into the family! Our little furry bundle of joy completed our home with endless love and laughter. From day one, he became the heart of our household.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/timeline/web_son-biscuit-1.jpg"
              alt="Welcome home Biscuit"
              width={500}
              height={500}
              className="min-h-32 max-h-80 w-full rounded-lg object-contain bg-neutral-50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-900"
            />
          </div>
        </div>
      ),
    },
    {
      title: "June 1st, 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We return to Bled, Slovenia for the second time. In this magical place, I knew with certainty - this is where I want to marry Ash. The beauty of Bled had captured our hearts once again.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/timeline/web_second-bled-1.jpg"
              alt="Our second visit to Bled"
              width={500}
              height={500}
              className="min-h-32 max-h-80 w-full rounded-lg object-contain bg-neutral-50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-900"
            />
          </div>
        </div>
      ),
    },
    {
      title: "August 28th, 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We buy and move into our first home together. A dream we'd been working towards for years finally became reality. This house would be the foundation for the next chapter of our lives.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/timeline/web_new-home-one.JPG"
              alt="Our new home"
              width={500}
              height={500}
              className="min-h-32 max-h-80 w-full rounded-lg object-contain bg-neutral-50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-900"
            />
            <Image
              src="/timeline/web_new-home-2.jpg"
              alt="Moving into our home"
              width={500}
              height={500}
              className="min-h-32 max-h-80 w-full rounded-lg object-contain bg-neutral-50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-900"
            />
          </div>
        </div>
      ),
    },
    {
      title: "The Proposal 💍",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            That same evening, in our new home, I ask Ash to marry me. She said yes! 💍 After six and a half years together, surrounded by moving boxes in our first home, it was the perfect moment to start our forever.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <Image
              src="/timeline/web_propose.jpg"
              alt="The proposal"
              width={500}
              height={500}
              className="min-h-32 max-h-80 w-full rounded-lg object-contain bg-neutral-50 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-900"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}


