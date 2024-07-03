import Image from "next/image";
import Banner from "@/components/banner";
import Process from "@/components/process";
import UserList from "@/components/userList";
import News from "@/components/news";

export default function Home() {
  return (
    <>
      <Banner />

      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center py-[9.5rem] text-center">
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
          <button className="group/btn mt-10 border-[1px] border-black rounded-full text-sm font-semibold py-4 px-5 uppercase flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-500">
            Tải portfolio.pdf
            <div className="group-hover/btn:scale-150 group-hover/btn:bg-white w-2 h-2 rounded-full bg-black transition-all duration-500"></div>
          </button>
        </div>
      </div>

      <div className="relative w-full pt-[50%] h-auto bg-[url('/assets/images/general/banner-home-2.jpg')] bg-auto bg-no-repeat bg-center">
        <div className="absolute top-1/2 translate-y-[-50%] left-0 right-0 container mx-auto text-white">
          <div className="text-sm font-semibold mb-6">(DỊCH VỤ CỐT LÕI)</div>
          <div className="divide-y-[1px] divide-gray-600 *:py-6 *:px-8 border-y-[1px] border-gray-600">
            <div className="group/brand hover:bg-yellow-500 transition-colors duration-300 ease-in-out grid grid-cols-2 overflow-hidden">
              <div className="flex col-span-1 items-end gap-4">
                <div className="group-hover/brand:text-black text-7xl text-white uppercase font-semibold">
                  CHIẾN LƯỢC
                </div>
                <div className="mb-2 font-semibold text-sm py-1 px-2 border-[1px] border-white rounded-full group-hover/brand:border-black group-hover/brand:text-black">
                  001
                </div>
              </div>
              <div className="col-span-1 px-20 flex items-center text-black opacity-0 translate-x-[50%] group-hover/brand:translate-x-0 group-hover/brand:opacity-100 duration-500">
                Chúng tôi phát triển chiến lược sản phẩm và định hướng giải pháp
                cho quá trình phát triển bền vững của phần mềm.
              </div>
            </div>

            <div className="group/brand hover:bg-yellow-500 transition-colors duration-300 ease-in-out grid grid-cols-2 overflow-hidden">
              <div className="flex col-span-1 items-end gap-4">
                <div className="group-hover/brand:text-black text-7xl text-white uppercase font-semibold">
                  BRANDING
                </div>
                <div className="mb-2 font-semibold text-sm py-1 px-2 border-[1px] border-white rounded-full group-hover/brand:border-black group-hover/brand:text-black">
                  002
                </div>
              </div>
              <div className="col-span-1 px-20 flex items-center text-black opacity-0 translate-x-[50%] group-hover/brand:translate-x-0 group-hover/brand:opacity-100 duration-500">
                Chúng tôi xây dựng chiến lược thương hiệu và đồng hành cùng
                doanh nghiệp trong việc phát triển thương hiệu trên thị trường.
              </div>
            </div>

            <div className="group/brand hover:bg-yellow-500 transition-colors duration-300 ease-in-out grid grid-cols-2 overflow-hidden">
              <div className="flex col-span-1 items-end gap-4">
                <div className="group-hover/brand:text-black text-7xl text-white uppercase font-semibold">
                  UI/UX
                </div>
                <div className="mb-2 font-semibold text-sm py-1 px-2 border-[1px] border-white rounded-full group-hover/brand:border-black group-hover/brand:text-black">
                  003
                </div>
              </div>
              <div className="col-span-1 px-20 flex items-center text-black opacity-0 translate-x-[50%] group-hover/brand:translate-x-0 group-hover/brand:opacity-100 duration-500">
                Chúng tôi cung cấp dịch vụ thiết kế trải nghiệm người dùng (UX)
                và giao diện phần mềm (UI) cho các sản phẩm số.
              </div>
            </div>

            <div className="group/brand hover:bg-yellow-500 transition-colors duration-300 ease-in-out grid grid-cols-2 overflow-hidden">
              <div className="flex col-span-1 items-end gap-4">
                <div className="group-hover/brand:text-black text-7xl text-white uppercase font-semibold">
                  PHÁT TRIỂN
                </div>
                <div className="mb-2 font-semibold text-sm py-1 px-2 border-[1px] border-white rounded-full group-hover/brand:border-black group-hover/brand:text-black">
                  004
                </div>
              </div>
              <div className="col-span-1 px-20 flex items-center text-black opacity-0 translate-x-[50%] group-hover/brand:translate-x-0 group-hover/brand:opacity-100 duration-500">
                Chúng tôi hỗ trợ phát triển các sản phẩm phần mềm trong nhiều
                nền tảng với nhu cầu cụ thể từ khách hàng
              </div>
            </div>

            <div className="group/brand hover:bg-yellow-500 transition-colors duration-300 ease-in-out grid grid-cols-2 overflow-hidden">
              <div className="flex col-span-1 items-end gap-4">
                <div className="group-hover/brand:text-black text-7xl text-white uppercase font-semibold">
                  ĐO LƯỜNG
                </div>
                <div className="mb-2 font-semibold text-sm py-1 px-2 border-[1px] border-white rounded-full group-hover/brand:border-black group-hover/brand:text-black">
                  005
                </div>
              </div>
              <div className="col-span-1 px-20 flex items-center text-black opacity-0 translate-x-[50%] group-hover/brand:translate-x-0 group-hover/brand:opacity-100 duration-500">
                Chúng tôi đo lường chỉ số sử dụng của người dùng và báo cáo mọi
                vấn đề trực tiếp cho khách hàng và đội ngũ phát triển.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Process />
      <UserList />
      <News />
    </>
  );
}
