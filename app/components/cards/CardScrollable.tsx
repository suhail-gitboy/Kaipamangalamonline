

"use client"
import React, { useState } from 'react'

import {
    FaHeart,
    FaRegHeart,
    FaMapMarkerAlt,
    FaDollarSign,
    FaTag
} from "react-icons/fa";
interface CardProps {
    image: string;
    title: string;
    location: string;
    type: "sale" | "rent";
    price?: string;
    category?: string;
    index: number;
}
const CardScrollable = ({ image,
    title,
    location,
    type,
    price,
    category, index }: CardProps) => {



    const [liked, setLiked] = useState(false)
    return (
        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden w-full hover:shadow-lg transition-shadow duration-300">

            {/* Image Section */}
            <div className="relative w-full h-56">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {/* Type Badge */}
                <span className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full text-white
          ${type === "sale" ? "bg-green-600" : "bg-blue-600"}`}>
                    {type.toUpperCase()}
                </span>
            </div>

            {/* Info Section */}
            <div className="p-4 flex flex-col gap-3">
                {/* Title */}
                <h3 className="text-black font-semibold text-lg truncate">{title}</h3>

                {/* Location */}
                <div className="flex items-center text-black gap-2">
                    <FaMapMarkerAlt className="text-lime-600" />
                    <span className="truncate">{location}</span>
                </div>

                {/* Price */}
                {price && (
                    <div className="flex items-center text-black gap-2">
                        <FaDollarSign className="text-lime-600" />
                        <span>{price}</span>
                    </div>
                )}

                {/* Category */}
                {category && (
                    <div className="flex items-center text-black gap-2">
                        <FaTag className="text-lime-600" />
                        <span>{category}</span>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-3">
                    {/* Like Button */}
                    <button
                        onClick={() => setLiked(!liked)}
                        className="text-red-500 p-2 rounded-full hover:bg-red-50 transition"
                    >
                        {liked ? <FaHeart /> : <FaRegHeart />}
                    </button>

                    {/* Contact / View */}
                    <button className="bg-lime-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-lime-700 transition">
                        Contact
                    </button>
                </div>
            </div>
        </div>

    )
}

export default CardScrollable
