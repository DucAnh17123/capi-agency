import Link from "next/link";

import React from 'react';

export default function PageTitle({title}) {
    return (
        <div className='container mx-auto flex justify-center items-center flex-col w-full py-[5rem] mb-[6rem] border-b-[1px] border-black'>
            <div className='text-9xl font-bold uppercase'>{title}</div>
            <div className="uppercase mt-2">
                <Link className="text-gray-500" href="/">(Home - </Link>
                <span>{title})</span>
            </div>
        </div>
    )
}