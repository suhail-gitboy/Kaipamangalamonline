
"use client"
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { CiSearch } from 'react-icons/ci';


import { IoMdReturnLeft } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { FaLocationDot } from "react-icons/fa6";
import Filterbar from '../ui/Filterbar';

import { AnimatePresence, motion } from "framer-motion";

const Searchexplore = () => {

    const [showNavbar, setShowNavbar] = useState(true);
    const [category, setcategory] = useState("");
    const [location, setlocation] = useState("");
    const [search, setsearch] = useState("");
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY.current) {

                setShowNavbar(false);
            } else {

                setShowNavbar(true);
            }
            lastScrollY.current = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const router = useRouter()
    interface Activity {
        activity: string,
        icon: string,
        action?: string,
        filter?: string
    }
    const Activity: Activity[] = [
        { activity: "all", icon: "", filter: "all" },
        { activity: "chaispot", icon: "/icons/tea.png", filter: "chaispot" },

        { activity: "news", icon: "/icons/news-report.png", filter: "news" },

        { activity: "fashion", icon: "/icons/clothes-hanger.png", filter: "cloths" },
        { activity: "tournaments", icon: "/icons/cricket.png", filter: "tournaments" },

        { activity: "realestate", icon: "/icons/search.png", filter: "realestate" },
        { activity: "event", icon: "/icons/celebration.png", filter: "fest" },
        { activity: "catering", icon: "/icons/catering.png", filter: "catering" },
    ];

    const functionFilter = (type: string | any) => {
        if (type == "all") {
            router.push("/explore")
            return

        }

        router.push(`/explore?category=${type}`)

    }

    const FunctionSearchby = () => {
        if (search.length > 2) {
            router.push(`/explore?searchby=${search}`)
        }
    }

    const [filter, Setfilter] = useState<boolean>(false)
    return (
        <AnimatePresence>
            <motion.div transition={{ type: "spring", stiffness: 300, damping: 30 }} animate={{ y: showNavbar ? 0 : -100 }} className='bg-white fixed top-0 left-0 right-0 z-40 h-auto' >
                <AnimatePresence>


                    {filter && <Filterbar filter={filter} Setfilter={Setfilter} />}

                </AnimatePresence>

                <div className='bg-white items-center md:justify-between gap-3 px-3 flex  md:px-10 lg:px-20 pt-3'>
                    <Link href={"/"} className='bg-bg p-3 rounded-full'><IoMdReturnLeft className='text-xl' /></Link>

                    <div className='w-full md:w-2/4 flex  rounded-4xl  px-4 py-3 md:py-3  items-center bg-neutral-100'>
                        <CiSearch className='text-muted text-2xl' />
                        <input value={search} onChange={(e) => { FunctionSearchby(); setsearch(e.target.value) }} type="text" placeholder='search by shop,type' className='  px-2 w-full outline-0 underline-0 rounded-full text-muted text-md ' />
                        <IoMdClose onClick={() => setsearch("")} />
                    </div>
                    <button onClick={() => Setfilter(prev => !prev)} className='bg-bg text-muted p-3 rounded-full'><VscSettings className='text-2xl text-muted ' /></button>


                </div>

                <div className="px-4  mt-2 mb-2 flex justify-center">
                    <div
                        className="
      flex gap-2
      overflow-x-auto md:overflow-visible
      scrollbar-hide
      px-1
      md:flex-wrap
      md:justify-center
      md:max-full
    "
                    >
                        {Activity.map((data, ind) => (
                            <button
                                key={ind}
                                onClick={() => functionFilter(data?.filter)}
                                className={`
          group
          flex items-center gap-2
          px-4 py-2
          rounded-full

          ${data.action ? "bg-blue-200  hover:bg-blue-400 hover:text-black" : "bg-gray-100   hover:bg-lime-100 hover:text-lime-700"}
          text-gray-700
          text-sm font-medium
          shadow-sm


          focus:bg-lime-300 focus:ring-2 focus:ring-lime-400
          active:scale-95
          transition
          whitespace-nowrap
          flex-shrink-0
        `}
                            >
                                {
                                    data.filter !== "all" && <Image
                                        src={data.icon}
                                        width={22}
                                        height={22}
                                        alt="icon"
                                        className="
            shrink-0
            group-hover:scale-110
            transition
          "
                                    />
                                }

                                <span>{data.activity}</span>
                            </button>
                        ))}
                    </div>
                </div>

            </motion.div>
        </AnimatePresence>
    )
}

export default Searchexplore
