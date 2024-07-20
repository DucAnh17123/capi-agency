import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper stylesimport 'swiper/css/scrollbar';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function Footer() {
  return (
    <footer className="relative w-full min-h-[500px] bg-black overflow-hidden select-none">
      <div className="absolute top-0 bottom-[-20%] left-[0] z-10 animate-fake">
        <div className="text-white text-[35rem] font-bold text-nowrap leading-[40rem] inline-block ">
        capi agency
        </div>
      </div>


      {/* <div className="absolute top-0 bottom-0 left-0 right-0 z-10">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper relative h-full w-full"
          speed={10000}
          loop={true}
        >
          <SwiperSlide className="absolute top-0 bottom-[-20%] left-0 right-0 w-full">
            <div className="text-white text-[35rem] font-bold text-nowrap leading-[40rem] inline-block ">
              capi agency
            </div>
          </SwiperSlide>
          <SwiperSlide className="absolute top-0 bottom-[-20%] left-0 right-0 w-full">
            <div className="text-white text-[35rem] font-bold text-nowrap leading-[40rem] inline-block ">
              capi agency
            </div>
          </SwiperSlide>
        </Swiper>
         
      </div> */}
     
      
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/85 z-20">
        <div className="container mx-auto py-20">
          <div className="flex items-center gap-3">
            <div>
              <Image
                src={"/assets/images/general/capi-logo.svg"}
                className="scale-75"
                alt="image"
                width={300}
                height={200}
                layout="responsive"
              ></Image>
            </div>
            <div className="text-gray-400 text-sm font-semibold uppercase">
              WE PRIORITIZE COLLABORATION <br />
              WITH OUR CLIENTS
            </div>
          </div>

          <div className="text-[7.5rem] uppercase font-semibold text-white">
            get in touch <span className="text-yellow-500">@</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-24 text-[#7b7b7b] text-3xl font-semibold">
              <Link
                href=""
                className="hover:text-[#e44f39] transition-colors duration-300"
              >
                agency@capi.design
              </Link>
              <Link
                href=""
                className="hover:text-[#e44f39] transition-colors duration-300"
              >
                +84 392 293 045
              </Link>
            </div>

            <div className="flex items-end gap-2">
              <div className="btn-secondary">behance</div>
              <div className="btn-secondary">dribble</div>
              <div className="btn-secondary">facebook</div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-gray-700">
          <div className="container mx-auto py-6">
            <div className="text-sm text-[#7b7b7b]">
              Copyright © 2024 Capi Agency. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
