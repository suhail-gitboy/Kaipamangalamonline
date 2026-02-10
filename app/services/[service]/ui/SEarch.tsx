
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

import { AnimatePresence, motion } from "framer-motion";
import { favouriteDishes, transportServices } from '@/app/libs/Datas';

const Searchexplore = ({ service }: { service: string }) => {


    const FunctionSwitch = () => {

        switch (service) {
            case "fooddelivery":
                return (

                    favouriteDishes.map((dish) => (
                        <motion.button
                            whileTap={{ scale: 0.94 }}
                            key={dish.id}
                            className="min-w-[86px]  flex flex-col items-center gap-2"
                        >
                            {/* Image */}
                            <div

                            >
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="w-14 h-14 object-cover rounded-full"
                                />
                            </div>

                            {/* Label */}
                            <span className="text-xs font-semibold text-gray-800 text-center">
                                {dish.name}
                            </span>
                        </motion.button>
                    ))


                );
            case "autoservices":
                return (
                    transportServices.map((service) => (
                        <div

                            className="flex flex-col items-center gap group"
                        >
                            {/* CIRCLE IMAGE */}

                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                            />


                            {/* NAME */}
                            <span className="text-xs sm:text-sm font-medium text-gray-800 text-center">
                                {service.name}
                            </span>
                        </div>
                    ))
                );
            case "turf":
                return null
        }
    }


    return (

        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-gray-100 sticky top-0 z-50 "
        >
            {/* TOP BAR */}
            <div className="flex items-center gap-3 px-4 md:px-10 lg:px-20 pt-4 pb-3">
                {/* Back */}
                <Link
                    href="/"
                    className="p-2 rounded-full bg-blue-300 active:scale-95 transition"
                >
                    <IoMdReturnLeft className="text-xl text-gray-700" />
                </Link>

                {/* Search */}
                <div className="flex w-full md:w-1/4 items-center gap-2 px-4 py-3 rounded-full bg-white focus-within:bg-white focus-within:ring-1 focus-within:ring-lime-400 transition">
                    <CiSearch className="text-gray-400 text-xl" />
                    <input
                        type="text"
                        placeholder="Search near by"
                        className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
                    />
                    <IoMdClose className="text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>

                <Link href={`/findinmap/${service}`} className='md:hidden'>
                    <Image alt='google mao' src={"/google-maps.png"} width={10} height={15} className='h-9 w-9' />
                </Link>


                {
                    service == "fooddelivery" && <p className='ml-40 text-lime-500 font-semibold text-2xl hidden md:block'>Order your favourites</p>
                }

            </div>

            {/* TITLE */}



            <div className="px-4 md:px-10 lg:px-20 pb-4">
                <div
                    className="
        flex gap-4
        overflow-x-auto scrollbar-hide
        md:flex-wrap md:justify-start
      "
                >
                    <FunctionSwitch />
                </div>
            </div>


        </motion.div>


    )
}

export default Searchexplore
