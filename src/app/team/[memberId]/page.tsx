"use client";

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXTwitter,
    faFacebookF,
    faLinkedinIn,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";


import PageTitle from "@/app/team/components/pageTitle";
import Counter from "@/app/team/components/counter";



export default function MemberDetail() {
  

  return (
    <div>
      <PageTitle title="team" memberName="Anna-Marry Scott" />

      <div className="container mx-auto flex justify-center my-20">
        <div className="basis-9/12">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <div className="w-full pt-[100%] bg-[url('/assets/images/general/user-image.jpg')] bg-center bg-cover bg-no-repeat"></div>
            </div>

            <div className="space-y-16">
              <div className="space-y-6">
                <div>
                  <div className="text-sm uppercase font-semibold text-yellow-500 transition-colors duration-500">
                    ui/ux Designer
                  </div>

                  <div className="text-[2.5rem] leading-[2.7rem] font-bold mt-3">
                    Anna-Marry Scott
                  </div>
                </div>

                <div className="text-sm leading-7 text-gray-600">
                  Digital agencies focus on understanding their clients&apos;
                  business goals, target audience, and unique challenges.
                </div>

                <div className="flex gap-8">
                  <div className="space-y-3 text-gray-400 font-medium">
                    <div>Responsibility</div>
                    <div>Experience</div>
                    <div>Email</div>
                  </div>

                  <div className="space-y-3 text-gray-600 font-semibold">
                    <div>Senior Developer</div>
                    <div>10 years</div>
                    <div>james_taylor@mail.com</div>
                  </div>
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
                        icon={faLinkedinIn}
                      />
                    </div>
                  </Link>
                  <Link href="">
                    <div>
                      <FontAwesomeIcon
                        className="text-sm text-gray-400 hover:text-gray-600 "
                        icon={faInstagram}
                      />
                    </div>
                  </Link>
                </div>
              </div>

              {/* begin: content */}
              <div className="space-y-8">
                {/* begin:experience */}
                <div>
                  <div className="text-[1.6rem] font-bold mb-3">Experience</div>
                  <div className="text-sm leading-7 text-gray-600">
                    Since joining team in 2009, he has played a vital role in
                    transforming the company from a group of tech-savvy
                    individuals working with startups into a leading provider of
                    Digital Product Engineering Services worldwide, with a focus
                    on assisting Fortune 500 companies with their innovation
                    initiatives.
                  </div>
                </div>
                {/* end: experience */}

                {/* begin: skills */}
                <div>
                  <div className="text-[1.6rem] font-bold mb-4">Skills</div>
                  <div className="space-y-5 mb-10">
                    <div>
                      <div className="text-sm uppercase font-medium text-gray-500 mb-2">
                        Frontend
                      </div>
                      <div className="w-full">
                        <div className="w-[80%] overflow-hidden">
                          <div className="relative h-[4px] w-[60%] bg-gray-600 animate-scaleGrow origin-left my-2">
                            <div className="absolute top-[50%] translate-y-[-50%] right-[0] translate-x-full animate-paddingLeft pl-[10px]">
                              <Counter limit={60} />%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm uppercase font-medium text-gray-500 mb-2">
                        Backend
                      </div>
                      <div className="w-full">
                        <div className="w-[80%] overflow-hidden">
                          <div className="relative h-[4px] w-[80%] bg-gray-600 animate-scaleGrow origin-left my-2">
                            <div className="absolute top-[50%] translate-y-[-50%] right-0 translate-x-full animate-paddingLeft pl-[10px]">
                              <Counter limit={80} />%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end: skills */}

                {/* begin: career */}
                <div>
                  <div className="text-[1.6rem] font-bold mb-4">Career</div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-7">
                      <div className="col-span-1 text-lg font-semibold">
                        2010
                      </div>
                      <div className="col-span-6 text-sm leading-7 text-gray-600">
                        Clients can assess the impact of their digital
                        investments through metrics like website traffic.
                      </div>
                    </div>

                    <div className="grid grid-cols-7">
                      <div className="col-span-1 text-lg font-semibold">
                        2015
                      </div>
                      <div className="col-span-6 text-sm leading-7 text-gray-600">
                        This client-centric approach enables them to develop
                        tailored strategies that align with their clients’
                        objectives and deliver measurable results.
                      </div>
                    </div>
                  </div>
                </div>
                {/* end: career */}
              </div>

              {/* end: content */}

              {/* begin: contact  */}
              <div>
                <div className="text-[1.6rem] font-bold mb-2">Contact me</div>
                <div className="col-span-10 text-sm leading-7 text-gray-600">
                  Your email address will not be published. Required fields are
                  marked *
                </div>
                <form action="" className="space-y-7 mt-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full pr-4 py-2 border-b-[1px] border-gray-700 outline-none text-sm placeholder:text-gray-500 focus:placeholder:text-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full pr-4 py-2 border-b-[1px] border-gray-700 outline-none text-sm placeholder:text-gray-500 focus:placeholder:text-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Your Website"
                    className="w-full pr-4 py-2 border-b-[1px] border-gray-700 outline-none text-sm placeholder:text-gray-500 focus:placeholder:text-transparent"
                  />
                  <textarea
                    placeholder="Your comments"
                    className="w-full h-pull pr-4 py-2 border-b-[1px] border-gray-700 outline-none text-sm placeholder:text-gray-500 focus:placeholder:text-transparent"
                  ></textarea>
                  <button className="group/btnSend py-4 px-5 bg-black rounded-full text-white text-sm font-semibold uppercase flex items-center gap-2 mt-10 hover:bg-[#e44f39] transition-colors duration-700 ease-in-out">
                    get in touch
                    <div className="group-hover/btnSend:scale-150 duration-700 w-[6px] h-[6px] bg-white rounded-full"></div>
                  </button>
                </form>
              </div>
              {/* end: contact  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
