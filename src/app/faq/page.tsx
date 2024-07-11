import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import PageTitle from "@/components/pageTitle";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQ - Capi Agency",
  description: "Welcome to Capi Agency",
};

export default function Faq() {
  return (
    <div>
      <PageTitle title="faq" subTitle="faq"/>

      <div
        className="container mx-auto bg-[url('/assets/images/general/faq-bg.jpg')] bg-cover bg-center bg-no-repeat text-[26rem] leading-[32rem] font-semibold text-center mt-[-6rem]"
        style={{
          backgroundAttachment: "fixed",
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
        }}
      >
        (capi)
      </div>

      <div className="container mx-auto flex justify-center my-20">
        <div className="basis-9/12">
          <div className="text-sm text-gray-400 font-semibold uppercase my-2">
            (FREQUENTLY ASKED QUESTIONS)
          </div>

          <div className="grid grid-cols-12 w-full">
            <div className="col-span-5">
              <div className="text-6xl font-bold leading-[4.75rem]">
                Popular Questions
              </div>
              <button className="group/btnSend py-4 px-5 mt-6 bg-black font-semibold rounded-full text-white hover:text-black text-sm uppercase flex items-center gap-2 hover:bg-white border-[1px] border-black transition-colors duration-700 ease-in-out">
                get in touch
                <div className="group-hover/btnSend:scale-150 group-hover/btnSend:bg-black duration-700 w-[6px] h-[6px] bg-white rounded-full"></div>
              </button>
            </div>

            <div className="col-span-7">
              <div className="relative group w-full border-t-[1px] border-gray-400">
                <input
                  type="checkbox"
                  id="question-1"
                  className="absolute peer h-[76px] appearance-none top-0 left-0 right-0 w-full cursor-pointer z-10"
                />
                <FontAwesomeIcon
                  className="absolute peer-checked:rotate-[-45deg] peer-checked:text-yellow-500 transition-all duration-700 top-[20px] right-[20px] text-lg text-gray-400 group-hover:text-yellow-500 rotate-45"
                  icon={faArrowRight}
                />
                <div className="peer-checked:text-gray-600 text-xl text-gray-400 group-hover:text-gray-600 font-medium py-6">
                  What is a digital agency?
                </div>
                <label
                  htmlFor="question-1"
                  className="block max-h-0 peer-checked:max-h-[1000px] origin-top duration-700 bg-white overflow-hidden"
                >
                  <div className="text-gray-500 text-sm leading-7 pb-4">
                    A digital agency is a company that offers a range of
                    services to help businesses establish a strong online
                    presence and achieve their digital marketing goals. These
                    services may include web design, web development, search
                    engine optimization, and more.
                  </div>
                </label>
              </div>

              <div className="relative group w-full border-t-[1px] border-gray-400">
                <input
                  type="checkbox"
                  id="question-1"
                  className="absolute peer h-[76px] appearance-none top-0 left-0 right-0 w-full cursor-pointer z-10"
                />
                <FontAwesomeIcon
                  className="absolute peer-checked:rotate-[-45deg] peer-checked:text-yellow-500 transition-all duration-700 top-[20px] right-[20px] text-lg text-gray-400 group-hover:text-yellow-500 rotate-45"
                  icon={faArrowRight}
                />
                <div className="peer-checked:text-gray-600 text-xl text-gray-400 group-hover:text-gray-600 font-medium py-6">
                  What services does a digital agency provide?
                </div>
                <label
                  htmlFor="question-1"
                  className="block max-h-0 peer-checked:max-h-[1000px] origin-top transition-all duration-700 bg-white overflow-hidden"
                >
                  <div className="text-gray-500 text-sm leading-7 pb-4">
                    A digital agency is a company that offers a range of
                    services to help businesses establish a strong online
                    presence and achieve their digital marketing goals. These
                    services may include web design, web development, search
                    engine optimization, and more.
                  </div>
                </label>
              </div>

              <div className="relative group w-full border-t-[1px] border-gray-400">
                <input
                  type="checkbox"
                  id="question-1"
                  className="absolute peer h-[76px] appearance-none top-0 left-0 right-0 w-full cursor-pointer z-10"
                />
                <FontAwesomeIcon
                  className="absolute peer-checked:rotate-[-45deg] peer-checked:text-yellow-500 transition-all duration-700 top-[20px] right-[20px] text-lg text-gray-400 group-hover:text-yellow-500 rotate-45"
                  icon={faArrowRight}
                />
                <div className="peer-checked:text-gray-600 text-xl text-gray-400 group-hover:text-gray-600 font-medium py-6">
                  Why should I hire a digital agency?
                </div>
                <label
                  htmlFor="question-1"
                  className="block max-h-0 peer-checked:max-h-[1000px] origin-top transition-all duration-700 bg-white overflow-hidden"
                >
                  <div className="text-gray-500 text-sm leading-7 pb-4">
                    A digital agency is a company that offers a range of
                    services to help businesses establish a strong online
                    presence and achieve their digital marketing goals. These
                    services may include web design, web development, search
                    engine optimization, and more.
                  </div>
                </label>
              </div>

              <div className="relative group w-full border-t-[1px] border-gray-400">
                <input
                  type="checkbox"
                  id="question-1"
                  className="absolute peer h-[76px] appearance-none top-0 left-0 right-0 w-full cursor-pointer z-10"
                />
                <FontAwesomeIcon
                  className="absolute peer-checked:rotate-[-45deg] peer-checked:text-yellow-500 transition-all duration-700 top-[20px] right-[20px] text-lg text-gray-400 group-hover:text-yellow-500 rotate-45"
                  icon={faArrowRight}
                />
                <div className="peer-checked:text-gray-600 text-xl text-gray-400 group-hover:text-gray-600 font-medium py-6">
                  How can a digital agency improve my online visibility?
                </div>
                <label
                  htmlFor="question-1"
                  className="block max-h-0 peer-checked:max-h-[1000px] origin-top transition-all duration-700 bg-white overflow-hidden"
                >
                  <div className="text-gray-500 text-sm leading-7 pb-4">
                    A digital agency is a company that offers a range of
                    services to help businesses establish a strong online
                    presence and achieve their digital marketing goals. These
                    services may include web design, web development, search
                    engine optimization, and more.
                  </div>
                </label>
              </div>

              <div className="relative group w-full border-t-[1px] border-gray-400">
                <input
                  type="checkbox"
                  id="question-1"
                  className="absolute peer h-[76px] appearance-none top-0 left-0 right-0 w-full cursor-pointer z-10"
                />
                <FontAwesomeIcon
                  className="absolute peer-checked:rotate-[-45deg] peer-checked:text-yellow-500 transition-all duration-700 top-[20px] right-[20px] text-lg text-gray-400 group-hover:text-yellow-500 rotate-45"
                  icon={faArrowRight}
                />
                <div className="peer-checked:text-gray-600 text-xl text-gray-400 group-hover:text-gray-600 font-medium py-6">
                  What is the typical process of working with a digital agency?
                </div>
                <label
                  htmlFor="question-1"
                  className="block max-h-0 peer-checked:max-h-[1000px] origin-top transition-all duration-700 bg-white overflow-hidden"
                >
                  <div className="text-gray-500 text-sm leading-7 pb-4">
                    A digital agency is a company that offers a range of
                    services to help businesses establish a strong online
                    presence and achieve their digital marketing goals. These
                    services may include web design, web development, search
                    engine optimization, and more.
                  </div>
                </label>
              </div>

              <div className="relative group w-full border-t-[1px] border-gray-400">
                <input
                  type="checkbox"
                  id="question-1"
                  className="absolute peer h-[76px] appearance-none top-0 left-0 right-0 w-full cursor-pointer z-10"
                />
                <FontAwesomeIcon
                  className="absolute peer-checked:rotate-[-45deg] peer-checked:text-yellow-500 transition-all duration-700 top-[20px] right-[20px] text-lg text-gray-400 group-hover:text-yellow-500 rotate-45"
                  icon={faArrowRight}
                />
                <div className="peer-checked:text-gray-600 text-xl text-gray-400 group-hover:text-gray-600 font-medium py-6">
                  Can a digital agency help with content creation?
                </div>
                <label
                  htmlFor="question-1"
                  className="block max-h-0 peer-checked:max-h-[1000px] origin-top transition-all duration-700 bg-white overflow-hidden"
                >
                  <div className="text-gray-500 text-sm leading-7 pb-4">
                    A digital agency is a company that offers a range of
                    services to help businesses establish a strong online
                    presence and achieve their digital marketing goals. These
                    services may include web design, web development, search
                    engine optimization, and more.
                  </div>
                </label>
              </div>

              <div className="relative group w-full border-t-[1px] border-gray-400">
                <input
                  type="checkbox"
                  id="question-1"
                  className="absolute peer h-[76px] appearance-none top-0 left-0 right-0 w-full cursor-pointer z-10"
                />
                <FontAwesomeIcon
                  className="absolute peer-checked:rotate-[-45deg] peer-checked:text-yellow-500 transition-all duration-700 top-[20px] right-[20px] text-lg text-gray-400 group-hover:text-yellow-500 rotate-45"
                  icon={faArrowRight}
                />
                <div className="peer-checked:text-gray-600 text-xl text-gray-400 group-hover:text-gray-600 font-medium py-6">
                  Do digital agencies work with small businesses as well?
                </div>
                <label
                  htmlFor="question-1"
                  className="block max-h-0 peer-checked:max-h-[1000px] origin-top transition-all duration-700 bg-white overflow-hidden"
                >
                  <div className="text-gray-500 text-sm leading-7 pb-4">
                    A digital agency is a company that offers a range of
                    services to help businesses establish a strong online
                    presence and achieve their digital marketing goals. These
                    services may include web design, web development, search
                    engine optimization, and more.
                  </div>
                </label>
              </div>

              <div className="relative group w-full border-t-[1px] border-gray-400">
                <input
                  type="checkbox"
                  id="question-1"
                  className="absolute peer h-[76px] appearance-none top-0 left-0 right-0 w-full cursor-pointer z-10"
                />
                <FontAwesomeIcon
                  className="absolute peer-checked:rotate-[-45deg] peer-checked:text-yellow-500 transition-all duration-700 top-[20px] right-[20px] text-lg text-gray-400 group-hover:text-yellow-500 rotate-45"
                  icon={faArrowRight}
                />
                <div className="peer-checked:text-gray-600 text-xl text-gray-400 group-hover:text-gray-600 font-medium py-6">
                  How much does it cost to hire a digital agency?
                </div>
                <label
                  htmlFor="question-1"
                  className="block max-h-0 peer-checked:max-h-[1000px] origin-top transition-all duration-700 bg-white overflow-hidden"
                >
                  <div className="text-gray-500 text-sm leading-7 pb-4">
                    A digital agency is a company that offers a range of
                    services to help businesses establish a strong online
                    presence and achieve their digital marketing goals. These
                    services may include web design, web development, search
                    engine optimization, and more.
                  </div>
                </label>
              </div>

              <div className="relative group w-full border-t-[1px] border-gray-400">
                <input
                  type="checkbox"
                  id="question-1"
                  className="absolute peer h-[76px] appearance-none top-0 left-0 right-0 w-full cursor-pointer z-10"
                />
                <FontAwesomeIcon
                  className="absolute peer-checked:rotate-[-45deg] peer-checked:text-yellow-500 transition-all duration-700 top-[20px] right-[20px] text-lg text-gray-400 group-hover:text-yellow-500 rotate-45"
                  icon={faArrowRight}
                />
                <div className="peer-checked:text-gray-600 text-xl text-gray-400 group-hover:text-gray-600 font-medium py-6">
                  Can a digital agency help with email marketing campaigns?
                </div>
                <label
                  htmlFor="question-1"
                  className="block max-h-0 peer-checked:max-h-[1000px] origin-top transition-all duration-700 bg-white overflow-hidden"
                >
                  <div className="text-gray-500 text-sm leading-7 pb-4">
                    A digital agency is a company that offers a range of
                    services to help businesses establish a strong online
                    presence and achieve their digital marketing goals. These
                    services may include web design, web development, search
                    engine optimization, and more.
                  </div>
                </label>
              </div>

              <div className="relative group w-full border-t-[1px] border-gray-400">
                <input
                  type="checkbox"
                  id="question-1"
                  className="absolute peer h-[76px] appearance-none top-0 left-0 right-0 w-full cursor-pointer z-10"
                />
                <FontAwesomeIcon
                  className="absolute peer-checked:rotate-[-45deg] peer-checked:text-yellow-500 transition-all duration-700 top-[20px] right-[20px] text-lg text-gray-400 group-hover:text-yellow-500 rotate-45"
                  icon={faArrowRight}
                />
                <div className="peer-checked:text-gray-600 text-xl text-gray-400 group-hover:text-gray-600 font-medium py-6">
                  What industries does a digital agency typically serve?
                </div>
                <label
                  htmlFor="question-1"
                  className="block max-h-0 peer-checked:max-h-[1000px] origin-top transition-all duration-700 bg-white overflow-hidden"
                >
                  <div className="text-gray-500 text-sm leading-7 pb-4">
                    A digital agency is a company that offers a range of
                    services to help businesses establish a strong online
                    presence and achieve their digital marketing goals. These
                    services may include web design, web development, search
                    engine optimization, and more.
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
