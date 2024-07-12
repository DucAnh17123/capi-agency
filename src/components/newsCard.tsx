import Link from "next/link";
import Image from "next/image";

export default function NewsCard() {
  return (
    <Link href="/1" className="block bg-red-500 w-full h-500px">
      <div className="group/newsCard relative w-full pt-[100%] h-auto bg-[url('/assets/images/general/news-image.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-100 w-full h-full z-10 group-hover/newsCard:bg-black/30 transition-colors duration-700 p-8">
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute top-0 left-0 py-1 px-3 border-[1px] border-black rounded-full text-black text-xs font-semibold uppercase hover:text-black hover:bg-white group-hover/newsCard:text-white group-hover/newsCard:border-white transition-colors duration-700">
              digital
            </div>
            <div className="absolute bottom-0 left-0 translate-y-[26%] group-hover/newsCard:translate-y-0 transition-transform duration-500">
              <div className="text-gray-500 text-xs font-semibold uppercase group-hover/newsCard:text-white transition-colors duration-700">(january 2, 2024)</div>
              <div className="font-bold text-2xl my-2 group-hover/newsCard:text-white transition-colors duration-700">Unraveling Marketing Trends</div>
              <div className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-xs font-semibold mt-4">
                read more
                <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-125 duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
