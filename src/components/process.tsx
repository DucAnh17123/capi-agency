"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper stylesimport 'swiper/css/scrollbar';
import 'swiper/css/scrollbar';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Scrollbar, Navigation } from "swiper/modules";
import SwiperCore from 'swiper';

SwiperCore.use([Navigation]);


export default function Process() {
  return (
    <div className="my-20 container mx-auto ">
      <div className="w-full h-[40px] relative">
        <div className="absolute top-0 left-0 translate-x-[-50%] border-[20px] w-0 h-0 border-t-yellow-500 border-x-transparent border-b-transparent rotate-45"></div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-400 uppercase my-2">
            (TỐC ĐỘ VÀ CHẤT LƯỢNG VƯỢT TRỘI)
          </div>
          <div className="text-5xl font-semibold uppercase mt-4">
            QUY TRÌNH TRIỂN KHAI
          </div>
        </div>
        <button className="group/btn mt-10 border-[1px] border-black rounded-full text-sm font-semibold py-3 px-4 uppercase flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-500">
          tất cả quy trình
          <div className="group-hover/btn:scale-125 group-hover/btn:bg-white w-2 h-2 rounded-full bg-black transition-all duration-700"></div>
        </button>
      </div>

      <div className="mt-6">
        <Swiper
          slidesPerView={3}
          style={{ marginRight: "0" }}
          className="mySwiper"
        //   modules={[Scrollbar]}
        //   scrollbar={true}
        //   onScroll={(swiper) => {
        //     if (swiper.isHorizontal()) {
        //       if (swiper.getTranslate() > 0) {
        //         swiper.slideTo(0);
        //       } else if (swiper.getTranslate() < swiper.maxTranslate()) {
        //         swiper.slideTo(swiper.slides.length - 1);
        //       }
        //     }
        //   }}
        >
          <SwiperSlide>
            <div>
              <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                Access to latest technology
              </div>
              <div className="pr-[6rem] py-8 text-lg">
                Digital agencies consist of skilled professionals with
                experience in various digital disciplines, including
              </div>
              <button className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold">
                read more
                <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-125 duration-500"></div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                Access to latest technology
              </div>
              <div className="pr-[6rem] py-8 text-lg">
                Digital agencies consist of skilled professionals with
                experience in various digital disciplines, including
              </div>
              <button className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold">
                read more
                <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-125 duration-500"></div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                Access to latest technology
              </div>
              <div className="pr-[6rem] py-8 text-lg">
                Digital agencies consist of skilled professionals with
                experience in various digital disciplines, including
              </div>
              <button className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold">
                read more
                <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-125 duration-500"></div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                Access to latest technology
              </div>
              <div className="pr-[6rem] py-8 text-lg">
                Digital agencies consist of skilled professionals with
                experience in various digital disciplines, including
              </div>
              <button className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold">
                read more
                <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-125 duration-500"></div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                Access to latest technology
              </div>
              <div className="pr-[6rem] py-8 text-lg">
                Digital agencies consist of skilled professionals with
                experience in various digital disciplines, including
              </div>
              <button className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold">
                read more
                <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-125 duration-500"></div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                Access to latest technology
              </div>
              <div className="pr-[6rem] py-8 text-lg">
                Digital agencies consist of skilled professionals with
                experience in various digital disciplines, including
              </div>
              <button className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold">
                read more
                <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-125 duration-500"></div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                Access to latest technology
              </div>
              <div className="pr-[6rem] py-8 text-lg">
                Digital agencies consist of skilled professionals with
                experience in various digital disciplines, including
              </div>
              <button className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold">
                read more
                <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-125 duration-500"></div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                Access to latest technology
              </div>
              <div className="pr-[6rem] py-8 text-lg">
                Digital agencies consist of skilled professionals with
                experience in various digital disciplines, including
              </div>
              <button className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold">
                read more
                <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-125 duration-500"></div>
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                Access to latest technology
              </div>
              <div className="pr-[6rem] py-8 text-lg">
                Digital agencies consist of skilled professionals with
                experience in various digital disciplines, including
              </div>
              <button className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold">
                read more
                <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-125 duration-500"></div>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>

        
      </div>
    </div>
  );
}
