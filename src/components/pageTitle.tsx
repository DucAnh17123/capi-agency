"use client"

import Link from "next/link";

import React from 'react';

export default function PageTitle({title}:any) {
    return (
        <div className='container mx-auto flex justify-center items-center flex-col w-full py-[4rem] mb-[6rem] border-b-[1px] border-black'>
            <div className='text-[7.5rem] font-semibold uppercase tracking-tighter'>{title}</div>
            <div className="uppercase mt-2 flex gap-1">
                <Link className="text-gray-500 hover:text-black" href="/"><div>(Home - </div></Link>
                <span>{title})</span>
            </div>
        </div>
    )
}