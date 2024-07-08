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

import PageTitle from "@/components/pageTitle";
import NewsCard from "@/components/newsCard";

export default function News() {
  return (
    <div>
      <PageTitle title="news" />

      <div className="container mx-auto my-20 flex flex-row justify-center">
        <div className="basis-9/12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-9">
              <div className="grid grid-cols-2 gap-6">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
              </div>
              <div className="flex justify-center items-center py-14">
                <button className="group/btn btn-primary hover:bg-yellow-500 hover:border-transparent  flex items-center gap-3">
                  Load more posts
                  <div className="group-hover/btn:scale-125 group-hover/btn:bg-white w-2 h-2 rounded-full bg-black transition-all duration-700"></div>
                </button>
              </div>
            </div>

            <div className="col-span-3">
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
                    <Link href="" className="flex gap-3 items-start group/link">
                      <FontAwesomeIcon
                        icon={faFile}
                        className="text-xs text-gray-400 group-hover/link:text-yellow-500 mt-1"
                      />
                      <div className="text-sm text-gray-500 font-semibold">
                        Unraveling Marketing Trends
                      </div>
                    </Link>
                    <Link href="" className="flex gap-3 items-start group/link">
                      <FontAwesomeIcon
                        icon={faFile}
                        className="text-xs text-gray-400 group-hover/link:text-yellow-500 mt-1"
                      />
                      <div className="text-sm text-gray-500 font-semibold">
                        Navigating the Digital Landscape
                      </div>
                    </Link>
                    <Link href="" className="flex gap-3 items-start group/link">
                      <FontAwesomeIcon
                        icon={faFile}
                        className="text-xs text-gray-400 group-hover/link:text-yellow-500 mt-1"
                      />
                      <div className="text-sm text-gray-500 font-semibold">
                        Unlocking the Power of Photo
                      </div>
                    </Link>
                    <Link href="" className="flex gap-3 items-start group/link">
                      <FontAwesomeIcon
                        icon={faFile}
                        className="text-xs text-gray-400 group-hover/link:text-yellow-500 mt-1"
                      />
                      <div className="text-sm text-gray-500 font-semibold">
                        Exploring UI/UX Trends 2024
                      </div>
                    </Link>
                    <Link href="" className="flex gap-3 items-start group/link">
                      <FontAwesomeIcon
                        icon={faFile}
                        className="text-xs text-gray-400 group-hover/link:text-yellow-500 mt-1"
                      />
                      <div className="text-sm text-gray-500 font-semibold">
                        The Psychology of Color in Branding
                      </div>
                    </Link>
                  </div>
                </div>
                {/* end: recent posts */}

                {/* begin:motto agency */}
                <div className="relative w-full pt-[130%] bg-[url('/assets/images/general/motto-agency.jpg')] bg-center bg-cover bg-no-repeat">
                  <Link
                    href=""
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
                {/* end:motto agency */}

                {/* begin: archives */}
                <div>
                  <div className="text-xl text-primary font-semibold mb-4">
                    Archives
                  </div>
                  <div className="space-y-1">
                    <Link href="" className="relative block w-full group/link">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="absolute top-0 left-0 text-xl w-0 opacity-0 group-hover/link:w-[10px] group-hover/link:opacity-100 text-yellow-500 mt-[2px] duration-300"
                      />
                      <div className="text-md text-gray-400 font-medium group-hover/link:pl-5 group-hover/link:text-gray-600 transition-all duration-300">
                        January 2024
                      </div>
                    </Link>
                    <Link href="" className="relative block w-full group/link">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="absolute top-0 left-0 text-xl w-0 opacity-0 group-hover/link:w-[10px] group-hover/link:opacity-100 text-yellow-500 mt-[2px] duration-300"
                      />
                      <div className="text-md text-gray-400 font-medium group-hover/link:pl-5 group-hover/link:text-gray-600 transition-all duration-300">
                        December 2023
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
                    <Link href="" className="relative block w-full group/link">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="absolute top-0 left-0 text-xl w-0 opacity-0 group-hover/link:w-[10px] group-hover/link:opacity-100 text-yellow-500 mt-[2px] duration-300"
                      />
                      <div className="text-md text-gray-400 font-medium group-hover/link:pl-5 group-hover/link:text-gray-600 transition-all duration-300">
                        Branding (4)
                      </div>
                    </Link>
                    <Link href="" className="relative block w-full group/link">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="absolute top-0 left-0 text-xl w-0 opacity-0 group-hover/link:w-[10px] group-hover/link:opacity-100 text-yellow-500 mt-[2px] duration-300"
                      />
                      <div className="text-md text-gray-400 font-medium group-hover/link:pl-5 group-hover/link:text-gray-600 transition-all duration-300">
                        Design (4)
                      </div>
                    </Link>
                    <Link href="" className="relative block w-full group/link">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="absolute top-0 left-0 text-xl w-0 opacity-0 group-hover/link:w-[10px] group-hover/link:opacity-100 text-yellow-500 mt-[2px] duration-300"
                      />
                      <div className="text-md text-gray-400 font-medium group-hover/link:pl-5 group-hover/link:text-gray-600 transition-all duration-300">
                        Digital (4)
                      </div>
                    </Link>
                    <Link href="" className="relative block w-full group/link">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="absolute top-0 left-0 text-xl w-0 opacity-0 group-hover/link:w-[10px] group-hover/link:opacity-100 text-yellow-500 mt-[2px] duration-300"
                      />
                      <div className="text-md text-gray-400 font-medium group-hover/link:pl-5 group-hover/link:text-gray-600 transition-all duration-300">
                        Ideals (4)
                      </div>
                    </Link>
                    <Link href="" className="relative block w-full group/link">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="absolute top-0 left-0 text-xl w-0 opacity-0 group-hover/link:w-[10px] group-hover/link:opacity-100 text-yellow-500 mt-[2px] duration-300"
                      />
                      <div className="text-md text-gray-400 font-medium group-hover/link:pl-5 group-hover/link:text-gray-600 transition-all duration-300">
                        Technology (4)
                      </div>
                    </Link>
                  </div>
                </div>
                {/* end: Categories */}

                {/* begin: User card */}
                <div className="relative w-full pt-[150%] bg-[url('/assets/images/general/user-image.jpg')] bg-center bg-cover bg-no-repeat">
                  <div className="absolute bottom-0 left-0 right-0 text-white p-6">
                    <div className="text-xs font-medium uppercase">
                      author of blog
                    </div>
                    <div className="text-2xl font-bold mt-1 mb-3">
                      Tomm Beross
                    </div>
                    <div className="flex items-center gap-5">
                      <Link href="">
                        <FontAwesomeIcon
                          className="text-sm font-semibold hover:opacity-70"
                          icon={faXTwitter}
                        />
                      </Link>
                      <Link href="">
                        <FontAwesomeIcon
                          className="text-sm font-semibold hover:opacity-70"
                          icon={faFacebookF}
                        />
                      </Link>
                      <Link href="">
                        <FontAwesomeIcon
                          className="text-sm font-semibold hover:opacity-70"
                          icon={faLinkedinIn}
                        />
                      </Link>
                      <Link href="">
                        <FontAwesomeIcon
                          className="text-sm font-semibold hover:opacity-70"
                          icon={faInstagram}
                        />
                      </Link>
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
                    <Link href="" className="grid grid-cols-3 gap-4">
                      <Image
                        className="col-span-1"
                        src="/assets/images/general/post-image.jpg"
                        alt=""
                        width={80}
                        height={80}
                      ></Image>
                      <div className="col-span-2 flex flex-col justify-between">
                        <div className="text-sm text-gray-400 font-semibold uppercase">
                          (January 2024)
                        </div>
                        <div className="text-base leading-[22px] text-gray-600 font-semibold">
                          Unraveling Marketing Trends
                        </div>
                      </div>
                    </Link>
                    <Link href="" className="flex gap-4">
                      <Image
                        src="/assets/images/general/post-image.jpg"
                        alt=""
                        width={80}
                        height={80}
                      ></Image>
                      <div className="flex flex-col justify-between">
                        <div className="text-sm text-gray-400 font-semibold uppercase">
                          (January 2024)
                        </div>
                        <div className="text-base leading-[22px] text-gray-600 font-semibold">
                          Unraveling Marketing Trends
                        </div>
                      </div>
                    </Link>
                    <Link href="" className="flex gap-4">
                      <Image
                        src="/assets/images/general/post-image.jpg"
                        alt=""
                        width={80}
                        height={80}
                      ></Image>
                      <div className="flex flex-col justify-between">
                        <div className="text-sm text-gray-400 font-semibold uppercase">
                          (January 2024)
                        </div>
                        <div className="text-base leading-[22px] text-gray-600 font-semibold">
                          Unraveling Marketing Trends
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
                    <button className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500">
                      branding
                    </button>
                    <button className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500">
                      design
                    </button>
                    <button className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500">
                      development
                    </button>
                    <button className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500">
                      digital
                    </button>
                    <button className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500">
                      innovation
                    </button>
                    <button className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500">
                      marketing
                    </button>
                    <button className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500">
                      mobile
                    </button>
                    <button className="w-fit font-medium cursor-pointer text-xs text-black py-1 px-2 rounded-full border-[1px] border-black hover:bg-black hover:text-white transition-colors duration-500">
                      technology
                    </button>
                  </div>
                </div>
                {/* end: popular tags */}

                {/* begin: gallery */}
                <div className="text-xl text-primary font-semibold mb-5">
                  Gallery
                </div>
                <div className="grid grid-cols-3 gap-4 w-full">
                  <label
                    htmlFor="gallery"
                    className="relative group/galleryImage"
                  >
                    <Image
                      className="cursor-pointer hover:brightness-75 transition-all duration-500"
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
                  <label
                    htmlFor="gallery"
                    className="relative group/galleryImage"
                  >
                    <Image
                      className="cursor-pointer hover:brightness-75 transition-all duration-500"
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
                  <label
                    htmlFor="gallery"
                    className="relative group/galleryImage"
                  >
                    <Image
                      className="cursor-pointer hover:brightness-75 transition-all duration-500"
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
                  <label
                    htmlFor="gallery"
                    className="relative group/galleryImage"
                  >
                    <Image
                      className="cursor-pointer hover:brightness-75 transition-all duration-500"
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
                  <label
                    htmlFor="gallery"
                    className="relative group/galleryImage"
                  >
                    <Image
                      className="cursor-pointer hover:brightness-75 transition-all duration-500"
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
                  <label
                    htmlFor="gallery"
                    className="relative group/galleryImage"
                  >
                    <Image
                      className="cursor-pointer hover:brightness-75 transition-all duration-500"
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
                        <FontAwesomeIcon className="text-lg text-gray-200 hover:text-white cursor-pointer" icon={faCropSimple} />
                        <FontAwesomeIcon className="text-lg text-gray-200 hover:text-white cursor-pointer" icon={faMagnifyingGlassPlus} />
                        <FontAwesomeIcon className="text-lg text-gray-200 hover:text-white cursor-pointer" icon={faShare} />
                        <FontAwesomeIcon className="text-lg text-gray-200 hover:text-white cursor-pointer" icon={faXmark} />
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

                  {/* <div className="relative group/galleryImage">
                    <Image
                      className="cursor-pointer hover:brightness-75 transition-all duration-500"
                      src="/assets/images/general/post-image.jpg"
                      alt=""
                      width={80}
                      height={80}
                    ></Image>
                    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white opacity-0 group-hover/galleryImage:opacity-100 duration-500">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="text-white text-sm"
                      />
                    </div>
                  </div>
                  <div className="relative group/galleryImage">
                    <Image
                      className="cursor-pointer hover:brightness-75 transition-all duration-500"
                      src="/assets/images/general/post-image.jpg"
                      alt=""
                      width={80}
                      height={80}
                    ></Image>
                    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white opacity-0 group-hover/galleryImage:opacity-100 duration-500">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="text-white text-sm"
                      />
                    </div>
                  </div>
                  <div className="relative group/galleryImage">
                    <Image
                      className="cursor-pointer hover:brightness-75 transition-all duration-500"
                      src="/assets/images/general/post-image.jpg"
                      alt=""
                      width={80}
                      height={80}
                    ></Image>
                    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white opacity-0 group-hover/galleryImage:opacity-100 duration-500">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="text-white text-sm"
                      />
                    </div>
                  </div>
                  <div className="relative group/galleryImage">
                    <Image
                      className="cursor-pointer hover:brightness-75 transition-all duration-500"
                      src="/assets/images/general/post-image.jpg"
                      alt=""
                      width={80}
                      height={80}
                    ></Image>
                    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white opacity-0 group-hover/galleryImage:opacity-100 duration-500">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="text-white text-sm"
                      />
                    </div>
                  </div>
                  <div className="relative group/galleryImage">
                    <Image
                      className="cursor-pointer hover:brightness-75 transition-all duration-500"
                      src="/assets/images/general/post-image.jpg"
                      alt=""
                      width={80}
                      height={80}
                    ></Image>
                    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-white opacity-0 group-hover/galleryImage:opacity-100 duration-500">
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="text-white text-sm"
                      />
                    </div>
                  </div> */}
                </div>
                {/* end: gallery */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
