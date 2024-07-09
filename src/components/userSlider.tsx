"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Mousewheel } from "swiper/modules";

export default function UserSlider() {
  return (
    <div className="relative w-full pt-[35%] h-auto bg-[url('/assets/images/general/banner-home-3.jpg')] bg-no-repeat bg-center bg-cover mb-20">
      <div className="absolute top-0 left-0 right-0 bottom-0">
        <div className="container mx-auto mt-[7rem]">
          <div className="text-gray-500 uppercase px-16 mb-4">
            (What people say)
          </div>

          <div className="grid grid-cols-3">
            <div className="col-span-2 h-full relative">
              <Swiper
                slidesPerView="auto"
                direction={"vertical"}
                loop={true}
                className="mySwiper relative w-full h-[400px]"
                modules={[Navigation, Mousewheel]}
                mousewheel={true}
                speed={600}
                // navigation={{
                //   nextEl: ".swiper-button-next",
                //   prevEl: ".swiper-button-prev",
                // }}
              >
                <SwiperSlide className="absolute top-0 bottom-[50%] left-0 right-0 w-full">
                  <div>
                    <div className="flex gap-8 text-7xl font-semibold">
                      <div className="text-yellow-500">&quot;</div>
                      <div className="text-white">
                        I couldn&apos;t be happier with the result.
                      </div>
                    </div>

                    <div className="flex gap-6 items-center mt-10 ml-16">
                      <div className="relative">
                        <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
                          <Image
                            src="/assets/images/general/user-avatar.jpg"
                            alt=""
                            width={300}
                            height={200}
                          ></Image>
                        </div>
                        <div className="absolute top-0 left-1/2 w-0 h-0 translate-y-[-130%] translate-x-[-50%] border-[12px] border-b-yellow-500 border-t-transparent border-x-transparent"></div>
                      </div>
                      <div className="text-white space-y-3">
                        <div className="text-xl font-semibold">
                          Christina Grant
                        </div>
                        <div className="uppercase font-medium w-fit text-xs py-1 px-2 rounded-full border-[1px] border-white">
                          Ceo of teckgear
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="absolute top-0 bottom-[50%] left-0 right-0 w-full">
                  <div>
                    <div className="flex gap-8 text-7xl font-semibold">
                      <div className="text-yellow-500">&quot;</div>
                      <div className="text-white">
                        I couldn&apos;t be happier with the result.
                      </div>
                    </div>

                    <div className="flex gap-6 items-center mt-10 ml-16">
                      <div className="relative">
                        <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
                          <Image
                            src="/assets/images/general/user-avatar.jpg"
                            alt=""
                            width={300}
                            height={200}
                          ></Image>
                        </div>
                        <div className="absolute top-0 left-1/2 w-0 h-0 translate-y-[-130%] translate-x-[-50%] border-[12px] border-b-yellow-500 border-t-transparent border-x-transparent"></div>
                      </div>
                      <div className="text-white space-y-3">
                        <div className="text-xl font-semibold">
                          Christina Grant
                        </div>
                        <div className="uppercase font-medium w-fit text-xs py-1 px-2 rounded-full border-[1px] border-white">
                          Ceo of teckgear
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="absolute top-0 bottom-[50%] left-0 right-0 w-full">
                  <div>
                    <div className="flex gap-8 text-7xl font-semibold">
                      <div className="text-yellow-500">&quot;</div>
                      <div className="text-white">
                        I couldn&apos;t be happier with the result.
                      </div>
                    </div>

                    <div className="flex gap-6 items-center mt-10 ml-16">
                      <div className="relative">
                        <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
                          <Image
                            src="/assets/images/general/user-avatar.jpg"
                            alt=""
                            width={300}
                            height={200}
                          ></Image>
                        </div>
                        <div className="absolute top-0 left-1/2 w-0 h-0 translate-y-[-130%] translate-x-[-50%] border-[12px] border-b-yellow-500 border-t-transparent border-x-transparent"></div>
                      </div>
                      <div className="text-white space-y-3">
                        <div className="text-xl font-semibold">
                          Christina Grant
                        </div>
                        <div className="uppercase font-medium w-fit text-xs py-1 px-2 rounded-full border-[1px] border-white">
                          Ceo of teckgear
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="absolute top-0 bottom-[50%] left-0 right-0 w-full">
                  <div>
                    <div className="flex gap-8 text-7xl font-semibold">
                      <div className="text-yellow-500">&quot;</div>
                      <div className="text-white">
                        I couldn&apos;t be happier with the result.
                      </div>
                    </div>

                    <div className="flex gap-6 items-center mt-10 ml-16">
                      <div className="relative">
                        <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
                          <Image
                            src="/assets/images/general/user-avatar.jpg"
                            alt=""
                            width={300}
                            height={200}
                          ></Image>
                        </div>
                        <div className="absolute top-0 left-1/2 w-0 h-0 translate-y-[-130%] translate-x-[-50%] border-[12px] border-b-yellow-500 border-t-transparent border-x-transparent"></div>
                      </div>
                      <div className="text-white space-y-3">
                        <div className="text-xl font-semibold">
                          Christina Grant
                        </div>
                        <div className="uppercase font-medium w-fit text-xs py-1 px-2 rounded-full border-[1px] border-white">
                          Ceo of teckgear
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="absolute top-0 bottom-[50%] left-0 right-0 w-full">
                  <div>
                    <div className="flex gap-8 text-7xl font-semibold">
                      <div className="text-yellow-500">&quot;</div>
                      <div className="text-white">
                        I couldn&apos;t be happier with the result.
                      </div>
                    </div>

                    <div className="flex gap-6 items-center mt-10 ml-16">
                      <div className="relative">
                        <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
                          <Image
                            src="/assets/images/general/user-avatar.jpg"
                            alt=""
                            width={300}
                            height={200}
                          ></Image>
                        </div>
                        <div className="absolute top-0 left-1/2 w-0 h-0 translate-y-[-130%] translate-x-[-50%] border-[12px] border-b-yellow-500 border-t-transparent border-x-transparent"></div>
                      </div>
                      <div className="text-white space-y-3">
                        <div className="text-xl font-semibold">
                          Christina Grant
                        </div>
                        <div className="uppercase font-medium w-fit text-xs py-1 px-2 rounded-full border-[1px] border-white">
                          Ceo of teckgear
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="absolute top-0 bottom-[50%] left-0 right-0 w-full">
                  <div>
                    <div className="flex gap-8 text-7xl font-semibold">
                      <div className="text-yellow-500">&quot;</div>
                      <div className="text-white">
                        I couldn&apos;t be happier with the result.
                      </div>
                    </div>

                    <div className="flex gap-6 items-center mt-10 ml-16">
                      <div className="relative">
                        <div className="w-[100px] h-[100px] overflow-hidden rounded-full">
                          <Image
                            src="/assets/images/general/user-avatar.jpg"
                            alt=""
                            width={300}
                            height={200}
                          ></Image>
                        </div>
                        <div className="absolute top-0 left-1/2 w-0 h-0 translate-y-[-130%] translate-x-[-50%] border-[12px] border-b-yellow-500 border-t-transparent border-x-transparent"></div>
                      </div>
                      <div className="text-white space-y-3">
                        <div className="text-xl font-semibold">
                          Christina Grant
                        </div>
                        <div className="uppercase font-medium w-fit text-xs py-1 px-2 rounded-full border-[1px] border-white">
                          Ceo of teckgear
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* <div className="absolute top-0 left-0 rotate-90 w-[100px] h-[100px]">
                  <div className="relative w-full h-full">
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                  </div>
                </div> */}
              </Swiper>
            </div>

            <div className="col-span-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
