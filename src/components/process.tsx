"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper stylesimport 'swiper/css/scrollbar';
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel, Pagination } from "swiper/modules";

import { fetchProcessData } from "@/js/function";

export default function Process({
  title,
  subTitle,
  btnText,
  backgroundColor,
  textColor,
}: {
  title: string;
  subTitle: string;
  btnText: string;
  backgroundColor: string;
  textColor: string;
}) {
  const router = useRouter();
  const [processData, setProcessData] = useState<any[]>([]);

  useEffect(() => {
    fetchProcessData().then((data) => {
      setProcessData(data);
    });
  }, []);


  return (
    <div className={`bg-[${backgroundColor}] text-[${textColor}]`}>
      <div className="container mx-auto ">
        <div className="w-full h-[40px] relative">
          <div className="absolute top-0 left-0 translate-x-[-50%] border-[20px] w-0 h-0 border-t-yellow-500 border-x-transparent border-b-transparent rotate-45"></div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 items-start lg:items-center justify-between">
          <div>
            <div className="text-sm text-gray-400 font-semibold uppercase my-2">
              {subTitle}
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold lg:mt-4">
              {title}
            </div>
          </div>
          <button className="group/btn btn-primary flex items-center gap-3">
            {btnText}
            <div className="group-hover/btn:scale-125 group-hover/btn:bg-white w-2 h-2 rounded-full bg-black transition-all duration-700"></div>
          </button>
        </div>

        <div className="mt-6">
          <Swiper
            spaceBetween={50}
            direction={"horizontal"}
            breakpoints={{
              425: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 4,
              },
            }}
            style={{ marginRight: "0" }}
            className="mySwiper cursor-ew-resize relative w-full h-full"
            mousewheel={true}
            modules={[Mousewheel, Pagination]}
            pagination={{
              type: "progressbar",
            }}
            speed={600}
          >
            {" "}
            {processData.map((item, index) => {
              return (
                <SwiperSlide key={index} className="absolute top-0 bottom-0 left-0 right-0 w-full">
                  <div>
                    <div className="my-8 text-3xl font-semibold h-[72px] overflow-hidden text-ellipsis ">
                      {item.title}
                    </div>
                    <div className="py-8 text-lg">
                      {item.description}
                    </div>
                    <button
                      onClick={() => router.push("/about-us")}
                      className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold"
                    >
                      read more
                      <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-125 duration-500"></div>
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
