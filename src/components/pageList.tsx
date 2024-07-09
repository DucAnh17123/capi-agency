import Link from "next/link";

export default function ListPage() {
  return (
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
            <div>Cases</div>
          </Link>
        </div>
        <div className="group/page relative w-full min-h-[100px] mt-6">
          <Link
            href=""
            className="absolute h-full right-0 top-0 left-0 z-[2] bg-white text-8xl translate-y-0 group-hover/page:translate-y-[-50%] transition-transform duration-500 font-semibold uppercase py-3 border-t-[1px] border-black px-[3rem] mx-[-3rem]"
          >
            <div>Contacts</div>
          </Link>
        </div>
        <div className="group/page relative w-full min-h-[100px] mt-6">
          <Link
            href=""
            className="absolute h-full right-0 top-0 left-0 z-[3] bg-white text-8xl translate-y-0 group-hover/page:translate-y-[-50%] transition-transform duration-500 font-semibold uppercase py-3 border-t-[1px] border-black px-[3rem] mx-[-3rem]"
          >
            <div>News</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
