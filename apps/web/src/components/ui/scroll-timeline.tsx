"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo(): React.ReactElement {
  const data = [
    {
      date: "Mar 2018",
      title: "We start dating!",

      images: [
        { img: "/timeline/web_start-dating.JPG", name: "When we started dating" },
        { img: "/timeline/first-date.JPG", name: "Our first date" },
      ],
    },
{
  title: "Teaching Ash how to drive",
  date: "2018",

      images: [
        { img: "/timeline/teach-drive.JPG", name: "Teaching Ash to drive" },
      ],
    },
    {
      date: "Sep 2018",
      title: "Our first holiday",
      images: [
        { img: "/timeline/first-holiday.jpg", name: "Our first holiday together" },
      ],
    },
    {
      title: "First Christmas Together",
      date: "Dec 2018",
      images: [
        { img: "/timeline/first-christmas.jpg", name: "Our first Christmas together" },
      ],
    },
    {
      date: "Jan 2019",
      title: "First Melbourne trip",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our first trip to Melbourne together. It was this trip when we told ourselves we would one day move here.
          </p>
        </div>
      ),
      images: [
        { img: "/timeline/first-melb-1.jpg", name: "First Melbourne trip" },
        { img: "/timeline/first-melb-2.JPG", name: "First Melbourne trip" },
      ],
    },
    {
      date: "Nov 2020",
      title: "We move in together",
      images: [
        { img: "/timeline/web_move-in.jpg", name: "Moving in together" },
      ],
    },
    {
      date: "Sep 2022",
      title: "Move to Melbourne",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            The 18 hour drive with Luna supervising.
          </p>
          
        </div>
      ),
      images: [
        { img: "/timeline/move-melb.jpg", name: "The big move to Melbourne" },
        { img: "/timeline/web_move-melb-1.jpg", name: "The big move to Melbourne" },
        { img: "/timeline/web_move-melb-2.JPG", name: "Luna supervising our move" },
      ],
    },
    {
      date: "May 2023",
      title: "First overseas holiday",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our first overseas holiday together.
          </p>
          
        </div>
      ),
      images: [
        { img: "/timeline/web_first-oveseas-1.jpg", name: "Our first overseas holiday" },
        { img: "/timeline/web_first-overseas-2.jpg", name: "Our first overseas holiday" },
      ],
    },
    {
      date: "May 2023",
      title: "First time in Bled",
      images: [
        { img: "/timeline/web_first-bled-1.jpg", name: "First time in Bled" },
        { img: "/timeline/web_first-bled-2.jpg", name: "Beautiful Bled memories" },
        { img: "/timeline/web_first-bled-3.jpg", name: "Beautiful Bled memories" },
        { img: "/timeline/web_first-bled-4.jpg", name: "Beautiful Bled memories" },
      ],
    },
    {
      date: "Dec 2023",
      title: "We welcome Biscuit",
      images: [
        { img: "/timeline/web_son-biscuit-1.jpg", name: "Welcome home Biscuit" },
        { img: "/timeline/web_son-biscuit-2.JPG", name: "Welcome home Biscuit" },
      ],
    },
    {
      date: "Jun 2024",
      title: "Second visit to Bled",
      images: [
        { img: "/timeline/web_2nd-bled.jpg", name: "Our second visit to Bled" },
        { img: "/timeline/web_second-bled-1.jpg", name: "Our second visit to Bled" },
      ],
    },
    {
      date: "Aug 2024",
      title: "We buy our first home",
      images: [
        { img: "/timeline/web_house-move.jpg", name: "Our new home" },
        { img: "/timeline/web_new-home-one.JPG", name: "Our new home" },
      ],
    },
    {
      date: "Aug 2024",
      title: "The Proposal",
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


