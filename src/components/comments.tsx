import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Comments() {
  return (
    <div className="space-y-12">
      {/* begin: comments */}

      <div className="space-y-4">
        <div className="text-3xl font-bold mb-8">Comments (02)</div>
        <div>
          <ul className="space-y-12">
            <li>
              <div className="flex gap-6">
                <div className="w-[86px] h-[86px]">
                  <Image
                    src="/assets/images/general/user-avatar-2.jpeg"
                    alt=""
                    width={86}
                    height={86}
                    className="w-full h-[86px]"
                  ></Image>
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-medium">By James Taylor</div>
                    <div className="text-xs text-gray-500">January 2, 2024</div>
                  </div>

                  <div className="text-sm leading-6 text-gray-600 text-justify">
                    I love this theme. Sometimes it’s difficult to work with
                    some themes, because even if they are created with
                    Elementor, you can’t edit all the things with Elementor. Is
                    not the case of Bili. All is created with Elementor and you
                    don’t need Elementor Pro. Definitely recommended.
                  </div>

                  <button className="group flex gap-1 pt-1">
                    <div className="text-yellow-500 uppercase font-semibold text-xs">
                      reply
                    </div>
                    <FontAwesomeIcon
                      className=" group-hover:rotate-[45deg] text-yellow-500 transition-all duration-500 text-sm -rotate-45"
                      icon={faArrowRight}
                    />
                  </button>
                </div>
              </div>

              <ul className="space-y-7 mt-7">
                <li className="flex gap-6">
                  <div className="w-[86px] h-[86px]"></div>
                  <div className="flex flex-1 gap-6">
                    <div className="w-[86px] h-[86px]">
                      <Image
                        src="/assets/images/general/user-avatar-2.jpeg"
                        alt=""
                        width={86}
                        height={86}
                        className="w-[86px] h-[86px]"
                      ></Image>
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex justify-between items-center">
                        <div className="text-lg font-medium">
                          By James Taylor
                        </div>
                        <div className="text-xs text-gray-500">
                          January 2, 2024
                        </div>
                      </div>

                      <div className="text-sm leading-6 text-gray-600 text-justify">
                        I love this theme. Sometimes it’s difficult to work with
                        some themes, because even if they are created with
                        Elementor, you can’t edit all the things with Elementor.
                        Is not the case of Bili. All is created with Elementor
                        and you don’t need Elementor Pro. Definitely
                        recommended.
                      </div>

                      <button className="group flex gap-1 pt-1">
                        <div className="text-yellow-500 uppercase font-semibold text-xs">
                          reply
                        </div>
                        <FontAwesomeIcon
                          className=" group-hover:rotate-[45deg] text-yellow-500 transition-all duration-500 text-sm -rotate-45"
                          icon={faArrowRight}
                        />
                      </button>
                    </div>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="w-[86px] h-[86px]"></div>
                  <div className="flex flex-1 gap-6">
                    <div className="w-[86px] h-[86px]">
                      <Image
                        src="/assets/images/general/user-avatar-2.jpeg"
                        alt=""
                        width={86}
                        height={86}
                        className="w-[86px] h-[86px]"
                      ></Image>
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex justify-between items-center">
                        <div className="text-lg font-medium">
                          By James Taylor
                        </div>
                        <div className="text-xs text-gray-500">
                          January 2, 2024
                        </div>
                      </div>

                      <div className="text-sm leading-6 text-gray-600 text-justify">
                        I love this theme. Sometimes it’s difficult to work with
                        some themes, because even if they are created with
                        Elementor, you can’t edit all the things with Elementor.
                        Is not the case of Bili. All is created with Elementor
                        and you don’t need Elementor Pro. Definitely
                        recommended.
                      </div>

                      <button className="group flex gap-1 pt-1">
                        <div className="text-yellow-500 uppercase font-semibold text-xs">
                          reply
                        </div>
                        <FontAwesomeIcon
                          className=" group-hover:rotate-[45deg] text-yellow-500 transition-all duration-500 text-sm -rotate-45"
                          icon={faArrowRight}
                        />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div className="flex gap-6">
                <div className="w-[86px] h-[86px]">
                  <Image
                    src="/assets/images/general/user-avatar-2.jpeg"
                    alt=""
                    width={86}
                    height={86}
                    className="w-full h-[86px]"
                  ></Image>
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-medium">By James Taylor</div>
                    <div className="text-xs text-gray-500">January 2, 2024</div>
                  </div>

                  <div className="text-sm leading-6 text-gray-600 text-justify">
                    I love this theme. Sometimes it’s difficult to work with
                    some themes, because even if they are created with
                    Elementor, you can’t edit all the things with Elementor. Is
                    not the case of Bili. All is created with Elementor and you
                    don’t need Elementor Pro. Definitely recommended.
                  </div>

                  <button className="group flex gap-1 pt-1">
                    <div className="text-yellow-500 uppercase font-semibold text-xs">
                      reply
                    </div>
                    <FontAwesomeIcon
                      className=" group-hover:rotate-[45deg] text-yellow-500 transition-all duration-500 text-sm -rotate-45"
                      icon={faArrowRight}
                    />
                  </button>
                </div>
              </div>

              <ul className="space-y-7 mt-7">
                <li className="flex gap-6">
                  <div className="w-[86px] h-[86px]"></div>
                  <div className="flex flex-1 gap-6">
                    <div className="w-[86px] h-[86px]">
                      <Image
                        src="/assets/images/general/user-avatar-2.jpeg"
                        alt=""
                        width={86}
                        height={86}
                        className="w-[86px] h-[86px]"
                      ></Image>
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex justify-between items-center">
                        <div className="text-lg font-medium">
                          By James Taylor
                        </div>
                        <div className="text-xs text-gray-500">
                          January 2, 2024
                        </div>
                      </div>

                      <div className="text-sm leading-6 text-gray-600 text-justify">
                        I love this theme. Sometimes it’s difficult to work with
                        some themes, because even if they are created with
                        Elementor, you can’t edit all the things with Elementor.
                        Is not the case of Bili. All is created with Elementor
                        and you don’t need Elementor Pro. Definitely
                        recommended.
                      </div>

                      <button className="group flex gap-1 pt-1">
                        <div className="text-yellow-500 uppercase font-semibold text-xs">
                          reply
                        </div>
                        <FontAwesomeIcon
                          className=" group-hover:rotate-[45deg] text-yellow-500 transition-all duration-500 text-sm -rotate-45"
                          icon={faArrowRight}
                        />
                      </button>
                    </div>
                  </div>
                </li>

                <li className="flex gap-6">
                  <div className="w-[86px] h-[86px]"></div>
                  <div className="flex flex-1 gap-6">
                    <div className="w-[86px] h-[86px]">
                      <Image
                        src="/assets/images/general/user-avatar-2.jpeg"
                        alt=""
                        width={86}
                        height={86}
                        className="w-[86px] h-[86px]"
                      ></Image>
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="flex justify-between items-center">
                        <div className="text-lg font-medium">
                          By James Taylor
                        </div>
                        <div className="text-xs text-gray-500">
                          January 2, 2024
                        </div>
                      </div>

                      <div className="text-sm leading-6 text-gray-600 text-justify">
                        I love this theme. Sometimes it’s difficult to work with
                        some themes, because even if they are created with
                        Elementor, you can’t edit all the things with Elementor.
                        Is not the case of Bili. All is created with Elementor
                        and you don’t need Elementor Pro. Definitely
                        recommended.
                      </div>

                      <button className="group flex gap-1 pt-1">
                        <div className="text-yellow-500 uppercase font-semibold text-xs">
                          reply
                        </div>
                        <FontAwesomeIcon
                          className=" group-hover:rotate-[45deg] text-yellow-500 transition-all duration-500 text-sm -rotate-45"
                          icon={faArrowRight}
                        />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* end: comments */}

      {/* begin: leave a reply */}
      <div className="w-full bg-gray-100 p-14">
        <div className="font-bold text-2xl">Leave a Reply</div>
        <div className="text-sm text-gray-600 mt-3 mb-6">
          Your email address will not be published. Required fields are marked *
        </div>
        <form action="" className="space-y-6">
          <div className="flex gap-8">
            <div className="basis-1/2">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full pr-4 py-2 bg-gray-100 border-b-[1px] border-gray-700 outline-none font-medium placeholder:text-gray-600 placeholder:font-medium focus:placeholder:text-transparent"
              />
            </div>
            <div className="basis-1/2">
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full pr-4 py-2 bg-gray-100 border-b-[1px] border-gray-700 outline-none font-medium placeholder:text-gray-600 placeholder:font-medium focus:placeholder:text-transparent"
              />
            </div>
          </div>
          <div className="basis-full">
            <input
              type="email"
              placeholder="Website"
              className="w-full pr-4 py-2 bg-gray-100 border-b-[1px] border-gray-700 outline-none font-medium placeholder:text-gray-600 placeholder:font-medium focus:placeholder:text-transparent"
            />
          </div>
          <div className="basis-full">
            <textarea
              placeholder="Your comments..."
              className="w-full h-pull pr-4 py-2 bg-gray-100 border-b-[1px] border-gray-700 outline-none font-medium placeholder:text-gray-600 placeholder:font-medium focus:placeholder:text-transparent"
            ></textarea>
          </div>
          <div className="basis-full flex items-center">
            <input
              id="check"
              name="check"
              type="checkbox"
              className="bg-gray-100 border-b-[1px] border-gray-700 outline-none font-medium mr-4 cursor-pointer checked:bg-yellow-500"
            />
            <label
              htmlFor="check"
              className="text-sm text-gray-700 cursor-pointer"
            >
              Save my name, email and website in this browser for the next time
              I comment
            </label>
          </div>
          <button className="group/btnSend py-4 px-6 bg-black font-semibold rounded-full text-white text-xs uppercase flex items-center gap-2 hover:bg-yellow-500 transition-colors duration-700 ease-in-out">
            post comment
            <div className="group-hover/btnSend:scale-150 duration-700 w-[6px] h-[6px] bg-white rounded-full"></div>
          </button>
        </form>
      </div>
      {/* end: leave a reply */}
    </div>
  );
}
