import Link from "next/link";
import Image from "next/image";

export default function NewsCard() {
  return (
    <Link href="" className="block bg-red-500 w-full h-500px">
      <div className="group/newsCard relative w-full pt-[100%] h-auto bg-[url('/assets/images/general/news-image.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-100 w-full h-full z-10 group-hover/newsCard:bg-transparent transition-colors duration-500">
          <div className="p-6">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-0 py-1 px-3 border-[1px] border-black rounded-full text-black text-xs font-semibold uppercase group-hover/newsCard:text-white group-hover/newsCard:border-white">
                digital
              </div>
              <div className="absolute bottom-0 left-0">
                <div>(january 2, 2024)</div>
                <div>Unraveling Marketing Trends</div>
                <div className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-xs font-semibold">read more<div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-125 duration-500"></div></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
