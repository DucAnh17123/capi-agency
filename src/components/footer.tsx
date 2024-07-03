import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black">
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
            <div>agency@capi.design</div>
            <div>+84 392 293 045</div>
          </div>

          <div className="flex items-end gap-2">
            <div className="uppercase w-fit font-medium cursor-pointer text-xs text-white py-1 px-2 rounded-full border-2 border-white hover:bg-white hover:text-black">
              behance
            </div>
            <div className="uppercase w-fit font-medium cursor-pointer text-xs text-white py-1 px-2 rounded-full border-2 border-white hover:bg-white hover:text-black">
              dribble
            </div>
            <div className="uppercase w-fit font-medium cursor-pointer text-xs text-white py-1 px-2 rounded-full border-2 border-white hover:bg-white hover:text-black">
              facebook
            </div>
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
    </footer>
  );
}
