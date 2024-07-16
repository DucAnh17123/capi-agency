"use client";

import Link from "next/link";
import { useState } from "react";

import PageTitle from "@/components/pageTitle";

export default function Contacts() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const cursorHandle = (event: any) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div>
      <PageTitle title="contacts" subTitle="contacts" />

      <div className="container mx-auto flex justify-center mt-[6rem]">
        <div className="basis-full xl:basis-10/12 2xl:basis-9/12">
          <div className="text-sm text-gray-400 font-semibold uppercase my-2">
            (our contacts)
          </div>

          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-20 mt-4">
            <div className="basis-6/12 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
              Get in Touch with Us
            </div>

            <div className="basis-6/12 flex flex-col gap-6 text-md lg:text-lg font-semibold">
              <div className="flex gap-2 md:gap-6  flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-5/12 text-start md:text-end text-gray-400">
                  Location
                </div>
                <div className="basis-full md:basis-7/12">
                  35 To Vinh Dien str, Thanh Xuan, Hanoi, Vietnam
                </div>
              </div>
              <div className="flex gap-2 md:gap-6 flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-5/12 text-start md:text-end text-gray-400">
                  Give us a call
                </div>
                <div className="basis-full md:basis-7/12">+84 392 293 045</div>
              </div>
              <div className="flex gap-2 md:gap-6 flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-5/12 text-start md:text-end text-gray-400">
                  Working hours
                </div>
                <div className="basis-full md:basis-7/12">mn – fr: 9 am – 6 pm</div>
              </div>
              <div className="flex gap-2 md:gap-6 flex-wrap md:flex-nowrap">
                <div className="basis-full md:basis-5/12 text-start md:text-end text-gray-400">
                </div>
                <div className="basis-full md:basis-7/12 flex gap-1">
                  <button className="uppercase w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white">
                    behance
                  </button>
                  <button className="uppercase w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white">
                    dribble
                  </button>
                  <button className="uppercase w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white">
                    facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-16 xl:py-20">
        <Link href="">
          <div className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[7rem] xl:leading-[7.5rem] text-gray-400 font-semibold hover:text-yellow-500 uppercase transition-colors duration-500 overflow-hidden">
            capi agency
          </div>
        </Link>
      </div>

      <div className="h-[300px] md:h-[400px] xl:h-[570px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.815298713598!2d105.81853457596922!3d21.000039688763025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8596e4358b%3A0x52f9cd6571043f34!2zMzUgUC4gVMO0IFbEqW5oIERp4buHbiwgS2jGsMahbmcgVHJ1bmcsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1719992323199!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: 10 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="container mx-auto flex justify-center my-16 xl:my-[8rem]">
        <div className="basis-full lg:basis-10/12 xl:basis-7/12">
          <div className="text-center text-gray-800 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter">
            Lets Bring Your Vision Into Reality
          </div>

          <div className="text-sm text-gray-600 text-center mt-7 xl:mt-14 mb-10">
            Your email address will not be published. Required fields are marked
            *
          </div>
          <form action="" className="space-y-6">
            <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-8">
              <div className="basis-full md:basis-1/2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pr-4 py-2 border-b-[1px] border-gray-700 outline-none font-medium placeholder:text-gray-600 placeholder:font-medium focus:placeholder:text-transparent"
                />
              </div>
              <div className="basis-full md:basis-1/2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pr-4 py-2 border-b-[1px] border-gray-700 outline-none font-medium placeholder:text-gray-600 placeholder:font-medium focus:placeholder:text-transparent"
                />
              </div>
            </div>
            <div className="basis-full">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full pr-4 py-2 border-b-[1px] border-gray-700 outline-none font-medium placeholder:text-gray-600 placeholder:font-medium focus:placeholder:text-transparent"
              />
            </div>
            <div className="basis-full">
              <textarea
                placeholder="Tell us about your ideas"
                className="w-full h-pull pr-4 py-2 border-b-[1px] border-gray-700 outline-none font-medium placeholder:text-gray-600 placeholder:font-medium focus:placeholder:text-transparent"
              ></textarea>
            </div>
            <div className="flex justify-center items-center">
              <button className="group/btnSend py-4 px-6 bg-black font-semibold rounded-full text-white text-xs uppercase flex items-center gap-2 hover:bg-yellow-500 transition-colors duration-700 ease-in-out">
                send
                <div className="group-hover/btnSend:scale-150 duration-700 w-[6px] h-[6px] bg-white rounded-full"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
