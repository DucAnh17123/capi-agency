"use client";

import PageTitle from "@/components/pageTitle";
import NewsCard from "@/components/newsCard";
import SideBar from "@/components/sideBar";

import { useState, useEffect } from "react";
import { fetchNewsList } from "@/js/function";

// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "News - Capi Agency",
//   description: "Welcome to Capi Agency",
// };

export default function News() {
  const [news, setNews] = useState<any[]>([]);
  
  useEffect(() => {
    fetchNewsList().then((data) => {
      setNews(data);
    });
  }, []);
  
  console.log("🚀 ~ News ~ news:", news)
  return (
    <div>
      <PageTitle title="news" subTitle="news" />

      <div className="container mx-auto my-20 flex flex-row justify-center">
        <div className="basis-full xl:basis-10/12 2xl:basis-9/12">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 xl:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[1.5rem] lg:gap-[2rem] xl:gap-6">
                {news.map((item, index) => {
                  return (
                    <div key={index}>
                      <NewsCard news={item} />
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center py-14">
                <button className="group/btn btn-primary hover:bg-yellow-500 hover:border-transparent  flex items-center gap-3">
                  Load more posts
                  <div className="group-hover/btn:scale-125 group-hover/btn:bg-white w-2 h-2 rounded-full bg-black transition-all duration-700"></div>
                </button>
              </div>
            </div>

            <div className="col-span-12 xl:col-span-3">
              <SideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
