import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import PageTitle from "@/components/pageTitle";
import Process from "@/components/process";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Mission - Capi Agency",
  description: "Welcome to Capi Agency",
};

export default function OurMission() {
  return (
    <div>
      <PageTitle title="mission" />

      <div className="container mx-auto">
        <div className="relative pt-[40%] bg-[url('/assets/images/general/mission-bg.jpg')] w-full h-auto bg-center bg-cover bg-no-repeat">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto my-20">
        <div className="text-sm text-gray-400 font-semibold uppercase my-10">
          (REDEFINING DIGITAL CREATIVITY)
        </div>

        <div className="relative group/mission w-full pt-3 px-10 border-t-[1px] border-black bg-white">
          <input
            id="mission-1"
            type="checkbox"
            className="absolute peer opacity-0 left-0 right-0 top-0 h-[10.7rem] w-full z-10 cursor-pointer"
          ></input>

          <FontAwesomeIcon
            className="absolute peer-checked:rotate-45 peer-checked:text-yellow-500 transition-all duration-500 top-[20px] right-[2.5rem] text-3xl text-gray-500 group-hover/mission:text-yellow-500 -rotate-45"
            icon={faArrowRight}
          />

          <div className="text-9xl font-semibold uppercase pb-4">Why us</div>
          <label
            htmlFor="mission-1"
            className="block max-h-0 peer-checked:max-h-[700px] duration-1000 origin-top bg-white overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-10 py-6">
              <div className="text-3xl font-medium text-gray-700">
                Digital agency bring specialized knowledge and experience
              </div>

              <div>
                <div className="text-lg text-gray-500">
                  They use analytics tools to track and measure the performance
                  of digital campaigns, gaining insights into user behavior,
                  engagement, and conversion rates.
                </div>
                <Link href="" className="block mt-6">
                  <div className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold">
                    <div>read more</div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-150 duration-500"></div>
                  </div>
                </Link>
              </div>
              <div>
                <Image
                  src="/assets/images/general/mission-image.jpg"
                  alt=""
                  width={490}
                  height={340}
                ></Image>
              </div>
            </div>
          </label>
        </div>

       

        <div className="relative group/mission w-full pt-3 px-10 border-t-[1px] border-black bg-white">
          <input
            id="mission-1"
            type="checkbox"
            className="absolute peer opacity-0 left-0 right-0 top-0 h-[10.7rem] w-full z-10 cursor-pointer"
          ></input>

          <FontAwesomeIcon
            className="absolute peer-checked:rotate-45 peer-checked:text-yellow-500 transition-all duration-500 top-[20px] right-[2.5rem] text-3xl text-gray-500 group-hover/mission:text-yellow-500 -rotate-45"
            icon={faArrowRight}
          />

          <div className="text-9xl font-semibold uppercase pb-4">benefits</div>
          <label
            htmlFor="mission-1"
            className="block max-h-0 peer-checked:max-h-[700px] duration-1000 origin-top bg-white overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-10 py-6">
              <div className="text-3xl font-medium text-gray-700">
                Digital agency bring specialized knowledge and experience
              </div>

              <div>
                <div className="text-lg text-gray-500">
                  They use analytics tools to track and measure the performance
                  of digital campaigns, gaining insights into user behavior,
                  engagement, and conversion rates.
                </div>
                <Link href="" className="block mt-6">
                  <div className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold">
                    <div>read more</div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-150 duration-500"></div>
                  </div>
                </Link>
              </div>
              <div>
                <Image
                  src="/assets/images/general/mission-image.jpg"
                  alt=""
                  width={490}
                  height={340}
                ></Image>
              </div>
            </div>
          </label>
        </div>

        <div className="relative group/mission w-full pt-3 px-10 border-t-[1px] border-black bg-white">
          <input
            id="mission-1"
            type="checkbox"
            className="absolute peer opacity-0 left-0 right-0 top-0 h-[10.7rem] w-full z-10 cursor-pointer"
          ></input>

          <FontAwesomeIcon
            className="absolute peer-checked:rotate-45 peer-checked:text-yellow-500 transition-all duration-500 top-[20px] right-[2.5rem] text-3xl text-gray-500 group-hover/mission:text-yellow-500 -rotate-45"
            icon={faArrowRight}
          />

          <div className="text-9xl font-semibold uppercase pb-4">services</div>
          <label
            htmlFor="mission-1"
            className="block max-h-0 peer-checked:max-h-[700px] duration-1000 origin-top bg-white overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-10 py-6">
              <div className="text-3xl font-medium text-gray-700">
                Digital agency bring specialized knowledge and experience
              </div>

              <div>
                <div className="text-lg text-gray-500">
                  They use analytics tools to track and measure the performance
                  of digital campaigns, gaining insights into user behavior,
                  engagement, and conversion rates.
                </div>
                <Link href="" className="block mt-6">
                  <div className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold">
                    <div>read more</div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-150 duration-500"></div>
                  </div>
                </Link>
              </div>
              <div>
                <Image
                  src="/assets/images/general/mission-image.jpg"
                  alt=""
                  width={490}
                  height={340}
                ></Image>
              </div>
            </div>
          </label>
        </div>

        <div className="relative group/mission w-full pt-3 px-10 border-t-[1px] border-black bg-white">
          <input
            id="mission-1"
            type="checkbox"
            className="absolute peer opacity-0 left-0 right-0 top-0 h-[10.7rem] w-full z-10 cursor-pointer"
          ></input>

          <FontAwesomeIcon
            className="absolute peer-checked:rotate-45 peer-checked:text-yellow-500 transition-all duration-500 top-[20px] right-[2.5rem] text-3xl text-gray-500 group-hover/mission:text-yellow-500 -rotate-45"
            icon={faArrowRight}
          />

          <div className="text-9xl font-semibold uppercase pb-4">mission</div>
          <label
            htmlFor="mission-1"
            className="block max-h-0 peer-checked:max-h-[700px] duration-1000 origin-top bg-white overflow-hidden"
          >
            <div className="grid grid-cols-3 gap-10 py-6">
              <div className="text-3xl font-medium text-gray-700">
                Digital agency bring specialized knowledge and experience
              </div>

              <div>
                <div className="text-lg text-gray-500">
                  They use analytics tools to track and measure the performance
                  of digital campaigns, gaining insights into user behavior,
                  engagement, and conversion rates.
                </div>
                <Link href="" className="block mt-6">
                  <div className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold">
                    <div>read more</div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-150 duration-500"></div>
                  </div>
                </Link>
              </div>
              <div>
                <Image
                  src="/assets/images/general/mission-image.jpg"
                  alt=""
                  width={490}
                  height={340}
                ></Image>
              </div>
            </div>
          </label>
        </div>
      </div>

      <Process
        title="Our Process"
        subTitle="(how it workings)"
        btnText="tất cả quy trình"
        backgroundColor="#000"
        textColor="#fff"
      />
    </div>
  );
}
