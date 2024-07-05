"use client";

import Image from "next/image";
interface props {
  serviceItems: any;
}
export default function Services({ serviceItems, title, imageUrl }: any) {
  return (
    <>
      <div
        className="relative mt-[9.5rem] w-full pt-[50%] h-auto bg-auto bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute top-1/2 translate-y-[-50%] left-0 right-0 container mx-auto text-white">
          <div className="text-sm font-semibold mb-6 uppercase px-8">{title}</div>
          <div className="divide-y-[1px] divide-gray-600 *:py-6 *:px-8 border-y-[1px] border-gray-600">
            {serviceItems?.map((item: any, index: any) => {
              return (
                <div
                  key={index}
                  className="group/brand hover:bg-yellow-500 transition-colors duration-300 ease-in-out grid grid-cols-2 overflow-hidden"
                >
                  <div className="flex col-span-1 items-end gap-4">
                    <div className="group-hover/brand:text-black text-8xl text-white uppercase font-semibold">
                      {item?.serviceName}
                    </div>
                    <div className="mb-2 font-semibold text-sm py-1 px-2 border-[1px] border-white rounded-full group-hover/brand:border-black group-hover/brand:text-black">
                      00{index + 1}
                    </div>
                  </div>
                  <div className="col-span-1 px-20 flex items-center text-black opacity-0 translate-x-[50%] group-hover/brand:translate-x-0 group-hover/brand:opacity-100 duration-500">
                    {item?.serviceSub}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
