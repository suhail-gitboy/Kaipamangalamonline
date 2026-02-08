"use client"

import { FiBell } from "react-icons/fi"
import { MdOutlineNewspaper } from "react-icons/md"
import { useState } from "react"

export default function LocalNewsCard() {
    const [isNew, setIsNew] = useState(true) // highlight new news

    return (
        <div className="md:flex justify-center md:py-5">
            <div
                className={` md:auto relative flex items-center justify-between rounded-xl p-4 border ${isNew ? "bg-yellow-50 border-yellow-200" : "bg-white border-slate-200"
                    } shadow-sm hover:shadow-md transition`}
            >
                {/* Left */}
                <div className="flex items-center gap-3">
                    <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${isNew ? "bg-yellow-200 text-yellow-800" : "bg-slate-100 text-slate-600"
                            }`}
                    >
                        <MdOutlineNewspaper className="text-xl" />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900">
                            What’s happening in Kaipamgalam?
                        </h3>
                        <p className="text-[10px] text-slate-500">
                            Popular spots, events, and local updates people are talking about
                        </p>
                    </div>
                </div>

                {/* Right */}
                <button
                    className="rounded-full bg-lime-600 px-3 py-1 text-xs font-medium text-white hover:bg-lime-700 transition"
                    onClick={() => alert("Read latest news")}
                >
                    Read the latest
                </button>

                {/* Optional new badge */}
                {isNew && (
                    <span className="absolute top-2 left-2 h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                )}
            </div>
        </div>




    )
}
