import Link from "next/link";


import PageTitle from "@/components/pageTitle";
import ProductCard from "@/components/productCard";

export default function OurPortfolio() {
  return (
    <div>
      <PageTitle title="Capi agency portfolio" subTitle="Capi agency portfolio"/>

      <div className="container mx-auto">
        <div className="flex justify-around gap-20">
          <div className="flex-1">
            <div className="text-sm text-gray-400 font-semibold uppercase my-1">
              (latest works)
            </div>
            <div className="text-7xl font-bold leading-[5.5rem]">Our cases</div>
          </div>

          <div className=" flex-1 text-sm text-gray-500 font-semibold uppercase my-1 text-end flex items-center justify-end">
            <div className="w-[70%]">
              OUR AGENCY IS A CREATIVE AND TECHNOLOGY-DRIVEN FIRM THAT
              SPECIALIZES IN PROVIDING A WIDE RANGE OF DIGITAL DESIGN SERVICES
              TO CLIENTS.
            </div>
          </div>
        </div>

        <div className="flex w-full gap-2 py-10">
          <div className="btn-secondary-black">all</div>
          <div className="btn-secondary-black">game ui</div>
          <div className="btn-secondary-black">web app</div>
          <div className="btn-secondary-black">website</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mx-6">
        <ProductCard isFixHeight={false} />
        <ProductCard isFixHeight={false} />
        <ProductCard isFixHeight={false} />
        <ProductCard isFixHeight={false} />
        <ProductCard isFixHeight={false} />
        <ProductCard isFixHeight={false} />
      </div>

      <div className="flex justify-center items-center pt-10 mb-20">
        <button className="group/btn btn-primary flex items-center gap-3">
          Load more projects
          <div className="group-hover/btn:scale-150 group-hover/btn:bg-white w-2 h-2 rounded-full bg-black transition-all duration-500"></div>
        </button>
      </div>
    </div>
  );
}
