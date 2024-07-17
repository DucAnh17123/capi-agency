import Link from "next/link";

import PageTitle from "@/components/pageTitle";
import ProductCard from "@/components/productCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioCategory() {
  return (
    <div>
      <PageTitle title="PORTFOLIO" subTitle='ARCHIVE BY CATEGORY "WEBSITE"' />

      <div className="container mx-auto flex justify-center my-10 xl:my-20">
        <div className="basis-full xl:basis-10/12 2xl:basis-9/12">
          <div className="text-center text-3xl font-semibold tracking-tight">
            Portfolio Category: <span className="text-yellow-500">website</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-14 gap-8 md:gap-[1.5rem] lg:gap-[2rem] xl:gap-8">
            <ProductCard isFixHeight={false} />
            <ProductCard isFixHeight={false} />
            <ProductCard isFixHeight={false} />
            <ProductCard isFixHeight={false} />
            <ProductCard isFixHeight={false} />
            <ProductCard isFixHeight={false} />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mb-20">
        <div className="flex gap-2">
          <div className="relative text-white bg-black rounded-full border-[1px] border-black w-[36px] h-[36px] text-sm font-semibold hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              1
            </div>
          </div>
          <div className="relative rounded-full border-[1px] border-black w-[36px] h-[36px] text-sm font-semibold hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              2
            </div>
          </div>
          <div className="relative rounded-full border-[1px] border-black w-[36px] h-[36px] text-sm font-semibold hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer">
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              3
            </div>
          </div>
          <div className="relative rounded-full border-[1px] border-black w-[36px] h-[36px] text-sm font-semibold hover:bg-black hover:text-white transition-all duration-300 cursor-pointer rotate-45 hover:rotate-0">
            <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
