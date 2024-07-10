"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShapes,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 10.7769,
  lng: 106.7009,
};

export default function Header() {
  const [searchModal, setSearchModal] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  function handleSearchModal() {
    setSearchModal(!searchModal);
  }

  function handleSideBar() {
    setSideBar(!sideBar);
  }

  return (
    <header className="fixed top-0 left-0 w-full header-height z-40 bg-black">
      <div className="relative h-full">
        <div className="container mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <div className="w-[134px]">
              <Link href="/">
                <div>
                  <Image
                    src={"/assets/images/general/capi-logo.svg"}
                    className=""
                    alt="image"
                    width={80}
                    height={50}
                    layout="responsive"
                  ></Image>
                </div>
              </Link>
            </div>
            <div>
              <ul className="relative flex gap-2 border-[1px] border-white rounded-full py-1 px-1">
                <li>
                  <Link className="block" href="/" legacyBehavior>
                    <div className="cursor-pointer group/link relative text-xs font-semibold rounded-full py-3 px-4 overflow-hidden">
                      <div>
                        <span className="relative text-white group-hover/link:text-black z-10 duration-300">
                          Home
                        </span>
                      </div>
                      <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover/link:w-full rounded-full duration-300"></div>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link className="block" href="/services" legacyBehavior>
                    <div className="cursor-pointer group/link relative text-xs font-semibold rounded-full py-3 px-4 overflow-hidden">
                      <div>
                        <span className="relative text-white group-hover/link:text-black z-10 duration-300">
                          Services
                        </span>
                      </div>
                      <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover/link:w-full rounded-full duration-300"></div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="block" href="/works" legacyBehavior>
                    <div className="cursor-pointer group/link relative text-xs font-semibold rounded-full py-3 px-4 overflow-hidden">
                      <div>
                        <span className="relative text-white group-hover/link:text-black z-10 duration-300">
                          Works
                        </span>
                      </div>
                      <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover/link:w-full rounded-full duration-300"></div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="block" href="" legacyBehavior>
                    <div className="cursor-pointer group/link relative text-xs font-semibold rounded-full py-3 px-4 overflow-hidden hover:overflow-visible duration-500">
                      <div>
                        <span className="relative text-white group-hover/link:text-black z-10 duration-300">
                          About Us
                          <span>
                            <FontAwesomeIcon
                              className="ml-1"
                              icon={faChevronDown}
                            />
                          </span>
                        </span>
                      </div>
                      <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover/link:w-full rounded-full duration-300"></div>

                      <div className="absolute top-[130%] translate-x-[-50%] left-1/2 w-[1250px] h-auto rounded-3xl bg-white opacity-0 translate-y-4 group-hover/link:opacity-100 group-hover/link:translate-y-0 duration-500 after:absolute after:top-[-15px] after:left-0 after:w-full after:h-[25px] shadow-md">
                        <div className="flex w-full h-full divide-x-[1px] divide-black rounded-3xl overflow-hidden">
                          <Link
                            href="/our-history"
                            legacyBehavior
                            className="block"
                          >
                            <div className="cursor-pointer flex-1 py-14 px-10 text-center flex flex-col justify-center hover:bg-gray-100">
                              <div>
                                <FontAwesomeIcon
                                  icon={faShapes}
                                  className="text-5xl"
                                />
                              </div>
                              <h1 className="text-2xl font-semibold my-4">
                                Our history
                              </h1>
                              <div className="leading-7 text-lg font-normal">
                                The continuous development of a pioneering team.
                              </div>
                            </div>
                          </Link>

                          <Link
                            href="our-mission"
                            legacyBehavior
                            className="block"
                          >
                            <div className="flex-1 py-14 px-10 text-center flex flex-col justify-center hover:bg-gray-100">
                              <div>
                                <FontAwesomeIcon
                                  icon={faShapes}
                                  className="text-5xl"
                                />
                              </div>
                              <h1 className="text-2xl font-semibold my-4">
                                Our Mission
                              </h1>
                              <div className="leading-7 text-lg font-normal">
                                With the mission to change user perceptions of
                                technology.
                              </div>
                            </div>
                          </Link>

                          <Link
                            href="/our-team"
                            legacyBehavior
                            className="block"
                          >
                            <div className="flex-1 py-14 px-10 text-center flex flex-col justify-center hover:bg-gray-100">
                              <div>
                                <FontAwesomeIcon
                                  icon={faShapes}
                                  className="text-5xl"
                                />
                              </div>
                              <h1 className="text-2xl font-semibold my-4">
                                Our Team
                              </h1>
                              <div className="leading-7 text-lg font-normal">
                                With a team of 50 members and 10 years of
                                experience.
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="block" href="/news" legacyBehavior>
                    <div className="cursor-pointer group/link relative text-xs font-semibold rounded-full py-3 px-4 overflow-hidden">
                      <div>
                        <span className="relative text-white group-hover/link:text-black z-10 duration-300">
                          New
                        </span>
                      </div>
                      <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover/link:w-full rounded-full duration-300"></div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="block" href="/faq">
                    <div className="cursor-pointer group/link relative text-xs font-semibold rounded-full py-3 px-4 overflow-hidden">
                      <div>
                        <span className="relative text-white group-hover/link:text-black z-10 duration-300">
                          FAQ
                        </span>
                      </div>
                      <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover/link:w-full rounded-full duration-300"></div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="block" href="/contacts" legacyBehavior>
                    <div className="cursor-pointer group/link relative block text-xs font-semibold rounded-full py-3 px-3 overflow-hidden hover:overflow-visible duration-500">
                      <div>
                        <span className="relative text-white group-hover/link:text-black z-10 duration-300">
                          Contacts
                        </span>
                      </div>
                      <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover/link:w-full rounded-full duration-300"></div>

                      <div className="absolute top-[130%] left-0 translate-x-[-70%] w-[1100px] h-auto rounded-3xl cursor-default bg-gray-200 translate-y-4 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-y-0 duration-500 after:absolute after:top-[-15px] after:left-0 after:w-full after:h-[25px]">
                        <div className="grid grid-cols-3 w-full h-full rounded-3xl overflow-hidden py-12 px-10 gap-8">
                          <div className="col-span-1">
                            <h2 className="font-semibold text-xl mb-6">
                              Contact
                            </h2>
                            <div className="space-y-3 *:text-md *:font-medium">
                              <div className="hover:underline hover:underline-offset-4">
                                <Link href="" legacyBehavior>
                                  <div>+84 392 293 045</div>
                                </Link>
                              </div>
                              <div className="hover:underline hover:underline-offset-4">
                                <Link href="" legacyBehavior>
                                  <div>35 To Vinh Dien str, Thanh Xuan, Hanoi,
                                  Vietnam</div>
                                </Link>
                              </div>
                              <div className="hover:underline hover:underline-offset-4">
                                <Link href="" legacyBehavior>
                                  <div>agency@capi.design</div>
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="col-span-1">
                            <h2 className="font-semibold text-xl mb-5">
                              Get in Touch
                            </h2>
                            <span className="text-xs font-normal text-gray-500">
                              Your email address will not be published. Required
                              fields are marked *
                            </span>
                            <form action="" className="space-y-5 mt-4">
                              <input
                                type="text"
                                placeholder="Your Name"
                                className="bg-gray-200 w-full pr-4 py-2 border-b-[1px] border-gray-700 outline-none font-medium placeholder:text-black placeholder:font-medium focus:placeholder:text-transparent"
                              />
                              <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-gray-200 w-full pr-4 py-2 border-b-[1px] border-gray-700 outline-none font-medium placeholder:text-black placeholder:font-medium focus:placeholder:text-transparent"
                              />
                              <textarea
                                placeholder="Tell us about your ideas"
                                className="bg-gray-200 w-full h-pull pr-4 py-2 border-b-[1px] border-gray-700 outline-none font-medium placeholder:text-black placeholder:font-medium focus:placeholder:text-transparent"
                              ></textarea>
                              <button className="group/btnSend py-3 px-4 bg-black rounded-full text-white text-xs uppercase flex items-center gap-2 mt-10 hover:bg-[#e44f39] transition-colors duration-700 ease-in-out">
                                send
                                <div className="group-hover/btnSend:scale-150 duration-700 w-[6px] h-[6px] bg-white rounded-full"></div>
                              </button>
                            </form>
                          </div>

                          <div className="col-span-1">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.815298713598!2d105.81853457596922!3d21.000039688763025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac8596e4358b%3A0x52f9cd6571043f34!2zMzUgUC4gVMO0IFbEqW5oIERp4buHbiwgS2jGsMahbmcgVHJ1bmcsIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1719992323199!5m2!1svi!2s"
                              width="100%"
                              height="100%"
                              style={{ border: 0, borderRadius: 10 }}
                              allowFullScreen
                              loading="lazy"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex gap-6 items-center">
              <div
                className={
                  searchModal
                    ? "relative w-6 overflow-visible"
                    : "relative w-6 overflow-hidden"
                }
              >
                {searchModal === false && (
                  <div onClick={handleSearchModal}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="text-white text-xl cursor-pointer"
                    />
                  </div>
                )}
                {searchModal === true && (
                  <div onClick={handleSearchModal}>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-white text-2xl cursor-pointer"
                    />
                  </div>
                )}
                <div
                  className={
                    searchModal
                      ? "absolute top-[150%] right-0 w-[330px] bg-[#e1e1e1] rounded-3xl px-5 pt-5 pb-8 translate-y-0 duration-700 opacity-100"
                      : "absolute top-full right-0 w-[330px] bg-[#e1e1e1] rounded-3xl px-5 pt-5 pb-8 translate-y-8 opacity-0 duration-700"
                  }
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search ..."
                      className="outline-none w-full py-3 pl-6 text-sm text-gray-500 bg-[#e1e1e1] border-b-[1px] border-gray-700 placeholder:text-gray-500"
                    />
                    <div className="absolute top-[50%] translate-y-[-50%]">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="text-gray-500 text-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="group/sideBar flex items-center justify-center bg-[#efad00] w-[55px] h-[55px] rounded-full cursor-pointer"
                onClick={handleSideBar}
              >
                <div className="relative group/sideBar w-1/4 h-1/4 translate-x-[-10%] translate-y-[-10%]">
                  <div className="absolute top-0 left-0 group-hover/sideBar:top-1/2 group-hover/sideBar:left-0 transition-all duration-700 ease-in-out bg-white w-[4px] h-[4px] rounded-full"></div>
                  <div className="absolute top-0 left-1/2 group-hover/sideBar:top-0 group-hover/sideBar:left-0 transition-all duration-700 ease-in-out bg-white w-[4px] h-[4px] rounded-full"></div>
                  <div className="absolute top-0 left-full group-hover/sideBar:top-0 group-hover/sideBar:left-1/2 transition-all duration-700 ease-in-out bg-white w-[4px] h-[4px] rounded-full"></div>
                  <div className="absolute top-1/2 left-0 group-hover/sideBar:top-full group-hover/sideBar:left-0 transition-all duration-700 ease-in-out bg-white w-[4px] h-[4px] rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 bg-white w-[4px] h-[4px] rounded-full"></div>
                  <div className="absolute top-1/2 left-full group-hover/sideBar:top-0 group-hover/sideBar:left-full transition-all duration-700 ease-in-out bg-white w-[4px] h-[4px] rounded-full"></div>
                  <div className="absolute top-full left-0 group-hover/sideBar:top-full group-hover/sideBar:left-1/2 transition-all duration-700 ease-in-out bg-white w-[4px] h-[4px] rounded-full"></div>
                  <div className="absolute top-full left-1/2 group-hover/sideBar:top-full group-hover/sideBar:left-full transition-all duration-700 ease-in-out bg-white w-[4px] h-[4px] rounded-full"></div>
                  <div className="absolute top-full left-full group-hover/sideBar:top-1/2 group-hover/sideBar:left-full transition-all duration-700 ease-in-out bg-white w-[4px] h-[4px] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* begin: sideBar */}
        <div
          className={
            sideBar
              ? "absolute top-0 right-0 min-h-screen w-[430px] bg-black px-14 py-20 opacity-100 translate-x-0 duration-700"
              : "absolute top-0 right-0 min-h-screen w-[430px] bg-black px-14 py-20 opacity-0 translate-x-[150%] duration-700"
          }
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <div className="absolute top-[-5%] left-[-30%]">
              <FontAwesomeIcon
                icon={faXmark}
                className="text-yellow-500 text-2xl cursor-pointer"
                onClick={handleSideBar}
              />
            </div>

            <div className="space-y-20">
              <div className="flex flex-col flex-wrap justify-center items-center">
                <div className="flex-1">
                  <Image
                    src={"/assets/images/general/capi-logo.svg"}
                    className="scale-75"
                    alt="image"
                    width={300}
                    height={200}
                    layout="responsive"
                  ></Image>
                </div>
                <div className="uppercase text-gray-300 text-sm text-center mt-5 font-semibold px-4">
                  WE OFFER A COMPREHENSIVE SUITE OF SERVICES TO CATER TO VARIOUS
                  ASPECTS OF A CLIENT’S NEEDS.
                </div>
              </div>

              <div>
                <div className="font-medium text-[#7b7b7b] text-3xl text-center mt-5">
                  agency@capi.design
                </div>
                <div className="font-medium text-[#7b7b7b] text-3xl text-center mt-5">
                  35 To Vinh Dien str, Thanh Xuan, Ha Noi, Vietnam
                </div>
                <div className="font-medium text-[#7b7b7b] text-3xl text-center mt-5">
                  +84 392 293 045
                </div>
              </div>

              <div>
                <div className="relative w-full mt-20">
                  <input
                    type="email"
                    className="w-full text-sm font-semibold py-2 pr-7 bg-black outline-none border-b-[1px] border-white text-white placeholder:text-white transition-colors duration-700 ease-linear focus:placeholder:text-transparent"
                    placeholder="Get news & updates"
                  />
                  <button className="absolute top-[0] right-0 text-[#e44f39] hover:text-white text-2xl transition-colors duration-500 ease-in-out">
                    @
                  </button>
                </div>
                <div className="hidden py-1 px-2 text-white text-sm border-[1px] border-[#46b450] w-full mt-4">
                  Thank you for message. It has been sent.
                </div>
                <div className="w-full text-xs text-gray-400 text-center mt-4">
                  Our expertise, as well as our passion for web design, sets us
                  apart from other agencies.
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-20">
                <Link href="" legacyBehavior className="block">
                  <div className="uppercase font-medium cursor-pointer text-xs text-white py-1 px-2 rounded-full border-2 border-white hover:bg-white hover:text-black">
                    behance
                  </div>
                </Link>
                <Link href="" legacyBehavior className="block">
                  <div className="uppercase font-medium cursor-pointer text-xs text-white py-1 px-2 rounded-full border-2 border-white hover:bg-white hover:text-black">
                    dribble
                  </div>
                </Link>
                <Link href="" legacyBehavior className="block">
                  <div className="uppercase font-medium cursor-pointer text-xs text-white py-1 px-2 rounded-full border-2 border-white hover:bg-white hover:text-black">
                    facebook
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* end: sideBar */}
      </div>
    </header>
  );
}
