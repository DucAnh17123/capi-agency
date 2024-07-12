"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faFacebookF,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

import SideBar from "@/components/sideBar";
import PostBanner from "@/components/postBanner";
import NewsCard from "@/components/newsCard";
import Comments from "@/components/comments";

export default function PostDetail() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <div className="mt-header-height">
        <PostBanner />
      </div>

      <div className="container mx-auto my-20 flex flex-row justify-center">
        <div className="basis-9/12">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-9 space-y-12">
              {/* begin: post paragraph */}
              <div className="text-sm leading-7 text-gray-600 text-justify space-y-3">
                <div className="first-letter:text-black first-letter:text-4xl first-letter:font-semibold first-letter:mr-3 first-letter:float-left">
                  Digital marketing, staying ahead of the latest trends is
                  crucial for businesses aiming to create a strong online
                  presence and engage their target audience effectively. As
                  technology evolves, consumer behaviors shift, and new
                  platforms emerge, marketers must continuously adapt their
                  strategies to remain competitive. In this blog post, we embark
                  on a journey of digital discovery, exploring the latest
                  marketing trends that are shaping the way{" "}
                  <span className="text-yellow-500 italic underline">
                    brands connect with their audiences.
                  </span>{" "}
                  Video marketing continues to gain prominence as one of the
                  most powerful ways to engage and captivate audiences. Live
                  streaming and interactive videos further enhance engagement,
                  providing real-time interactions and authentic connections
                  with consumers.
                </div>
                <div>
                  Social media platforms are evolving into more than just places
                  for social interaction; they are becoming full-fledged
                  e-commerce marketplaces. Social commerce enables businesses to
                  sell products directly within social media platforms,
                  providing a seamless shopping experience for consumers. As
                  users increasingly embrace in-app purchasing, brands are
                  integrating social commerce strategies to boost conversions
                  and drive sales.
                </div>
              </div>
              {/* end: post paragraph */}

              {/* begin: post image */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <Image
                    className="w-full h-auto"
                    src="/assets/images/general/post-detail-image.jpg"
                    alt=""
                    width={200}
                    height={400}
                  ></Image>
                </div>
                <div>
                  <Image
                    className="w-full h-auto"
                    src="/assets/images/general/post-detail-image.jpg"
                    alt=""
                    width={200}
                    height={400}
                  ></Image>
                </div>
              </div>
              {/* end: post image */}

              {/* begin: Microinteractions with Macro Impact */}
              <div className="space-y-4">
                <div className="text-[1.7rem] font-semibold tracking-tight">
                  Microinteractions with Macro Impact
                </div>
                <div className="text-sm leading-7 text-gray-600 text-justify">
                  Microinteractions are subtle, interactive elements that
                  respond to user actions, providing feedback and enhancing the
                  overall user experience. From animated buttons and loading
                  indicators to playful hover effects, these tiny details add
                  personality and engagement to the interface. Well-crafted
                  microinteractions contribute to a delightful and memorable
                  user journey.
                </div>
              </div>
              {/* begin: Microinteractions with Macro Impact */}

              {/* begin: post image */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <Image
                    className="w-full h-auto"
                    src="/assets/images/general/post-detail-image.jpg"
                    alt=""
                    width={200}
                    height={400}
                  ></Image>
                </div>
                <div className="flex items-center">
                  <div className="space-y-10">
                    <div className="relative pl-14 space-y-3">
                      <div className="absolute top-[-10%] left-[0] text-8xl font-semibold text-yellow-500">
                        &quot;
                      </div>
                      <div className="text-[2.5rem] font-semibold leading-[3rem]">
                        Success is not the key to happiness.
                      </div>
                      <div className="text-xl text-gray-500">
                        Christina Grant
                      </div>
                    </div>

                    <div className="text-sm leading-7 text-gray-600 text-justify italic">
                      With the growing popularity of voice-activated devices and
                      virtual assistants, designers are incorporating voice user
                      interfaces (VUI) to complement traditional visual
                      interfaces. VUI allows users to interact with technology
                      using voice commands, making interactions more natural and
                      intuitive.
                    </div>
                  </div>
                </div>
              </div>
              {/* end: post image */}

              {/* begin: Augmented Reality (AR) Experiences */}
              <div className="space-y-4">
                <div className="text-[1.7rem] font-semibold tracking-tight">
                  Augmented Reality (AR) Experiences
                </div>
                <div className="text-sm leading-7 text-gray-600 text-justify">
                  As AR technology advances, designers are leveraging its
                  potential to create immersive and interactive experiences. AR
                  interfaces overlay digital elements onto the real world,
                  allowing users to interact with digital content in their
                  physical environment. AR opens up exciting possibilities for
                  industries such as retail, gaming, and education.
                  Three-dimensional illustrations and animations are
                  increasingly popular in UI/UX design. These dynamic elements
                  add depth and visual interest to interfaces, enhancing
                  storytelling and making the user experience more engaging.
                </div>
              </div>
              {/* begin: Augmented Reality (AR) Experiences */}

              {/* begin: tags */}
              <div className="space-y-9">
                <div className="flex justify-between">
                  <div className="flex justify-between gap-2">
                    <Link href="" className="block">
                      <div className="py-1 px-3 border-[1px] border-black rounded-full text-black text-xs font-semibold hover:text-white hover:bg-black transition-colors duration-300">
                        branding
                      </div>
                    </Link>
                    <Link href="" className="block">
                      <div className="py-1 px-3 border-[1px] border-black rounded-full text-black text-xs font-semibold hover:text-white hover:bg-black transition-colors duration-300">
                        development
                      </div>
                    </Link>
                    <Link href="" className="block">
                      <div className="py-1 px-3 border-[1px] border-black rounded-full text-black text-xs font-semibold hover:text-white hover:bg-black transition-colors duration-300">
                        digital
                      </div>
                    </Link>
                  </div>

                  <div className="flex items-center gap-5">
                    <Link href="">
                      <div>
                        <FontAwesomeIcon
                          className="text-sm text-gray-400 hover:text-gray-600"
                          icon={faXTwitter}
                        />
                      </div>
                    </Link>
                    <Link href="">
                      <div>
                        <FontAwesomeIcon
                          className="text-sm text-gray-400 hover:text-gray-600 "
                          icon={faFacebookF}
                        />
                      </div>
                    </Link>
                    <Link href="">
                      <div>
                        <FontAwesomeIcon
                          className="text-sm text-gray-400 hover:text-gray-600 "
                          icon={faPinterestP}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-700"></div>

                <div className="flex justify-between">
                  <div className="group space-y-3 cursor-pointer">
                    <button
                      onClick={handleBack}
                      className="py-1 px-3 border-[1px] border-black group-hover:border-yellow-500 rounded-full text-black text-xs uppercase font-semibold transition-colors duration-300"
                    >
                      <div className="relative group-hover:pl-4 transition-all duration-500 overflow-hidden group-hover:text-yellow-500">
                        prev
                        <FontAwesomeIcon
                          className="absolute top-[50%] translate-y-[-50%] left-0 w-auto translate-x-[-14px] group-hover:translate-x-0 group-hover:text-yellow-500 origin-left transition-all duration-500 text-md text-black"
                          icon={faArrowLeft}
                        />
                      </div>
                    </button>

                    <div className="text-lg font-semibold group-hover:underline">
                      Navigating the Digital Landscape
                    </div>
                  </div>

                  <div className="group space-y-3 cursor-pointer text-end">
                    <button
                      onClick={handleBack}
                      className="py-1 px-3 border-[1px] border-black group-hover:border-yellow-500 rounded-full text-black text-xs uppercase font-semibold transition-colors duration-300"
                    >
                      <div className="relative group-hover:pr-4 transition-all duration-500 overflow-hidden group-hover:text-yellow-500">
                        next
                        <FontAwesomeIcon
                          className="absolute top-[50%] translate-y-[-50%] right-0 w-auto translate-x-[14px] group-hover:translate-x-0 group-hover:text-yellow-500 origin-left transition-all duration-500 text-md text-black"
                          icon={faArrowRight}
                        />
                      </div>
                    </button>

                    <div className="text-lg font-semibold group-hover:underline">
                      Exploring UI/UX Trends 2024
                    </div>
                  </div>
                </div>
              </div>
              {/* end: tags */}

              <div>
                <div className="text-3xl font-bold mb-8">Related Posts</div>
                <div className="grid grid-cols-2 gap-10">
                  <NewsCard />
                  <NewsCard />
                </div>
              </div>

              {/* begin: comments */}
              <Comments />
              {/* end: comments */}
            </div>

            <div className="col-span-3">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
