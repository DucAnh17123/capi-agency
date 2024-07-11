"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProductCard() {
  const [positionCursor, setPositionCursor] = useState({ x: 0, y: 0 });

  function handleCursor(e: any) {
    setPositionCursor({ x: e.clientX, y: e.clientY });
  }

  return (
    <div className="group/image">
      <Link href="" className="block overflow-hidden cursor-none">
        <div onMouseMove={(e) => handleCursor(e)} className="relative group">
          <div className="w-full h-[600px] bg-[url('/assets/images/general/product-image.png')] bg-no-repeat bg-auto bg-center group-hover/image:scale-[1.1] transition-transform ease-linear duration-[400ms]"></div>
          <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover/image:opacity-100 opacity-0 transition-all ease-in duration-300"></div>
          <div
            className="fixed group-hover:scale-100 z-10 scale-0 transition-transform duration-300 text-white text-sm font-semibold uppercase bg-white/30 backdrop-blur-sm rounded-full w-[100px] h-[100px] flex justify-center items-center pointer-events-none translate-x-[-50%] translate-y-[-50%]"
            style={{ top: positionCursor.y, left: positionCursor.x }}
          >
            More
          </div>
        </div>
      </Link>

      <div className="font-semibold py-6 space-y-1">
        <div className="flex gap-1 text-gray-500 text-sm uppercase">
          <Link href="" className="hover:text-yellow-500">
            <div>mobile app</div>
          </Link>
          <div>-</div>
          <Link href="" className="hover:text-yellow-500">
            <div>web app</div>
          </Link>
          <div>-</div>
          <Link href="" className="hover:text-yellow-500">
            <div>website</div>
          </Link>
        </div>
        <Link href="">
          <div className="text-2xl font-bold mt-1">247 Express</div>
        </Link>
      </div>
    </div>
  );
}
