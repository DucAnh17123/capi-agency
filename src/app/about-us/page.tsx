"use client";

import Link from "next/link";

import PageTitle from "@/components/pageTitle";
import Services from "@/components/services";
import UserCard from "@/components/userCard";



export default function AboutUs() {
  const serviceItems = [
    {
      serviceName: "UI/UX",
      serviceSub:
        "The digital landscape is ever-evolving, and digital agencies stay at the forefront of technology and industry trends.",
    },
    {
      serviceName: "BRANDING",
      serviceSub:
        "The digital landscape is ever-evolving, and digital agencies stay at the forefront of technology and industry trends.",
    },
    {
      serviceName: "Strategy",
      serviceSub:
        "The digital landscape is ever-evolving, and digital agencies stay at the forefront of technology and industry trends.",
    },
    {
      serviceName: "Interface",
      serviceSub:
        "The digital landscape is ever-evolving, and digital agencies stay at the forefront of technology and industry trends.",
    },
    {
      serviceName: "motion",
      serviceSub:
        "The digital landscape is ever-evolving, and digital agencies stay at the forefront of technology and industry trends.",
    },
  ];
  return (
    <div className="space-y-20 xl:space-y-[7rem] mb-[7rem]">
      <PageTitle title="about us" subTitle="about us"/>

      <div className="2xl:container 2xl:mx-auto">
        <div className="relative w-full pt-[40%] h-auto bg-[url('/assets/images/general/about-us-bg.jpg')] bg-center bg-cover bg-no-repeat">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto flex justify-center my-20">
        <div className="basis-full xl:basis-10/12 2xl:basis-9/12">
          <div className="text-sm text-gray-400 font-semibold uppercase my-2">
            (sustained success)
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-10 xl:gap-24">
            <div className="basis-full md:basis-1/2">
              <div className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold xl:leading-[4.5rem] tracking-tight">
                Fusing Art and Technology
              </div>
              <button className="py-1 px-2 text-xs text-red-400 uppercase font-semibold border-[1px] border-red-400 rounded-full hover:bg-red-400 hover:text-white mt-6">
                Motto@gmail.com
              </button>
            </div>

            <div className="basis-full md:basis-1/2">
              <div className="text-xl font-medium">
                We offer a comprehensive suite of services to cater to various
                aspects of a client’s needs.
              </div>
              <div className="text-sm text-gray-400 font-medium text-justify leading-8 mt-3">
                These agencies leverage digital technologies and platforms to
                create, implement, and optimize digital marketing strategies,
                web development projects, and other online initiatives. Digital
                agencies are at the forefront of the digital landscape,
                combining creative and technical expertise to help clients
                thrive in the digital world.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-24 mt-20">
            <div className="relative text-9xl font-semibold">
              370+
              <div className="absolute top-[70%] bg-white left-0 w-full py-6 border-t-[1px] border-black text-lg text-gray-500 font-medium">
                Creating and Optimizing Websites
              </div>
            </div>
            <div className="relative text-9xl font-semibold">
              10+
              <div className="absolute top-[70%] bg-white left-0 w-full py-6 border-t-[1px] border-black text-lg text-gray-500 font-medium">
                Brand Awareness and Recognition
              </div>
            </div>
            <div className="relative text-9xl font-semibold">
              4x
              <div className="absolute top-[70%] bg-white left-0 w-full py-6 border-t-[1px] border-black text-lg text-gray-500 font-medium">
                Measure and Analyze Performance
              </div>
            </div>
            <div className="relative text-9xl font-semibold">
              50%
              <div className="absolute top-[70%] bg-white left-0 w-full py-6 border-t-[1px] border-black text-lg text-gray-500 font-medium">
                Increase Conversions and Sales
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* begin: services */}
      <Services
        title="our services"
        serviceItems={serviceItems}
        imageUrl="/assets/images/general/banner-home-2.jpg"
      />
      {/* end: services */}

      {/* begin: our incredible team */}
      <div className="container mx-auto flex justify-center">
        <div className="basis-full 2xl:basis-9/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-[1.25rem] gap-7">
          <div className="md:col-span-2 xl:col-span-1">
            <div className="text-sm text-gray-400 font-semibold uppercase my-2">
              (SKILLED PROFESSIONALS)
            </div>
            <div className="text-4xl md:text-5xl xl:text-6xl font-bold xl:leading-[4.5rem]">
              Our Incredible Team
            </div>
            <Link href="/our-team" className="block mb-6 xl:mb-0">
              <div className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold mt-3 xl:mt-6">
                View all team
                <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-150 duration-500"></div>
              </div>
            </Link>
          </div>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />

          <div className="md:col-span-2 xl:col-span-1">
            <div className="relative w-full h-[77%] border-0 xl:border-[1px] border-black">
              <Link
                href="/our-team"
                className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] mt-6 xl:mt-0"
              >
                <div className="group/btn flex items-center gap-2 uppercase text-sm font-semibold px-3 py-1 border-[1px] border-black xl:border-0 rounded-full">
                  join to the team
                  <div className="w-2 h-2 bg-black rounded-full group-hover/btn:scale-150 duration-500"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end: our incredible team */}
    </div>
  );
}
