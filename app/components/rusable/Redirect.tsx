"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

import { MdKeyboardArrowLeft } from "react-icons/md";
const Redirect = ({ path, color }: { path: string, color: string }) => {
    const router = useRouter()
    return (


        <div onClick={() => { router.push(path) }} className={`p-1 rounded-2xl ${color}`}>
            <MdKeyboardArrowLeft className='text-white text-xl' />
        </div>
    )
}

export default Redirect
