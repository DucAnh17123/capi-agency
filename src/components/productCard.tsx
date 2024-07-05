import Link from "next/link";

export default function ProductCard() {
  return (
    <div className="group/image">
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
  );
}
