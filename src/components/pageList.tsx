import Link from "next/link";

export default function ListPage() {
  return (
    <div className="container mx-auto mt-20">
      <div className="uppercase text-gray-500 font-semibold text-sm">
        (next pages)
      </div>
      <div className="my-6">
        <div className="group/page relative w-full min-h-[55px] lg:min-h-[80px] xl:min-h-[100px] mt-6">
          <Link
            href=""
            className="absolute h-full right-0 top-0 left-0 px-[2rem] z-[1] bg-white translate-y-0 group-hover/page:translate-y-[-50%] transition-transform duration-500 font-semibold uppercase py-3 border-t-[1px] border-black"
          >
            <div className="text-5xl md:text-6xl xl:text-8xl">Cases</div>
          </Link>
        </div>
        <div className="group/page relative w-full min-h-[55px] lg:min-h-[80px] xl:min-h-[100px] mt-6">
          <Link
            href=""
            className="absolute h-full right-0 top-0 left-0 px-[2rem] z-[2] bg-white translate-y-0 group-hover/page:translate-y-[-50%] transition-transform duration-500 font-semibold uppercase py-3 border-t-[1px] border-black"
          >
            <div className="text-5xl md:text-6xl xl:text-8xl">Contacts</div>
          </Link>
        </div>
        <div className="group/page relative w-full min-h-[55px] lg:min-h-[80px] xl:min-h-[100px] mt-6">
          <Link
            href=""
            className="absolute h-full right-0 top-0 left-0 px-[2rem] z-[3] bg-white translate-y-0 group-hover/page:translate-y-[-50%] transition-transform duration-500 font-semibold uppercase py-3 border-t-[1px] border-black"
          >
            <div className="text-5xl md:text-6xl xl:text-8xl">News</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
