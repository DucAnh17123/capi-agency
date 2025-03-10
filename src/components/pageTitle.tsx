"use client"

import Link from "next/link";

import React from 'react';

export default function PageTitle({title, subTitle}:any) {
    return (
        <div className='container mx-auto flex justify-center items-center flex-col w-full py-[2rem] xl:py-[4rem] border-b-[1px] border-black'>
            <div className='text-4xl md:text-6xl xl:text-[7.5rem] font-semibold uppercase text-center tracking-tighter xl:leading-[9rem]'>{title}</div>
            <div className="uppercase mt-2 flex gap-1">
                <Link className="text-gray-500 hover:text-black" href="/"><div>(Home - </div></Link>
                <span>{subTitle})</span>
            </div>
        </div>
    )
}