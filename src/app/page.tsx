import Image from "next/image";
import Banner from "@/components/banner";
import Process from "@/components/process";
import UserSlider from "@/components/userSlider";
import Services from "@/components/services";
import ProductCard from "@/components/productCard";
import ListPage from "@/components/pageList";
import NewsCard from "@/components/newsCard";
import Link from "next/link";

import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  const serviceItems = [
    {
      serviceName: "CHIẾN LƯỢC",
      serviceSub:
        "Chúng tôi phát triển chiến lược sản phẩm và định hướng giải pháp cho quá trình phát triển bền vững của phần mềm.",
    },
    {
      serviceName: "BRANDING",
      serviceSub:
        "Chúng tôi xây dựng chiến lược thương hiệu và đồng hành cùng doanh nghiệp trong việc phát triển thương hiệu trên thị trường.",
    },
    {
      serviceName: "UI/UX",
      serviceSub:
        "Chúng tôi cung cấp dịch vụ thiết kế trải nghiệm người dùng (UX) và giao diện phần mềm (UI) cho các sản phẩm số.",
    },
    {
      serviceName: "PHÁT TRIỂN",
      serviceSub:
        "Chúng tôi hỗ trợ phát triển các sản phẩm phần mềm trong nhiều nền tảng với nhu cầu cụ thể từ khách hàng",
    },
    {
      serviceName: "ĐO LƯỜNG",
      serviceSub:
        "Chúng tôi đo lường chỉ số sử dụng của người dùng và báo cáo mọi vấn đề trực tiếp cho khách hàng và đội ngũ phát triển.",
    },
  ];

  return (
    <>
      <Banner />

      {/* begin: about capi agency */}
      <div className="container mx-auto mt-[9.5rem]">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="uppercase text-sm font-semibold text-gray-500">
            (VỀ CAPI AGENCY)
          </div>
          <div className="text-7xl leading-[5rem] font-semibold px-28">
            Đơn vị tiên phong trong{" "}
            <span className="text-green-500">đo lường</span>,{" "}
            <span className="text-yellow-500">phân tích</span> và định hướng{" "}
            <span className="text-red-500">trải nghiệm</span> cho sản phẩm của
            bạn.
          </div>
          <button className="group/btn btn-primary mt-10 flex items-center gap-3">
            Tải portfolio.pdf
            <div className="group-hover/btn:scale-150 group-hover/btn:bg-white w-2 h-2 rounded-full bg-black transition-all duration-500"></div>
          </button>
        </div>
      </div>
      {/* end: about capi agency */}

      {/* begin: product list */}

      {/* <div>
        <AnimatedCursor
            innerSize={20}
            outerSize={8}
            color="0, 0, 0"
            outerAlpha={0.3}
            innerScale={0.7}
            outerScale={12}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
              {
                target: ".custom",
                // options: {
                //   innerSize: 12,
                //   outerSize: 12,
                //   color: "255, 255, 255",
                //   outerAlpha: 0.3,
                //   innerScale: 0.7,
                //   outerScale: 5,
                // },
              },
            ]}
          />
      </div> */}

      <div className="flex justify-between gap-4 mt-[9.5rem] px-4">
        <div className="flex-1 hover:flex-[3] transition-all duration-[400ms] ease-in">
          <ProductCard />
        </div>

        <div className="flex-1 hover:flex-[3] transition-all duration-[400ms] ease-in">
          <ProductCard />
        </div>

        <div className="flex-1 hover:flex-[3] transition-all duration-[400ms] ease-in">
          <ProductCard />
        </div>

        <div className="flex-1 hover:flex-[3] transition-all duration-[400ms] ease-in">
          <ProductCard />
        </div>
      </div>

      {/* begin: product list */}

      {/* begin: services */}
      <Services
        title="(DỊCH VỤ CỐT LÕI)"
        serviceItems={serviceItems}
        imageUrl="/assets/images/general/banner-home-2.jpg"
      />
      {/* begin: services */}

      <Process
        title="QUY TRÌNH TRIỂN KHAI"
        subTitle="(TỐC ĐỘ VÀ CHẤT LƯỢNG VƯỢT TRỘI)"
        btnText="tất cả quy trình"
        backgroundColor="#fff"
        textColor="#000"
      />
      <UserSlider />

      {/* begin: news */}
      <div className="my-20 container mx-auto ">
        <div className="w-full h-[40px] relative">
          <div className="absolute top-0 left-0 translate-x-[-50%] border-[20px] w-0 h-0 border-t-yellow-500 border-x-transparent border-b-transparent rotate-45"></div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-400 uppercase my-2">
              (HOW IT WORKINGS)
            </div>
            <div className="text-5xl font-semibold uppercase mt-4">
              Our Latest News
            </div>
          </div>
          <button className="group/btn btn-primary mt-10 flex items-center gap-3">
            View all news
            <div className="group-hover/btn:scale-125 group-hover/btn:bg-white w-2 h-2 rounded-full bg-black transition-all duration-700"></div>
          </button>
        </div>

        <div className="mt-6 flex gap-6">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
      {/* end: news */}

      {/* begin: next page */}

      <ListPage />

      {/* end: next page */}
    </>
  );
}
