import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faFile,
  faCaretRight,
  faXmark,
  faCropSimple,
  faMagnifyingGlassPlus,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

import {
  faXTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SideBar() {
  return (
    <>
      <div className="relative">
        <input
          type="text"
          placeholder="Search ..."
          className="outline-none w-full py-3 pl-6 text-sm text-gray-500 border-b-[1px] border-gray-700 placeholder:text-gray-500 focus:placeholder:text-transparent"
        />
        <div className="absolute top-[50%] translate-y-[-50%]">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-gray-500 text-md"
          />
        </div>
      </div>

      <div className="space-y-8 mt-10">
        {/* begin: recent posts */}
        <div>
          <div className="text-xl text-primary font-semibold mb-5">
            Recent Posts
          </div>
          <div className="space-y-4">
            <Link href="/1" className="block">
              <div className="flex gap-3 items-start group/link">
                <FontAwesomeIcon
                  icon={faFile}
                  className="text-xs text-gray-400 group-hover/link:text-yellow-500 mt-1"
                />
                <div className="text-sm text-gray-500 font-semibold">
                  Unraveling Marketing Trends
                </div>
              </div>
            </Link>
            <Link href="/1" className="block">
              <div className="flex gap-3 items-start group/link">
                <FontAwesomeIcon
                  icon={faFile}
                  className="text-xs text-gray-400 group-hover/link:text-yellow-500 mt-1"
                />
                <div className="text-sm text-gray-500 font-semibold">
                  Navigating the Digital Landscape
                </div>
              </div>
            </Link>
            <Link href="/1" className="block">
              <div className="flex gap-3 items-start group/link">
                <FontAwesomeIcon
                  icon={faFile}
                  className="text-xs text-gray-400 group-hover/link:text-yellow-500 mt-1"
                />
                <div className="text-sm text-gray-500 font-semibold">
                  Unlocking the Power of Photo
                </div>
              </div>
            </Link>
            <Link href="/1" className="block">
              <div className="flex gap-3 items-start group/link">
                <FontAwesomeIcon
                  icon={faFile}
                  className="text-xs text-gray-400 group-hover/link:text-yellow-500 mt-1"
                />
                <div className="text-sm text-gray-500 font-semibold">
                  Exploring UI/UX Trends 2024
                </div>
              </div>
            </Link>
            <Link href="/1" className="block">
              <div className="flex gap-3 items-start group/link">
                <FontAwesomeIcon
                  icon={faFile}
                  className="text-xs text-gray-400 group-hover/link:text-yellow-500 mt-1"
                />
                <div className="text-sm text-gray-500 font-semibold">
                  The Psychology of Color in Branding
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* end: recent posts */}

        {/* begin:motto agency */}
        <div className="flex justify-center xl:justify-start items-center">
          <div className="w-[270px]">
            <div className="relative W-full md:w-full pt-[130%] bg-[url('/assets/images/general/motto-agency.jpg')] bg-center bg-cover bg-no-repeat">
              <Link
                href="/contacts"
                className="absolute top-0 left-0 right-0 bottom-0 group/motto"
              >
                <div className="flex flex-col items-center px-4 py-14 text-center justify-between h-full">
                  <Image
                    src="/assets/images/general/motto-agency-logo.png"
                    alt=""
                    width={100}
                    height={50}
                  ></Image>
                  <div className="text-md text-white font-semibold">
                    Connecting Minds, Creating Magic
                  </div>
                  <button className="rounded-full text-xs font-semibold py-4 px-5 uppercase text-white bg-black group-hover/motto:bg-yellow-500 transition-all duration-500 flex items-center gap-3">
                    Read more
                    <div className="group-hover/motto:scale-125 bg-white w-2 h-2 rounded-full transition-all duration-700"></div>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* end:motto agency */}

        {/* begin: archives */}
        <div>
          <div className="text-xl text-primary font-semibold mb-4">
            Archives
          </div>
          <div className="space-y-1">
            <Link href="" className="relative block w-full group/link">
              <div>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="absolute top-0 left-0 text-xl w-0 opacity-0 group-hover/link:w-[10px] group-hover/link:opacity-100 text-yellow-500 mt-[2px] duration-300"
                />
                <div className="text-md text-gray-400 font-medium group-hover/link:pl-5 group-hover/link:text-gray-600 transition-all duration-300">
                  January 2024
                </div>
              </div>
            </Link>
            <Link href="" className="relative block w-full group/link">
              <div>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="absolute top-0 left-0 text-xl w-0 opacity-0 group-hover/link:w-[10px] group-hover/link:opacity-100 text-yellow-500 mt-[2px] duration-300"
                />
                <div className="text-md text-gray-400 font-medium group-hover/link:pl-5 group-hover/link:text-gray-600 transition-all duration-300">
                  December 2023
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* end: archives */}

        {/* begin: Categories */}
        <div>
          <div className="text-xl text-primary font-semibold mb-4">
            Categories
          </div>
          <div className="space-y-1">
            <Link
              href="category/1"
              className="relative block w-full group/link"
            >
              <div>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="absolute top-0 left-0 text-xl w-0 opacity-0 group-hover/link:w-[10px] group-hover/link:opacity-100 text-yellow-500 mt-[2px] duration-300"
                />
                <div className="text-md text-gray-400 font-medium group-hover/link:pl-5 group-hover/link:text-gray-600 transition-all duration-300">
                  Branding (4)
                </div>
              </div>
            </Link>
            <Link
              href="category/1"
              className="relative block w-full group/link"
            >
              <div>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="absolute top-0 left-0 text-xl w-0 opacity-0 group-hover/link:w-[10px] group-hover/link:opacity-100 text-yellow-500 mt-[2px] duration-300"
                />
                <div className="text-md text-gray-400 font-medium group-hover/link:pl-5 group-hover/link:text-gray-600 transition-all duration-300">
                  Design (4)
                </div>
              </div>
            </Link>
            <Link
              href="category/1"
              className="relative block w-full group/link"
            >
              <div>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="absolute top-0 left-0 text-xl w-0 opacity-0 group-hover/link:w-[10px] group-hover/link:opacity-100 text-yellow-500 mt-[2px] duration-300"
                />
                <div className="text-md text-gray-400 font-medium group-hover/link:pl-5 group-hover/link:text-gray-600 transition-all duration-300">
                  Digital (4)
                </div>
              </div>
            </Link>
            <Link
              href="category/1"
              className="relative block w-full group/link"
            >
              <div>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="absolute top-0 left-0 text-xl w-0 opacity-0 group-hover/link:w-[10px] group-hover/link:opacity-100 text-yellow-500 mt-[2px] duration-300"
                />
                <div className="text-md text-gray-400 font-medium group-hover/link:pl-5 group-hover/link:text-gray-600 transition-all duration-300">
                  Ideals (4)
                </div>
              </div>
            </Link>
            <Link
              href="category/1"
              className="relative block w-full group/link"
            >
              <div>
                <FontAwesomeIcon
                  icon={faCaretRight}
                  className="absolute top-0 left-0 text-xl w-0 opacity-0 group-hover/link:w-[10px] group-hover/link:opacity-100 text-yellow-500 mt-[2px] duration-300"
                />
                <div className="text-md text-gray-400 font-medium group-hover/link:pl-5 group-hover/link:text-gray-600 transition-all duration-300">
                  Technology (4)
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* end: Categories */}

        {/* begin: User card */}
        <div className="flex justify-center xl:justify-start items-center">
          <div className="w-[270px]">
            <div className="relative w-full pt-[150%] bg-[url('/assets/images/general/user-image.jpg')] bg-center bg-cover bg-no-repeat">
              <div className="absolute bottom-0 left-0 right-0 text-white p-6">
                <div className="text-xs font-medium uppercase">
                  author of blog
                </div>
                <div className="text-2xl font-bold mt-1 mb-3">Tomm Beross</div>
                <div className="flex items-center gap-5">
                  <Link href="">
                    <div>
                      <FontAwesomeIcon
                        className="text-sm font-semibold hover:opacity-70"
                        icon={faXTwitter}
                      />
                    </div>
                  </Link>
                  <Link href="">
                    <div>
                      <FontAwesomeIcon
                        className="text-sm font-semibold hover:opacity-70"
                        icon={faFacebookF}
                      />
                    </div>
                  </Link>
                  <Link href="">
                    <div>
                      <FontAwesomeIcon
                        className="text-sm font-semibold hover:opacity-70"
                        icon={faLinkedinIn}
                      />
                    </div>
                  </Link>
                  <Link href="">
                    <div>
                      <FontAwesomeIcon
                        className="text-sm font-semibold hover:opacity-70"
                        icon={faInstagram}
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end: User card */}

        {/* begin: Related Posts */}
        <div>
          <div className="text-xl text-primary font-semibold mb-5">
            Related Posts
          </div>
          <div className="space-y-7">
            <Link href="/1" className="block">
              <div className="flex gap-4">
                <Image
                  className=""
                  src="/assets/images/general/post-image.jpg"
                  alt=""
                  width={70}
                  height={70}
                ></Image>
                <div className="flex flex-col justify-center gap-2 md:justify-between">
                  <div className="text-sm text-gray-400 font-semibold uppercase">
                    (January 2024)
                  </div>
                  <div className="text-base leading-[22px] text-gray-600 font-semibold">
                    Unraveling Marketing Trends
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/1" className="block">
              <div className="flex gap-4">
                <Image
                  className=""
                  src="/assets/images/general/post-image.jpg"
                  alt=""
                  width={70}
                  height={70}
                ></Image>
                <div className="flex flex-col justify-center gap-2 md:justify-between">
                  <div className="text-sm text-gray-400 font-semibold uppercase">
                    (January 2024)
                  </div>
                  <div className="text-base leading-[22px] text-gray-600 font-semibold">
                    Unraveling Marketing Trends
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/1" className="block">
              <div className="flex gap-4">
                <Image
                  className=""
                  src="/assets/images/general/post-image.jpg"
                  alt=""
                  width={70}
                  height={70}
                ></Image>
                <div className="flex flex-col justify-center gap-2 md:justify-between">
                  <div className="text-sm text-gray-400 font-semibold uppercase">
                    (January 2024)
                  </div>
                  <div className="text-base leading-[22px] text-gray-600 font-semibold">
                    Unraveling Marketing Trends
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        {/* end: Related Posts */}

        {/* begin: popular tags */}

        <div>
          <div className="text-xl text-primary font-semibold mb-5">
            Popular Tags
          </div>
          <div className="flex flex-row flex-wrap gap-[6px]">
            <Link
              href="tag/1"
              className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500"
            >
              <div>branding</div>
            </Link>
            <Link
              href="tag/1"
              className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500"
            >
              <div>design</div>
            </Link>
            <Link
              href="tag/1"
              className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500"
            >
              <div>development</div>
            </Link>
            <Link
              href="tag/1"
              className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500"
            >
              <div>digital</div>
            </Link>
            <Link
              href="tag/1"
              className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500"
            >
              <div>innovation</div>
            </Link>
            <Link
              href="tag/1"
              className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500"
            >
              <div>marketing</div>
            </Link>
            <Link
              href="tag/1"
              className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500"
            >
              <div>mobile</div>
            </Link>
            <Link
              href="tag/1"
              className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500"
            >
              <div>technology</div>
            </Link>
          </div>
        </div>
        {/* end: popular tags */}

        {/* begin: gallery */}
        <div className="text-xl text-primary font-semibold mb-5">Gallery</div>
        <div className="grid grid-cols-3 gap-4 w-full">
          <label htmlFor="gallery" className="relative group/galleryImage">
            <Image
              className="cursor-pointer hover:brightness-75 transition-all duration-500 w-full h-auto"
              src="/assets/images/general/post-image.jpg"
              alt=""
              width={80}
              height={80}
            ></Image>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white opacity-0 group-hover/galleryImage:opacity-100 duration-500 cursor-pointer">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white text-sm"
              />
            </div>
          </label>
          <label htmlFor="gallery" className="relative group/galleryImage">
            <Image
              className="cursor-pointer hover:brightness-75 transition-all duration-500 w-full h-auto"
              src="/assets/images/general/post-image.jpg"
              alt=""
              width={80}
              height={80}
            ></Image>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white opacity-0 group-hover/galleryImage:opacity-100 duration-500 cursor-pointer">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white text-sm"
              />
            </div>
          </label>
          <label htmlFor="gallery" className="relative group/galleryImage">
            <Image
              className="cursor-pointer hover:brightness-75 transition-all duration-500 w-full h-auto"
              src="/assets/images/general/post-image.jpg"
              alt=""
              width={80}
              height={80}
            ></Image>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white opacity-0 group-hover/galleryImage:opacity-100 duration-500 cursor-pointer">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white text-sm"
              />
            </div>
          </label>
          <label htmlFor="gallery" className="relative group/galleryImage">
            <Image
              className="cursor-pointer hover:brightness-75 transition-all duration-500 w-full h-auto"
              src="/assets/images/general/post-image.jpg"
              alt=""
              width={80}
              height={80}
            ></Image>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white opacity-0 group-hover/galleryImage:opacity-100 duration-500 cursor-pointer">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white text-sm"
              />
            </div>
          </label>
          <label htmlFor="gallery" className="relative group/galleryImage">
            <Image
              className="cursor-pointer hover:brightness-75 transition-all duration-500 w-full h-auto"
              src="/assets/images/general/post-image.jpg"
              alt=""
              width={80}
              height={80}
            ></Image>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white opacity-0 group-hover/galleryImage:opacity-100 duration-500 cursor-pointer">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white text-sm"
              />
            </div>
          </label>
          <label htmlFor="gallery" className="relative group/galleryImage">
            <Image
              className="cursor-pointer hover:brightness-75 transition-all duration-500 w-full h-auto"
              src="/assets/images/general/post-image.jpg"
              alt=""
              width={80}
              height={80}
            ></Image>
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white opacity-0 group-hover/galleryImage:opacity-100 duration-500 cursor-pointer">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-white text-sm"
              />
            </div>
          </label>

          <input
            type="checkbox"
            id="gallery"
            className="peer/modal fixed appearance-none opacity-0"
          />

          <label
            htmlFor="gallery"
            className="pointer-events-none invisible z-50 fixed inset-0 overflow-hidden bg-black/75 opacity-0 transition-all duration-300 peer-checked/modal:pointer-events-auto peer-checked/modal:opacity-100 peer-checked/modal:visible"
          >
            <div className="relative flex justify-center items-center h-full w-full">
              <label
                htmlFor=""
                className="absolute top-0 right-0 w-[200px] h-[100px] justify-between py-6 px-6 flex text-white"
              >
                <FontAwesomeIcon
                  className="text-lg p-1 text-gray-200 hover:text-white cursor-pointer"
                  icon={faCropSimple}
                />
                <FontAwesomeIcon
                  className="text-lg p-1 text-gray-200 hover:text-white cursor-pointer"
                  icon={faMagnifyingGlassPlus}
                />
                <FontAwesomeIcon
                  className="text-lg p-1 text-gray-200 hover:text-white cursor-pointer"
                  icon={faShare}
                />
                <label htmlFor="gallery" className="block h-fit">
                  <FontAwesomeIcon
                    className="text-xl p-1 text-gray-200 hover:text-white cursor-pointer"
                    icon={faXmark}
                  />
                </label>
              </label>

              <label htmlFor="">
                <div>
                  <Image
                    src="/assets/images/general/post-image.jpg"
                    alt=""
                    width={500}
                    height={500}
                  ></Image>
                </div>
              </label>
            </div>
          </label>
        </div>
        {/* end: gallery */}
      </div>
    </>
  );
}
