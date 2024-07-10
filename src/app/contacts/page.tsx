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
      <PageTitle title="contacts" />

      <div className="container mx-auto flex justify-center">
        <div className="basis-9/12">
          <div className="text-sm text-gray-400 font-semibold uppercase my-2">
            (our contacts)
          </div>

          <div className="flex items-start gap-20 mt-4">
            <div className="text-6xl font-bold">Get in Touch with Us</div>

            <div className="grid grid-cols-4 gap-7 text-lg font-semibold">
              <div className="col-span-2 text-end text-gray-400">Location</div>
              <div className="col-span-2">
                35 To Vinh Dien str, Thanh Xuan, Hanoi, Vietnam
              </div>
              <div className="col-span-2 text-end text-gray-400">
                Give us a call
              </div>
              <div className="col-span-2">+84 392 293 045 </div>
              <div className="col-span-2 text-end text-gray-400">
                Working hours
              </div>
              <div className="col-span-2">mn – fr: 9 am – 6 pm</div>
              <div className="col-span-2"></div>
              <div className="col-span-2 flex gap-1">
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

      <div className="flex justify-center items-center py-20">
        <Link href="">
          <div className="relative" onMouseMove={(e) => cursorHandle(e)}>
            <div
              
              className="text-[7rem] leading-[7.5rem] text-gray-400 font-semibold uppercase transition-colors duration-500 overflow-hidden"
            >
              capiagency
            </div>
            <div className="fixed w-[100px] h-[100px] rounded-full bg-yellow-500 pointer-events-none translate-x-[-50%] translate-y-[-50%]"
            style={{top: cursorPosition.y, left: cursorPosition.x}}>

            </div>
          </div>
        </Link>
      </div>

      <div className="h-[570px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.815298713598!2d105.81853457596922!3d21.000039688763025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8596e4358b%3A0x52f9cd6571043f34!2zMzUgUC4gVMO0IFbEqW5oIERp4buHbiwgS2jGsMahbmcgVHJ1bmcsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1719992323199!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: 10 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <div className="flex justify-center my-[8rem]">
        <div className="basis-5/12">
          <div className="text-center text-gray-800 text-7xl font-bold tracking-tighter">
            Lets Bring Your Vision Into Reality
          </div>

          <div className="text-sm text-gray-600 text-center mt-14 mb-10">
            Your email address will not be published. Required fields are marked
            *
          </div>
          <form action="" className="space-y-6">
            <div className="flex gap-8">
              <div className="basis-1/2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pr-4 py-2 border-b-[1px] border-gray-700 outline-none font-medium placeholder:text-gray-600 placeholder:font-medium focus:placeholder:text-transparent"
                />
              </div>
              <div className="basis-1/2">
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
