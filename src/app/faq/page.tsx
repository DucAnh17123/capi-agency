"use client";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import PageTitle from "@/components/pageTitle";

// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "FAQ - Capi Agency",
//   description: "Welcome to Capi Agency",
// };

import React, { useEffect, useState } from "react";
import { fetchFaqsData } from "@/js/function";

export default function Faq() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const faqs = await fetchFaqsData();
      setData(faqs);
    };
    fetchData();
  }, []);

  return (
    <div>
      <PageTitle title="faq" subTitle="faq" />

      <div
        className="container mt-[2rem] mx-auto bg-[url('/assets/images/general/faq-bg.jpg')] bg-cover bg-center bg-no-repeat text-8xl md:text-[11rem] lg:text-[15rem] xl:text-[20rem] 2xl:text-[26rem] leading-[12rem] md:leading-[22rem] xl:leading-[28rem] 2xl:leading-[32rem] font-bold text-center"
        style={{
          backgroundAttachment: "fixed",
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
        }}
      >
        (capi)
      </div>

      <div className="container mx-auto flex justify-center  xl:my-20">
        <div className="basis-full xl:basis-10/12 2xl:basis-9/12">
          <div className="text-sm text-gray-400 font-semibold uppercase my-2">
            (FREQUENTLY ASKED QUESTIONS)
          </div>

          <div className="grid grid-cols-12 w-full space-y-10 md:space-y-0">
            <div className="col-span-12 md:col-span-5">
              <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold xl:leading-[4.75rem]">
                Popular Questions
              </div>
              <button className="group/btnSend py-4 px-5 mt-6 bg-black font-semibold rounded-full text-white hover:text-black text-sm uppercase flex items-center gap-2 hover:bg-white border-[1px] border-black transition-colors duration-700 ease-in-out">
                get in touch
                <div className="group-hover/btnSend:scale-150 group-hover/btnSend:bg-black duration-700 w-[6px] h-[6px] bg-white rounded-full"></div>
              </button>
            </div>

            <div className="col-span-12 md:col-span-7">
              {data.map((item, index) => {
                return (
                  <div  key={index} className="relative group w-full border-t-[1px] border-gray-400">
                    <input
                      type="checkbox"
                      id={`question-${index}`}
                      className="absolute peer h-[76px] appearance-none top-0 left-0 right-0 w-full cursor-pointer z-10"
                    />
                    <FontAwesomeIcon
                      className="absolute peer-checked:rotate-[-45deg] peer-checked:text-yellow-500 transition-all duration-700 top-[28px] right-[20px] text-lg text-gray-400 group-hover:text-yellow-500 rotate-45"
                      icon={faArrowRight}
                    />
                    <div className="peer-checked:text-gray-600 text-lg md:text-xl text-gray-400 group-hover:text-gray-600 font-medium py-6 pr-10">
                      {item.question}
                    </div>
                    <label
                      htmlFor={`question-${index}`}
                      className="block max-h-0 peer-checked:max-h-[200px] origin-top duration-1000 bg-white overflow-hidden"
                    >
                      <div className="text-gray-500 text-sm leading-7 pb-4">
                        {item.answer}
                      </div>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
