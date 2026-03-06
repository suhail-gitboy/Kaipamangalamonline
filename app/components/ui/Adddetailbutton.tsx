
"use client"
import Link from 'next/link'
import React from 'react'
import Button from './Buttton'
import { useRouter } from 'next/navigation'

const Adddetailbutton = () => {
    const router = useRouter()
    return (
        <div className="relative overflow-hidden w-full md:w-fit rounded-2xl py-5 px-3 
  bg-white 
  shadow-sm">

            {/* subtle overlay for contrast */}
            <div className="absolute inset-0 bg-white/40 pointer-events-none" />

            <div className="relative">
                <Link
                    href="/selectservice"
                    className="group block cursor-pointer text-center transition-all"
                >
                    <div className="flex items-center justify-center gap-2">
                        {/* + icon */}
                        <span className="inline-flex items-center justify-center w-5 h-5 bg-lime-500 text-white rounded-full text-xs font-bold group-hover:bg-sky-800 transition-colors">
                            +
                        </span>

                        <h1 className="text-sm font-semibold tracking-tight text-slate-900 
          group-hover:text-sky-800 transition-colors">
                            Register your{" "}
                            <span className="text-sky-700 group-hover:text-sky-800">
                                Services
                            </span>
                            ,{" "}
                            <span className="text-sky-700 group-hover:text-sky-800">
                                properties
                            </span>{" "}
                            &{" "}
                            <span className="text-sky-700 group-hover:text-sky-800">
                                News
                            </span>
                        </h1>
                    </div>

                    <p className="mt-2 text-xs text-slate-700 group-hover:text-slate-900 transition-colors">
                        Stand out in Kaipamgalam town’s community feed
                    </p>
                </Link>

                {/* separator */}
                <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                <div className="flex  justify-center items-center  gap-2">
                    <p className="text-slate-600 text-xs">
                        Want to display it in an exclusive list?
                    </p>

                    <Button click={() => router.push("/")} text="Be the first" />
                </div>
            </div>
        </div>
    )
}

export default Adddetailbutton
