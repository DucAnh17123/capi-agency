"use client";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper stylesimport 'swiper/css/scrollbar';
import "swiper/css/scrollbar";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Mousewheel } from "swiper/modules";

export default function Process({
  title,
  subTitle,
  btnText,
  backgroundColor,
  textColor
}: {
  title: string;
  subTitle: string;
  btnText: string;
  backgroundColor: string;
  textColor: string;
}) {
  const router = useRouter();

  return (
    <div className={`bg-[${backgroundColor}] text-[${textColor}]`}>
      <div className="py-20 container mx-auto ">
        <div className="w-full h-[40px] relative">
          <div className="absolute top-0 left-0 translate-x-[-50%] border-[20px] w-0 h-0 border-t-yellow-500 border-x-transparent border-b-transparent rotate-45"></div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-400 font-semibold uppercase my-2">
              {subTitle}
            </div>
            <div className="text-7xl font-bold mt-4">{title}</div>
          </div>
          <button className="group/btn btn-primary flex items-center gap-3">
            {btnText}
            <div className="group-hover/btn:scale-125 group-hover/btn:bg-white w-2 h-2 rounded-full bg-black transition-all duration-700"></div>
          </button>
        </div>

        <div className="mt-6">
          <Swiper
            direction={"horizontal"}
            slidesPerView={4}
            style={{ marginRight: "0" }}
            className="mySwiper cursor-ew-resize relative w-full h-full"
            mousewheel={true}
            modules={[Mousewheel]}
            speed={600}
          >
            <SwiperSlide className="absolute top-0 bottom-0 left-0 right-0 w-full">
              <div>
                <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem] ">
                  Access to latest technology
                </div>
                <div className="pr-[6rem] py-8 text-lg">
                  Digital agencies consist of skilled professionals with
                  experience in various digital disciplines, including
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
            <SwiperSlide className="absolute top-0 bottom-0 left-0 right-0 w-full">
              <div>
                <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                  Access to latest technology
                </div>
                <div className="pr-[6rem] py-8 text-lg">
                  Digital agencies consist of skilled professionals with
                  experience in various digital disciplines, including
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
            <SwiperSlide className="absolute top-0 bottom-0 left-0 right-0 w-full">
              <div>
                <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                  Access to latest technology
                </div>
                <div className="pr-[6rem] py-8 text-lg">
                  Digital agencies consist of skilled professionals with
                  experience in various digital disciplines, including
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
            <SwiperSlide className="absolute top-0 bottom-0 left-0 right-0 w-full">
              <div>
                <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                  Access to latest technology
                </div>
                <div className="pr-[6rem] py-8 text-lg">
                  Digital agencies consist of skilled professionals with
                  experience in various digital disciplines, including
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
            <SwiperSlide className="absolute top-0 bottom-0 left-0 right-0 w-full">
              <div>
                <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                  Access to latest technology
                </div>
                <div className="pr-[6rem] py-8 text-lg">
                  Digital agencies consist of skilled professionals with
                  experience in various digital disciplines, including
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
            <SwiperSlide className="absolute top-0 bottom-0 left-0 right-0 w-full">
              <div>
                <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                  Access to latest technology
                </div>
                <div className="pr-[6rem] py-8 text-lg">
                  Digital agencies consist of skilled professionals with
                  experience in various digital disciplines, including
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
            <SwiperSlide className="absolute top-0 bottom-0 left-0 right-0 w-full">
              <div>
                <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                  Access to latest technology
                </div>
                <div className="pr-[6rem] py-8 text-lg">
                  Digital agencies consist of skilled professionals with
                  experience in various digital disciplines, including
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
            <SwiperSlide className="absolute top-0 bottom-0 left-0 right-0 w-full">
              <div>
                <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                  Access to latest technology
                </div>
                <div className="pr-[6rem] py-8 text-lg">
                  Digital agencies consist of skilled professionals with
                  experience in various digital disciplines, including
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
            <SwiperSlide className="absolute top-0 bottom-0 left-0 right-0 w-full">
              <div>
                <div className="py-8 border-b-[1px] border-gray-500 text-3xl font-semibold pr-[6rem]">
                  Access to latest technology
                </div>
                <div className="pr-[6rem] py-8 text-lg">
                  Digital agencies consist of skilled professionals with
                  experience in various digital disciplines, including
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
          </Swiper>
        </div>
      </div>
    </div>
  );
}
