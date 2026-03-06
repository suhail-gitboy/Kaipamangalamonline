"use client"
import { FaHotel, FaCar, FaTags, FaFutbol, FaTools } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { services } from "@/libs/Datas";
import Redirect from "@/app/components/rusable/Redirect";



export default function ServicesSection() {


    const router = useRouter()

    return (
        <section className="bg-gray-100 py-20 px-6">
            <div className="absolute left-2 top-2">
                <Redirect path="/" />
            </div>
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                        Select the Services You Provide
                    </h2>
                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Choose the services your business offers to customers in Kaipamangalam.
                        You can select multiple options.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

                    {services.map((service) => {


                        return (
                            <div
                                key={service.id}
                                onClick={() => router.push(service.action)}
                                className={`
                  cursor-pointer
                  rounded-xl
                  p-6
                  transition
                  border
                  bg-linear-to-r from-lime-100 to-lime-200 shadow-md
                                        
                `}
                            >

                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-3xl text-gray-800">
                                        <img

                                            src={service.icon}
                                            alt="icon"


                                            className="w-20 h-20 accent-lime-600"
                                        />
                                    </div>


                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        );
                    })}

                </div>

                {/* Button */}
                <div className="text-center mt-14">
                    <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition">
                        Continue
                    </button>
                </div>

            </div>
        </section>
    );
}