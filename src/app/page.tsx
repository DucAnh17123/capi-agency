import Image from "next/image";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center py-[9.5rem] text-center">
          <div className="uppercase text-sm font-semibold text-gray-500">(VỀ CAPI AGENCY)</div>
          <div className="text-7xl leading-[5rem] font-semibold px-[6rem]">
            Đơn vị tiên phong trong <span className="text-green-500">đo lường</span>, <span className="text-yellow-500">phân tích</span> và định hướng <span className="text-red-500">trải nghiệm</span> cho sản phẩm của bạn.
          </div>
          <button className="group/btn mt-10 border-[1px] border-black rounded-full text-sm font-semibold py-4 px-5 uppercase flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-500">Tải portfolio.pdf
            <div className="group-hover/btn:w-3 group-hover/btn:h-3 group-hover/btn:bg-white w-2 h-2 rounded-full bg-black transition-all duration-500"></div>
          </button>
        </div>
      </div>

      <div className="relative w-full pt-[50%] h-[1000px] bg-[url('/assets/images/general/banner-home-2.jpg')] bg-auto bg-no-repeat bg-center my-20">

      </div>
    </>
  );
}
