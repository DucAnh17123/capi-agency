import Link from "next/link";
import Image from "next/image";

interface props {
  historyItems: any;
}

export default function historyCard({ historyItems }: any) {
  return (
    <>
      {historyItems.map((item: any, index: any) => {
        return (
          <>
            {index % 2 === 0 ? (
              <div className="group/historyCard w-full items-stretch flex divide-x-[1px] divide-black h-[580px]">
                <div className="flex-1">
                  <div className="px-20">
                    <div className="relative">
                      <Image
                        className="brightness-90 grayscale group-hover/historyCard:brightness-1 group-hover/historyCard:grayscale-0 transition-all duration-500"
                        src={item.imageUrl}
                        alt=""
                        width={600}
                        height={580}
                      ></Image>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative px-20 flex h-full items-center">
                    <div className="opacity-0 absolute top-[50%] left-0 translate-y-[-50%] group-hover/historyCard:translate-x-[4px] w-0 h-0 border-[14px] border-l-yellow-500 border-y-transparent border-r-transparent group-hover/historyCard:opacity-100 duration-300"></div>
                    <div className="absolute top-[50%] translate-y-[-50%] left-0 text-8xl text-[#d1d1d1] font-bold leading-[6rem] rotate-[-90deg] group-hover/historyCard:text-yellow-500 transition-colors duration-300">
                      {item.year}
                    </div>
                    <div className="px-[8rem] space-y-4">
                      <div className="text-3xl font-bold">{item.title}</div>
                      <div className="text-sm text-gray-500 leading-6">
                        {item.subscription}
                      </div>
                      <Link
                        href=""
                        className="block"
                      >
                        <div className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold">
                          <div>read more</div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-125 duration-500"></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="group/historyCard w-full items-stretch flex divide-x-[1px] divide-black h-[580px]">
                <div className="flex-1">
                  <div className="relative px-20 flex h-full items-center">
                    <div className="opacity-0 absolute top-[50%] right-0 translate-y-[-50%] group-hover/historyCard:translate-x-[-4px] w-0 h-0 border-[14px] border-r-yellow-500 border-y-transparent border-l-transparent group-hover/historyCard:opacity-100 duration-300"></div>
                    <div className="absolute top-[50%] translate-y-[-50%] right-0 text-8xl text-[#d1d1d1] font-bold leading-[6rem] rotate-[90deg] group-hover/historyCard:text-yellow-500 transition-colors duration-300">
                      {item.year}
                    </div>
                    <div className="px-[8rem] space-y-4 text-end">
                      <div className="text-3xl font-bold">{item.title}</div>
                      <div className="text-sm text-gray-500 leading-6">
                        {item.subscription}
                      </div>
                      <Link
                        href=""
                        className="block"
                      >
                        <div className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-sm font-semibold">
                          <div>read more</div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-125 duration-500"></div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="px-20">
                    <div className="relative">
                      <Image
                        className="brightness-90 grayscale group-hover/historyCard:brightness-1 group-hover/historyCard:grayscale-0 transition-all duration-500"
                        src={item.imageUrl}
                        alt=""
                        width={600}
                        height={580}
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
}
