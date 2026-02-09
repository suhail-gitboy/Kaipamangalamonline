"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

import { MdKeyboardArrowLeft } from "react-icons/md";
const Redirect = ({ path }: { path: string }) => {
    const router = useRouter()
    return (


        <div onClick={() => { router.push(path) }} className='p-2 rounded-2xl bg-black/30 '>
            <MdKeyboardArrowLeft className='text-white text-2xl' />
        </div>
    )
}

export default Redirect
