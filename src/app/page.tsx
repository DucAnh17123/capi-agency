import Image from "next/image";
import Banner from "@/components/banner";
import Process from "@/components/process";
import UserList from "@/components/userList";
import News from "@/components/news";
import Services from "@/components/services";

import Link from "next/link";

import AnimatedCursor from "react-animated-cursor";

export default function Home() {

  const serviceItems = [
    { serviceName: 'CHIẾN LƯỢC', serviceSub: 'Chúng tôi phát triển chiến lược sản phẩm và định hướng giải pháp cho quá trình phát triển bền vững của phần mềm.' },
    { serviceName: 'BRANDING', serviceSub: 'Chúng tôi xây dựng chiến lược thương hiệu và đồng hành cùng doanh nghiệp trong việc phát triển thương hiệu trên thị trường.' },
    { serviceName: 'UI/UX', serviceSub: 'Chúng tôi cung cấp dịch vụ thiết kế trải nghiệm người dùng (UX) và giao diện phần mềm (UI) cho các sản phẩm số.' },
    { serviceName: 'PHÁT TRIỂN', serviceSub: 'Chúng tôi hỗ trợ phát triển các sản phẩm phần mềm trong nhiều nền tảng với nhu cầu cụ thể từ khách hàng' },
    { serviceName: 'ĐO LƯỜNG', serviceSub: 'Chúng tôi đo lường chỉ số sử dụng của người dùng và báo cáo mọi vấn đề trực tiếp cho khách hàng và đội ngũ phát triển.' },
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
          <div className="text-7xl leading-[5rem] font-semibold">
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
        <div className="group/image flex-1 hover:flex-[3] transition-all duration-[400ms] ease-in">
          <Link href="" className="block overflow-hidden">
            <div className="relative w-full h-[600px] bg-[url('/assets/images/general/product-image.png')] bg-no-repeat bg-auto bg-center group-hover/image:scale-[1.1] transition-transform ease-linear duration-200 delay-[400ms]">
              <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover/image:opacity-100 opacity-0 transition-all ease-in duration-[400ms]"></div>
            </div>
          </Link>
          <div className="font-semibold py-6 space-y-1">
            <div className="flex gap-1 text-gray-500 text-sm uppercase">
              <Link href="" className="hover:text-yellow-500">
                mobile app
              </Link>
              <div>-</div>
              <Link href="" className="hover:text-yellow-500">
                web app
              </Link>
              <div>-</div>
              <Link href="" className="hover:text-yellow-500">
                website
              </Link>
            </div>
            <Link href="">
              <div className="text-2xl font-bold">247 Express</div>
            </Link>
          </div>
        </div>

        <div className="group/image flex-1 hover:flex-[3] transition-all duration-[400ms] ease-in">
          <Link href="" className="block overflow-hidden">
            <div className="relative w-full h-[600px] bg-[url('/assets/images/general/product-image-2.png')] bg-no-repeat bg-auto bg-center group-hover/image:scale-[1.1] transition-transform ease-linear duration-200 delay-[400ms]">
              <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover/image:opacity-100 opacity-0 transition-all ease-in duration-[400ms]"></div>
            </div>
          </Link>
          <div className="font-semibold py-6 space-y-1">
            <div className="flex gap-1 text-gray-500 text-sm uppercase">
              <Link href="" className="hover:text-yellow-500">
                mobile app
              </Link>
              <div>-</div>
              <Link href="" className="hover:text-yellow-500">
                web app
              </Link>
              <div>-</div>
              <Link href="" className="hover:text-yellow-500">
                website
              </Link>
            </div>
            <Link href="">
              <div className="text-2xl font-bold">247 Express</div>
            </Link>
          </div>
        </div>

        <div className="group/image flex-1 hover:flex-[3] transition-all duration-[400ms] ease-in">
          <Link href="" className="block overflow-hidden">
            <div className="relative w-full h-[600px] bg-[url('/assets/images/general/product-image-3.png')] bg-no-repeat bg-auto bg-center group-hover/image:scale-[1.1] transition-transform ease-linear duration-200 delay-[400ms]">
              <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover/image:opacity-100 opacity-0 transition-all ease-in duration-[400ms]"></div>
            </div>
          </Link>
          <div className="font-semibold py-6 space-y-1">
            <div className="flex gap-1 text-gray-500 text-sm uppercase">
              <Link href="" className="hover:text-yellow-500">
                mobile app
              </Link>
              <div>-</div>
              <Link href="" className="hover:text-yellow-500">
                web app
              </Link>
              <div>-</div>
              <Link href="" className="hover:text-yellow-500">
                website
              </Link>
            </div>
            <Link href="">
              <div className="text-2xl font-bold">247 Express</div>
            </Link>
          </div>
        </div>

        <div className="group/image flex-1 hover:flex-[3] transition-all duration-[400ms] ease-in">
          <Link href="" className="block overflow-hidden">
            <div className="relative w-full h-[600px] bg-[url('/assets/images/general/product-image-4.png')] bg-no-repeat bg-auto bg-center group-hover/image:scale-[1.1] transition-transform ease-linear duration-200 delay-[400ms]">
              <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover/image:opacity-100 opacity-0 transition-all ease-in duration-[400ms]"></div>
            </div>
          </Link>
          <div className="font-semibold py-6 space-y-1">
            <div className="flex gap-1 text-gray-500 text-sm uppercase">
              <Link href="" className="hover:text-yellow-500">
                mobile app
              </Link>
              <div>-</div>
              <Link href="" className="hover:text-yellow-500">
                web app
              </Link>
              <div>-</div>
              <Link href="" className="hover:text-yellow-500">
                website
              </Link>
            </div>
            <Link href="">
              <div className="text-2xl font-bold">247 Express</div>
            </Link>
          </div>
        </div>
      </div>

      {/* begin: product list */}

      {/* begin: services */}
      <Services serviceItems={serviceItems}/>
      {/* begin: services */}

      <Process
        title="QUY TRÌNH TRIỂN KHAI"
        subTitle="(TỐC ĐỘ VÀ CHẤT LƯỢNG VƯỢT TRỘI)"
        btnText="tất cả quy trình"
      />
      <UserList />
      <News />

      {/* begin: next page */}

      <div className="container mx-auto mt-20">
        <div className="uppercase text-gray-500 font-semibold text-sm">
          (next pages)
        </div>
        <div className="my-6">
          <div className="group/page relative w-full min-h-[100px] mt-6">
            <Link
              href=""
              className="absolute h-full right-0 top-0 left-0 z-[1] bg-white text-8xl translate-y-0 group-hover/page:translate-y-[-50%] transition-transform duration-500 font-semibold uppercase py-3 border-t-[1px] border-black px-[3rem] mx-[-3rem]"
            >
              Cases
            </Link>
          </div>
          <div className="group/page relative w-full min-h-[100px] mt-6">
            <Link
              href=""
              className="absolute h-full right-0 top-0 left-0 z-[2] bg-white text-8xl translate-y-0 group-hover/page:translate-y-[-50%] transition-transform duration-500 font-semibold uppercase py-3 border-t-[1px] border-black px-[3rem] mx-[-3rem]"
            >
              Contacts
            </Link>
          </div>
          <div className="group/page relative w-full min-h-[100px] mt-6">
            <Link
              href=""
              className="absolute h-full right-0 top-0 left-0 z-[3] bg-white text-8xl translate-y-0 group-hover/page:translate-y-[-50%] transition-transform duration-500 font-semibold uppercase py-3 border-t-[1px] border-black px-[3rem] mx-[-3rem]"
            >
              News
            </Link>
          </div>
        </div>
      </div>

      {/* end: next page */}
    </>
  );
}
