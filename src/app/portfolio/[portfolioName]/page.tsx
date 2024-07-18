"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faXmark,
  faCropSimple,
  faMagnifyingGlassPlus,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faFacebookF,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import PageTitle from "@/components/pageTitle";
import ProductCard from "@/components/productCard";
import Comments from "@/components/comments";

export default function PortfolioDetail() {
  const router = useRouter();
  const [isZoom, setIsZoom] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const toggleFullScreen = () => {
    const element = document.getElementsByClassName("slideImage");
    console.log("🚀 ~ toggleFullScreen ~ element:", element);

    const isFullScreen = document.fullscreenElement;
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      // element.requestFullscreen();
    }
  };

  const toggleZoomImage = () => {
    // const elements = document.getElementsByClassName("slideImage") ;

    // setIsZoom(!isZoom);
    // if (isZoom) {
    //   Array.from(elements).forEach(element => {
    //     element.style.transform = 'scale(1.5)';
    //     element.style.transition = 'transform 0.3s ease';
    //   });
    // }
  };

  return (
    <div>
      <PageTitle title="Portfolio" subTitle="PYLON LIFE" />

      <div className="container mx-auto space-y-20 my-24">
        {/* Begin: info Project*/}
        <div className="flex w-full justify-center">
          <div className="basis-full xl:basis-10/12 2xl:basis-9/12 space-y-10">
            <div className="text-4xl xl:text-6xl font-bold tracking-tighter">
              Pylon Life
            </div>
            <div className="grid gird-cols-1 md:grid-cols-2 gap-10">
              <div className="col-span-1 xl:pr-28">
                <div className="text-gray-700 font-medium text-lg">
                  Company branding goes beyond just a logo; it encompasses the
                  values, personality, and promise that a business conveys to
                  its customers.
                </div>
              </div>

              <div className="col-span-1 grid grid-cols-2 gap-y-6">
                <div className="text-sm font-semibold space-y-2">
                  <div className="text-red-500 uppercase">category:</div>
                  <div className="text-gray-700">Website</div>
                </div>

                <div className="text-sm font-semibold space-y-2">
                  <div className="text-red-500 uppercase">services:</div>
                  <div className="text-gray-700">Website, Web App</div>
                </div>

                <div className="text-sm font-semibold space-y-2">
                  <div className="text-red-500 uppercase">date:</div>
                  <div className="text-gray-700">May 20, 2023</div>
                </div>

                <div className="text-sm font-semibold space-y-2">
                  <div className="text-red-500 uppercase">Team:</div>
                  <div className="text-gray-700">Designer - Kien Nguyen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End: info Project*/}

        {/* Begin: banner image */}
        <div className="bg-[url('/assets/images/general/Pylon-banner.png')] bg-center bg-cover bg-no-repeat w-full pt-[40%]"></div>
        {/* End: banner image */}

        {/* Begin: Description & Defining */}
        <div className="flex w-full justify-center">
          <div className="basis-full xl:basis-10/12 2xl:basis-9/12 grid grid-cols-12 gap-8">
            <div className="col-span-full lg:col-span-4">
              <div className="text-[1.7rem] font-bold tracking-tight">
                Description & Defining
              </div>
            </div>
            <div className="col-span-full lg:col-span-8">
              <div className="text-sm leading-7 text-gray-600 text-justify space-y-3">
                <div className="first-letter:text-black first-letter:text-4xl first-letter:font-semibold first-letter:mr-3 first-letter:float-left">
                  Before embarking on any branding efforts, it’s essential to
                  define your brand’s identity. This involves clarifying your
                  mission, vision, and core values that set your business apart
                  from competitors. Understanding what your brand stands for
                  lays the foundation for all future branding endeavors.
                </div>
                <div>
                  A well-designed logo is the face of your brand and serves as a
                  visual representation of your company. It should be simple,
                  memorable, and easily recognizable. A carefully crafted logo
                  can leave a lasting impression on customers and{" "}
                  <span className="text-yellow-500 italic underline">
                    evoke emotions that resonate
                  </span>{" "}
                  with your brand. Every successful brand has a compelling story
                  behind it. Your brand story should narrate the journey of your
                  business, its origins, challenges, and triumphs.{" "}
                  <span className="font-medium">
                    A relatable and authentic brand story creates an emotional
                    connection with customers, fostering brand loyalty.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End: Description & Defining */}

        {/* Begin: image slider */}
        <div className="">
          <Swiper
            direction={"horizontal"}
            breakpoints={{
              425: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1440: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            className="mySwiper"
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            speed={1000}
          >
            <SwiperSlide>
              <label htmlFor="imageModal" className="cursor-pointer">
                <div className="bg-[url('/assets/images/general/Pylon-banner.png')] bg-center bg-cover bg-no-repeat w-full pt-[70%]"></div>
              </label>
            </SwiperSlide>
            <SwiperSlide>
              <label htmlFor="imageModal" className="cursor-pointer">
                <div className="bg-[url('/assets/images/general/Pylon-banner.png')] bg-center bg-cover bg-no-repeat w-full pt-[70%]"></div>
              </label>
            </SwiperSlide>
            <SwiperSlide>
              <label htmlFor="imageModal" className="cursor-pointer">
                <div className="bg-[url('/assets/images/general/Pylon-banner.png')] bg-center bg-cover bg-no-repeat w-full pt-[70%]"></div>
              </label>
            </SwiperSlide>
            <SwiperSlide>
              <label htmlFor="imageModal" className="cursor-pointer">
                <div className="bg-[url('/assets/images/general/Pylon-banner.png')] bg-center bg-cover bg-no-repeat w-full pt-[70%]"></div>
              </label>
            </SwiperSlide>
          </Swiper>

          <input
            type="checkbox"
            id="imageModal"
            className="peer fixed appearance-none opacity-0"
          />
          <label
            htmlFor="imageModal"
            className="fixed z-[60] inset-0 pointer-events-none invisible opacity-0 bg-black/75 peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 transition-all duration-500"
          >
            <div className="relative flex justify-center items-center h-full w-full">
              <label
                htmlFor=""
                className="absolute top-0 right-0 w-[200px] h-[100px] justify-between py-6 px-6 flex text-white"
              >
                <FontAwesomeIcon
                  onClick={toggleFullScreen}
                  className="text-lg p-1 text-gray-200 hover:text-white cursor-pointer"
                  icon={faCropSimple}
                />
                <FontAwesomeIcon
                  onClick={toggleZoomImage}
                  className="text-lg p-1 text-gray-200 hover:text-white cursor-pointer"
                  icon={faMagnifyingGlassPlus}
                />
                <FontAwesomeIcon
                  className="text-lg p-1 text-gray-200 hover:text-white cursor-pointer"
                  icon={faShare}
                />
                <label htmlFor="imageModal" className="block h-fit">
                  <FontAwesomeIcon
                    className="text-xl p-1 text-gray-200 hover:text-white cursor-pointer"
                    icon={faXmark}
                  />
                </label>
              </label>

              <div className="w-[100%] h-[350px] flex items-center justify-center">
                <Swiper
                  direction={"horizontal"}
                  slidesPerView={1}
                  spaceBetween={200}
                  speed={300}
                  breakpoints={{
                    425: {
                      spaceBetween: 200,
                    },
                    768: {
                      spaceBetween: 200,
                    },
                    1024: {
                      spaceBetween: 200,
                    },
                    1440: {
                      spaceBetween: 300,
                    },
                  }}
                  className="mySwiper swiper-project w-full h-full cursor-grab"
                  loop={true}
                  navigation={true}
                  modules={[Navigation]}
                >
                  <SwiperSlide className="relative h-full w-full">
                    <label
                      htmlFor=""
                      className="slideImage absolute top-1/2 left-1/2 w-[500px] h-fit translate-x-[-50%] translate-y-[-50%] cursor-grab"
                    >
                      <div className="bg-[url('/assets/images/general/Pylon-banner.png')] bg-center bg-cover bg-no-repeat w-[500px] pt-[70%]"></div>
                    </label>
                  </SwiperSlide>
                  <SwiperSlide className="relative h-full w-full">
                    <label
                      htmlFor=""
                      className="slideImage absolute top-1/2 left-1/2 w-[500px] h-fit translate-x-[-50%] translate-y-[-50%] cursor-grab"
                    >
                      <div className="bg-[url('/assets/images/general/Pylon-banner.png')] bg-center bg-cover bg-no-repeat w-[500px] pt-[70%]"></div>
                    </label>
                  </SwiperSlide>
                  <SwiperSlide className="relative h-full w-full">
                    <label
                      htmlFor=""
                      className="slideImage absolute top-1/2 left-1/2 w-[500px] h-fit translate-x-[-50%] translate-y-[-50%] cursor-grab"
                    >
                      <div className="bg-[url('/assets/images/general/Pylon-banner.png')] bg-center bg-cover bg-no-repeat w-[500px] pt-[70%]"></div>
                    </label>
                  </SwiperSlide>
                  <SwiperSlide className="relative h-full w-full">
                    <label
                      htmlFor=""
                      className="slideImage absolute top-1/2 left-1/2 w-[500px] h-fit translate-x-[-50%] translate-y-[-50%] cursor-grab"
                    >
                      <div className="bg-[url('/assets/images/general/Pylon-banner.png')] bg-center bg-cover bg-no-repeat w-[500px] pt-[70%]"></div>
                    </label>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </label>
        </div>
        {/* End: image slider */}

        {/* Begin: Challenge & Solution */}
        <div className="flex w-full justify-center">
          <div className="basis-full xl:basis-10/12 2xl:basis-9/12 grid grid-cols-12 gap-8">
            <div className="col-span-full lg:col-span-4">
              <div className="text-[1.7rem] font-bold tracking-tight">
                Challenge & Solution
              </div>
            </div>
            <div className="col-span-full lg:col-span-8">
              <div className="text-sm leading-7 text-gray-600 text-justify space-y-3">
                <div>
                  Consistency is key to successful branding. Ensure that your
                  branding elements, such as colors, typography, and tone of
                  voice, remain consistent across all platforms, from your
                  website to social media and marketing materials. This
                  consistency reinforces your brand’s identity and fosters brand
                  recognition.
                </div>
                <div className="relative pl-14 space-y-3 text-start py-3">
                  <div className="absolute top-[14%] left-[0] text-8xl font-semibold text-yellow-500">
                    &quot;
                  </div>
                  <div className="text-[2.5rem] font-semibold leading-[3rem] tracking-tighter">
                    Success is not the key to happiness.
                  </div>
                  <div className="text-xl text-gray-500">Christina Grant</div>
                </div>
                <div>
                  Incorporating captivating visuals and imagery in your branding
                  enhances the overall appeal of your brand. High-quality
                  images, graphics, and videos help tell your brand story
                  effectively and leave a lasting impression on your target
                  audience.
                </div>
                <div className="font-medium">
                  Today’s consumers are increasingly drawn to brands that
                  exhibit social responsibility and contribute positively to
                  society.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End: Challenge & Solution */}

        <div className="flex w-full justify-center">
          <div className="basis-full xl:basis-10/12 2xl:basis-9/12">
            {/* Begin: tag */}
            <div className="space-y-9">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="flex justify-center md:justify-between gap-2">
                  <Link href="" className="block">
                    <div className="py-1 px-3 border-[1px] border-black rounded-full text-black text-xs font-semibold hover:text-white hover:bg-black transition-colors duration-300">
                      branding
                    </div>
                  </Link>
                  <Link href="" className="block">
                    <div className="py-1 px-3 border-[1px] border-black rounded-full text-black text-xs font-semibold hover:text-white hover:bg-black transition-colors duration-300">
                      development
                    </div>
                  </Link>
                  <Link href="" className="block">
                    <div className="py-1 px-3 border-[1px] border-black rounded-full text-black text-xs font-semibold hover:text-white hover:bg-black transition-colors duration-300">
                      digital
                    </div>
                  </Link>
                </div>

                <div className="flex justify-center items-center gap-5">
                  <Link href="">
                    <div>
                      <FontAwesomeIcon
                        className="text-sm text-gray-400 hover:text-gray-600"
                        icon={faXTwitter}
                      />
                    </div>
                  </Link>
                  <Link href="">
                    <div>
                      <FontAwesomeIcon
                        className="text-sm text-gray-400 hover:text-gray-600 "
                        icon={faFacebookF}
                      />
                    </div>
                  </Link>
                  <Link href="">
                    <div>
                      <FontAwesomeIcon
                        className="text-sm text-gray-400 hover:text-gray-600 "
                        icon={faPinterestP}
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-700"></div>

              <div className="flex justify-between">
                <div className="group space-y-3 cursor-pointer">
                  <button
                    onClick={handleBack}
                    className="py-1 px-3 border-[1px] border-black group-hover:border-yellow-500 rounded-full text-black text-xs uppercase font-semibold transition-colors duration-300"
                  >
                    <div className="relative group-hover:pl-4 transition-all duration-500 overflow-hidden group-hover:text-yellow-500">
                      prev
                      <FontAwesomeIcon
                        className="absolute top-[50%] translate-y-[-50%] left-0 w-auto translate-x-[-14px] group-hover:translate-x-0 group-hover:text-yellow-500 origin-left transition-all duration-500 text-md text-black"
                        icon={faArrowLeft}
                      />
                    </div>
                  </button>

                  <div className="hidden lg:block text-lg font-semibold group-hover:underline">
                    Navigating the Digital Landscape
                  </div>
                </div>

                <div className="group space-y-3 cursor-pointer text-end">
                  <button
                    onClick={handleBack}
                    className="py-1 px-3 border-[1px] border-black group-hover:border-yellow-500 rounded-full text-black text-xs uppercase font-semibold transition-colors duration-300"
                  >
                    <div className="relative group-hover:pr-4 transition-all duration-500 overflow-hidden group-hover:text-yellow-500">
                      next
                      <FontAwesomeIcon
                        className="absolute top-[50%] translate-y-[-50%] right-0 w-auto translate-x-[14px] group-hover:translate-x-0 group-hover:text-yellow-500 origin-left transition-all duration-500 text-md text-black"
                        icon={faArrowRight}
                      />
                    </div>
                  </button>

                  <div className="hidden lg:block text-lg font-semibold group-hover:underline">
                    Exploring UI/UX Trends 2024
                  </div>
                </div>
              </div>
            </div>
            {/* End: tag */}
          </div>
        </div>

        {/* Begin: related projects */}
        <div className="flex w-full justify-center">
          <div className="basis-full xl:basis-10/12 2xl:basis-9/12">
            <div className="text-3xl font-bold mb-8">Related Projects</div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-[1.5rem] lg:gap-[2rem] xl:gap-8">
              <ProductCard isFixHeight={false} />
              <ProductCard isFixHeight={false} />
              <ProductCard isFixHeight={false} />
            </div>
          </div>
        </div>
        {/* end: related projects */}

        {/* Begin: comments */}
        <div className="flex w-full justify-center">
          <div className="basis-full xl:basis-10/12 2xl:basis-9/12">
            <Comments />
          </div>
        </div>
        {/* End: comments */}
      </div>
    </div>
  );
}
