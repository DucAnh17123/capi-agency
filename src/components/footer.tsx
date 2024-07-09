import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[500px] bg-black overflow-hidden select-none">
      <div className="absolute top-0 bottom-[-20%] left-0 translate-y-[0] translate-x-[50%] z-10">
        <div className="text-white text-[35rem] font-bold text-nowrap leading-[40rem] inline-block animate-marquee">
          capi agency
        </div>
      </div>

      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/85 z-20">
        <div className="container mx-auto py-20">
          <div className="flex items-center gap-3">
            <div>
              <Image
                src={"/assets/images/general/capi-logo.svg"}
                className="scale-75"
                alt="image"
                width={300}
                height={200}
                layout="responsive"
              ></Image>
            </div>
            <div className="text-gray-400 text-sm font-semibold uppercase">
              WE PRIORITIZE COLLABORATION <br />
              WITH OUR CLIENTS
            </div>
          </div>

          <div className="text-[7.5rem] uppercase font-semibold text-white">
            get in touch <span className="text-yellow-500">@</span>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-24 text-[#7b7b7b] text-3xl font-semibold">
              <Link
                href=""
                className="hover:text-[#e44f39] transition-colors duration-300"
              >
                <div>agency@capi.design</div>
              </Link>
              <Link
                href=""
                className="hover:text-[#e44f39] transition-colors duration-300"
              >
                <div>+84 392 293 045</div>
              </Link>
            </div>

            <div className="flex items-end gap-2">
              <div className="btn-secondary">behance</div>
              <div className="btn-secondary">dribble</div>
              <div className="btn-secondary">facebook</div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-gray-700">
          <div className="container mx-auto py-6">
            <div className="text-sm text-[#7b7b7b]">
              Copyright © 2024 Capi Agency. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
