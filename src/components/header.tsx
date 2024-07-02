import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShapes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="fixed w-full h-[100px]">
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full">
          <div>
            <img src="/assets/images/general/capi-logo.svg" alt=""></img>
          </div>
          <div>
            <ul className="flex gap-2 border-[1px] border-white rounded-full py-1 px-1">
              <li>
                <Link
                  className="group/link relative block text-sm font-semibold rounded-full py-4 px-3 overflow-hidden"
                  href=""
                >
                  <div>
                    <span className="relative text-white group-hover/link:text-black z-10 duration-300">
                      Home
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover/link:w-full rounded-full duration-300"></div>
                </Link>
              </li>
              <li>
                <Link
                  className="group/link relative block text-sm font-semibold rounded-full py-4 px-3 overflow-hidden"
                  href=""
                >
                  <div>
                    <span className="relative text-white group-hover/link:text-black z-10 duration-300">
                      Services
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover/link:w-full rounded-full duration-300"></div>
                </Link>
              </li>
              <li>
                <Link
                  className="group/link relative block text-sm font-semibold rounded-full py-4 px-3 overflow-hidden"
                  href=""
                >
                  <div>
                    <span className="relative text-white group-hover/link:text-black z-10 duration-300">
                      Works
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover/link:w-full rounded-full duration-300"></div>
                </Link>
              </li>
              <li>
                <Link
                  className="group/link relative block text-sm font-semibold rounded-full py-4 px-3 overflow-hidden hover:overflow-visible duration-500"
                  href=""
                >
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

                  <div className="absolute top-[120%] translate-x-[-50%] left-1/2 w-[1250px] h-auto rounded-3xl bg-white opacity-0 translate-y-4 group-hover/link:opacity-100 group-hover/link:translate-y-0 duration-500 after:absolute after:top-[-15px] after:left-0 after:w-full after:h-[25px]">
                    <div className="flex w-full h-full divide-x-[1px] divide-black rounded-3xl overflow-hidden">
                      <Link
                        href=""
                        className="flex-1 py-14 px-10 text-center flex flex-col justify-center hover:bg-gray-100"
                      >
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
                      </Link>

                      <Link
                        href=""
                        className="flex-1 py-14 px-10 text-center flex flex-col justify-center hover:bg-gray-100"
                      >
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
                      </Link>

                      <Link
                        href=""
                        className="flex-1 py-14 px-10 text-center flex flex-col justify-center hover:bg-gray-100"
                      >
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
                          With a team of 50 members and 10 years of experience.
                        </div>
                      </Link>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  className="group/link relative block text-sm font-semibold rounded-full py-4 px-3 overflow-hidden"
                  href=""
                >
                  <div>
                    <span className="relative text-white group-hover/link:text-black z-10 duration-300">
                      New
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover/link:w-full rounded-full duration-300"></div>
                </Link>
              </li>
              <li>
                <Link
                  className="group/link relative block text-sm font-semibold rounded-full py-4 px-3 overflow-hidden"
                  href=""
                >
                  <div>
                    <span className="relative text-white group-hover/link:text-black z-10 duration-300">
                      FAQ
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover/link:w-full rounded-full duration-300"></div>
                </Link>
              </li>
              <li>
                <Link
                  className="group/link relative block text-sm font-semibold rounded-full py-4 px-3"
                  href=""
                >
                  <div>
                    <span className="relative text-white group-hover/link:text-black z-10 duration-300">
                      Contacts
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-0 h-full bg-white group-hover/link:w-full rounded-full duration-300"></div>

                  <div className="absolute top-[120%] left-0 translate-x-[-70%] w-[1100px] h-auto rounded-3xl bg-white  translate-y-4 group-hover/link:opacity-100 group-hover/link:translate-y-0 duration-500 after:absolute after:top-[-15px] after:left-0 after:w-full after:h-[25px]">
                    <div className="grid grid-cols-4 w-full h-full rounded-3xl overflow-hidden p-8">
                      <div className="col-span-1">
                        <h2 className="font-semibold text-xl">Contact</h2>
                        <div className="space-y-2 *:text-md">
                          <div>+84 392 293 045</div>
                          <div>
                            35 To Vinh Dien str, Thanh Xuan, Hanoi, Vietnam
                          </div>
                          <div>agency@capi.design</div>
                        </div>
                      </div>
                      <div className="col-span-2">2</div>
                      <div className="col-span-1">3</div>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-6 items-center">
            <div>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white text-xl"
              />
            </div>
            <div className="flex items-center justify-center bg-[#efad00] w-[60px] h-[60px] rounded-full cursor-pointer">
              <div className="grid grid-cols-3 gap-1 p-4">
                <div className="bg-white w-[4px] h-[4px] rounded-full"></div>
                <div className="bg-white w-[4px] h-[4px] rounded-full"></div>
                <div className="bg-white w-[4px] h-[4px] rounded-full"></div>
                <div className="bg-white w-[4px] h-[4px] rounded-full"></div>
                <div className="bg-white w-[4px] h-[4px] rounded-full"></div>
                <div className="bg-white w-[4px] h-[4px] rounded-full"></div>
                <div className="bg-white w-[4px] h-[4px] rounded-full"></div>
                <div className="bg-white w-[4px] h-[4px] rounded-full"></div>
                <div className="bg-white w-[4px] h-[4px] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
