"use client";

import Link from "next/link";

import PageTitle from "@/components/pageTitle";
import HistoryCard from "@/components/historyCard";

export default function OurHistory() {
  const historyItems = [
    {
      title: "First Steps",
      subscription:
        "The agency is founded by one or more individuals, who typically have experience in real estate and a vision for how they can provide a unique service to clients.",
      year: "2004",
      imageUrl: "/assets/images/general/history-image.jpg",
    },
    {
      title: "Mobile Solutions",
      subscription:
        "The agency is founded by one or more individuals, who typically have experience in real estate and a vision for how they can provide a unique service to clients.",
      year: "2010",
      imageUrl: "/assets/images/general/history-image-2.jpg",
    },
    {
      title: "Dream Team",
      subscription:
        "The agency is founded by one or more individuals, who typically have experience in real estate and a vision for how they can provide a unique service to clients.",
      year: "2018",
      imageUrl: "/assets/images/general/history-image-3.jpg",
    },
    {
      title: "Incredible Case",
      subscription:
        "The agency is founded by one or more individuals, who typically have experience in real estate and a vision for how they can provide a unique service to clients.",
      year: "2021",
      imageUrl: "/assets/images/general/history-image-4.jpg",
    },
  ];

  return (
    <div className="w-full">
      <PageTitle title="History" subTitle="history" />

      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1">
            <div className="text-sm text-gray-400 font-semibold uppercase my-2">
              (little history)
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4">
              The Evolution Of Agency
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 flex md:justify-end items-center">
            <button className="group/btn btn-primary flex items-center gap-3">
              Get in touch
              <div className="group-hover/btn:scale-125 group-hover/btn:bg-white w-2 h-2 rounded-full bg-black transition-all duration-700"></div>
            </button>
          </div>
        </div>

        <div className="relative w-full h-auto my-20">
          <div className="hidden md:block absolute top-0 left-[50%] translate-x-[-50%] w-2 h-2 rounded-full bg-black"></div>
          <div className="hidden md:block absolute bottom-0 left-[50%] translate-x-[-50%] w-2 h-2 rounded-full bg-black"></div>

          <HistoryCard historyItems={historyItems} />
        </div>
      </div>
    </div>
  );
}
