import Link from "next/link";

export default function ProjectCard() {
  return (
    <div className="shadow-md rounded-xl">
      <div className="relative bg-[url('/assets/images/general/post-banner.jpg')] bg-center bg-cover bg-no-repeat w-full h-auto pt-[60%] rounded-t-xl">
        <Link href="">
          <div className="absolute top-[40px] left-[40px] py-1 px-3 border-[1px] rounded-full text-white hover:text-black hover:bg-white text-xs font-semibold uppercase border-white transition-colors duration-700">
            digital
          </div>
        </Link>
      </div>
      <div className="p-10 space-y-4">
        <div className="text-gray-500 text-sm font-semibold uppercase">
          (JANUARY 2, 2024 BY{" "}
          <Link href="/author/1" className="hover:text-gray-900">
            <div className="inline-block">NTKIEN2192</div>
          </Link>
          )
        </div>
        <Link href="/1" className="block hover:opacity-80">
          <div className="text-gray-700 text-3xl font-semibold">
            Unraveling Marketing Trends
          </div>
        </Link>
        <div className="text-sm leading-6 text-gray-600 text-justify">
          The goals of a digital agency are centered around delivering effective
          digital solutions and achieving measurable results for their clients.
          These goals may vary depending on the agency’s.
        </div>
        <Link href="/1" className="block">
          <div className="group/btn flex items-center gap-2 text-yellow-500 uppercase text-xs font-semibold">
            <div>read more</div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full group-hover/btn:scale-150 duration-500"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}
