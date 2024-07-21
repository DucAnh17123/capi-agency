"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";

import PageTitle from "@/components/pageTitle";
import Process from "@/components/process";
import Services from "@/components/services";

export default function Service() {
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
    <div className="w-full">
      <PageTitle title="Services" subTitle="services" />

      <div className="mt-[6rem]">
        <Process
          title="Our Capabilities"
          subTitle="(how it workings)"
          btnText="View all capabilities"
          backgroundColor="#fff"
          textColor="#000"
        />
      </div>

      <Services
        title="our services"
        serviceItems={serviceItems}
        imageUrl="/assets/images/general/banner-home-2.jpg"
      />

      <div className="container mx-auto my-[9.5rem]">
        <div className="text-sm text-gray-400 font-semibold uppercase my-1">
          (Features)
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-3 xl:col-span-1">
            <div className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold xl:leading-[5.5rem] tracking-tight lg:tracking-tighter">
              Crafting Personalized Solutions
            </div>
            <button className="group/btn btn-primary flex items-center gap-3 mt-5">
              get in touch
              <div className="group-hover/btn:scale-125 group-hover/btn:bg-white w-2 h-2 rounded-full bg-black transition-all duration-700"></div>
            </button>
          </div>

          <div className="col-span-3 xl:col-span-2">
            <div className="grid grid-cols-2 gap-16 items-center h-full">
              <Link href="" className="col-span-2 md:col-span-1">
                <div className="flex gap-6">
                  <div>
                    <FontAwesomeIcon icon={faShapes} className="text-5xl" />
                  </div>
                  <div className="space-y-3">
                    <div className="text-3xl font-semibold ">
                      Quality Content
                    </div>
                    <div className="text-gray-500 font-medium">
                      Content Strategy, Graphic Design, marketing Design
                      Collateral, Packaging, Print Design, Illustration
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="" className="col-span-2 md:col-span-1">
                <div className="flex gap-6">
                  <div>
                    <FontAwesomeIcon icon={faShapes} className="text-5xl" />
                  </div>
                  <div className="space-y-3">
                    <div className="text-3xl font-semibold ">
                      Mobile Solutions
                    </div>
                    <div className="text-gray-500 font-medium">
                      Brand Identity, Brand Strategy, Logo Design, Messaging,
                      Positioning, Art Direction, Brand Guidelines
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="" className="col-span-2 md:col-span-1">
                <div className="flex gap-6">
                  <div>
                    <FontAwesomeIcon icon={faShapes} className="text-5xl" />
                  </div>
                  <div className="space-y-3">
                    <div className="text-3xl font-semibold ">Web Solution</div>
                    <div className="text-gray-500 font-medium">
                      Web Design, Web Development, UI/UX, Wireframes,
                      Copywriting, E-Commerce, SEO, CMS, Analytics/Tracking
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="" className="col-span-2 md:col-span-1">
                <div className="flex gap-6">
                  <div>
                    <FontAwesomeIcon icon={faShapes} className="text-5xl" />
                  </div>
                  <div className="space-y-3">
                    <div className="text-3xl font-semibold ">
                      Custom Strategy
                    </div>
                    <div className="text-gray-500 font-medium">
                      Web Design, Web Development, UI/UX, Wireframes,
                      Copywriting, E-Commerce, SEO, CMS, Analytics/Tracking
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
