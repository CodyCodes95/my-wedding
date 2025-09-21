"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo(): React.ReactElement {
  const data = [
    {
      date: "March 23rd, 2018",
      title: "We start dating!",

      images: [
        { img: "/timeline/web_start-dating.JPG", name: "When we started dating" },
      ],
    },
    {
      title: "Our First Date",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our first date was magical and set the foundation for everything that would follow. From that moment, we knew there was something special between us.
          </p>
        </div>
      ),
      images: [
        { img: "/timeline/first-date.JPG", name: "Our first date" },
      ],
    },
    {
      title: "Learning to Drive",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Teaching Ash how to drive became some of our sweetest early memories. Those patient (and sometimes white-knuckle) lessons in the car brought us even closer together.
          </p>
        </div>
      ),
      images: [
        { img: "/timeline/teach-drive.JPG", name: "Teaching Ash to drive" },
      ],
    },
    {
      date: "September 2018",
      title: "Our first holiday",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our first holiday together - discovering new places and falling deeper in love. This trip showed us how well we traveled together and how much we enjoyed exploring the world as a team.
          </p>
        </div>
      ),
      images: [
        { img: "/timeline/first-holiday.jpg", name: "Our first holiday together" },
      ],
    },
    {
      title: "First Christmas Together",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our first Christmas together, starting traditions that would become the foundation of our life together. This was when we truly began to feel like a family.
          </p>
        </div>
      ),
      images: [
        { img: "/timeline/first-christmas.jpg", name: "Our first Christmas together" },
      ],
    },
    {
      date: "January 19th, 2019",
      title: "First Melbourne trip",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our first trip to Melbourne together. Walking through the vibrant streets, we both knew - one day, we'll call this place home. This was the moment our Melbourne dream was born.
          </p>
        </div>
      ),
      images: [
        { img: "/timeline/web_move-melb-1.jpg", name: "First Melbourne trip" },
      ],
    },
    {
      date: "November 8th, 2020",
      title: "We move in together",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A huge milestone - we move in together for the first time! Creating our first shared space and learning the joy (and challenges) of living together. This was the beginning of our shared daily life.
          </p>
        </div>
      ),
      images: [
        { img: "/timeline/web_move-in.jpg", name: "Moving in together" },
      ],
    },
    {
      date: "September 10th, 2022",
      title: "The big move to Melbourne",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            The big move to Melbourne! An epic 18-hour drive with Luna giving us those judgmental looks from the backseat. Our dream of living in Melbourne finally becoming reality.
          </p>
          
        </div>
      ),
      images: [
        { img: "/timeline/move-melb.jpg", name: "The big move to Melbourne" },
        { img: "/timeline/web_move-melb-2.JPG", name: "Luna supervising our move" },
      ],
    },
    {
      date: "May 2023",
      title: "First overseas holiday",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our first overseas holiday together - an adventure that brought us even closer. Exploring new countries and cultures together, creating memories that would last a lifetime.
          </p>
          
        </div>
      ),
      images: [
        { img: "/timeline/web_first-overseas-2.jpg", name: "Our first overseas holiday" },
      ],
    },
    {
      date: "May 23rd, 2023",
      title: "First time in Bled",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We visit Bled, Slovenia for the first time. The breathtaking beauty of this place left us both speechless and created memories we'll treasure forever. Little did we know how significant this place would become for us.
          </p>
          
        </div>
      ),
      images: [
        { img: "/timeline/web_first-bled-1.jpg", name: "First time in Bled" },
        { img: "/timeline/web_first-bled-2.jpg", name: "Beautiful Bled memories" },
      ],
    },
    {
      date: "December 5th, 2023",
      title: "We welcome Biscuit",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We welcome our son Biscuit into the family! Our little furry bundle of joy completed our home with endless love and laughter. From day one, he became the heart of our household.
          </p>
          
        </div>
      ),
      images: [
        { img: "/timeline/web_son-biscuit-1.jpg", name: "Welcome home Biscuit" },
      ],
    },
    {
      date: "June 1st, 2024",
      title: "Second visit to Bled",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We return to Bled, Slovenia for the second time. In this magical place, I knew with certainty - this is where I want to marry Ash. The beauty of Bled had captured our hearts once again.
          </p>
          
        </div>
      ),
      images: [
        { img: "/timeline/web_second-bled-1.jpg", name: "Our second visit to Bled" },
      ],
    },
    {
      date: "August 28th, 2024",
      title: "We buy our first home",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            We buy and move into our first home together. A dream we'd been working towards for years finally became reality. This house would be the foundation for the next chapter of our lives.
          </p>
          
        </div>
      ),
      images: [
        { img: "/timeline/web_new-home-one.JPG", name: "Our new home" },
        { img: "/timeline/web_new-home-2.jpg", name: "Moving into our home" },
      ],
    },
    {
      date: "August 28th, 2024",
      title: "The Proposal 💍",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            That same evening, in our new home, I ask Ash to marry me. She said yes! 💍 After six and a half years together, surrounded by moving boxes in our first home, it was the perfect moment to start our forever.
          </p>
          
        </div>
      ),
      images: [
        { img: "/timeline/web_propose.jpg", name: "The proposal" },
      ],
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}


