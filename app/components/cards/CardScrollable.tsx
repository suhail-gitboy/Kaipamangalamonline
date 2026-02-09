"use client"
import React, { useState } from "react";
import { FaUserCircle, FaClock, FaMapMarkerAlt, FaDollarSign, FaTag, FaHeart, FaRegHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import {

    FaTrophy,
    FaFootballBall,
    FaBasketballBall,
    FaRunning
} from "react-icons/fa";
const getCategoryIcon = (cat: string | undefined) => {
    switch (cat) {
        case "football": return <FaFootballBall className="text-lime-600" />;
        case "cricket": return <FaTrophy className="text-lime-600" />;
        case "basketball": return <FaBasketballBall className="text-lime-600" />;
        case "running": return <FaRunning className="text-lime-600" />;
        default: return <FaTag className="text-lime-600" />;
    }
};

export interface CardProps {
    image: string;
    title: string;
    description?: string;
    location?: string;
    type?: string; // sale/rent
    price?: string;
    category?: string; // news/shop/tournament
    user?: string;
    time?: string;
}

const CardScrollable = ({ data }: { data: CardProps }) => {
    const [liked, setLiked] = useState(false);

    const renderCard = (card: CardProps) => {
        const { title, category, description, location, image, type, price, user, time } = card;

        switch (category) {
            case "news":
                return (
                    <div className="">
                        <div className="bg-white rounded-xl shadow-md w-full max-w-sm mx-auto my-3 hover:shadow-lg transition-shadow duration-300">

                            {/* Top Image */}
                            <div className="relative w-full h-40">
                                <img
                                    src={image}
                                    alt={description}
                                    className="w-full h-full rounded-t-2xl object-cover"
                                />

                                {/* Category */}
                                <span className="absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white bg-orange-600 rounded-full">
                                    📰 News
                                </span>


                                {/* Type */}

                            </div>

                            {/* Content */}
                            <div className="p-4 space-y-3">
                                <span className="px-3 mb-1 py-1 text-xs font-semibold text-white bg-blue-500 rounded-4xl">
                                    {type || "Public"}
                                </span>

                                {/* Title (description as headline) */}
                                <h3 className="text-black  mt-1 font-bold text-base leading-snug line-clamp-2">
                                    {title}
                                </h3>
                                {location && (
                                    <button className="flex items-center gap-1 mt-2 text-lime-600 text-xs font-medium px-3 py-1 rounded-full border border-lime-300 hover:bg-lime-50 transition">
                                        <FaMapMarkerAlt className="text-sm" />
                                        {location}
                                    </button>
                                )}
                                {/* Views & Likes */}


                                {/* User + Time */}

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4 text-xs text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <FaEye className="text-lime-600" />
                                            <span>1.2k</span>
                                        </div>

                                        <button
                                            onClick={() => setLiked(!liked)}
                                            className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
                                        >
                                            {liked ? <FaHeart /> : <FaRegHeart />}
                                            <span>{liked ? "231" : "230"}</span>
                                        </button>
                                    </div>
                                    {/* Location */}
                                    {location && (
                                        <button className="flex items-center gap-2 bg-lime-600 text-white px-4 py-1 rounded-lg font-semibold hover:bg-lime-700 shadow-md transition text-xs">
                                            <FaMapMarkerAlt className="text-white" />
                                            view more
                                        </button>
                                    )}
                                </div>
                                {/* <div className="flex items-center gap-4 text-xs text-gray-600">
                                <div className="flex items-center gap-1">
                                    <FaEye className="text-lime-600" />
                                    <span>1.2k</span>
                                </div>

                                <button
                                    onClick={() => setLiked(!liked)}
                                    className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
                                >
                                    {liked ? <FaHeart /> : <FaRegHeart />}
                                    <span>{liked ? "231" : "230"}</span>
                                </button>
                            </div>
                       */}

                            </div>

                        </div>
                        <div className="flex  p-3 items-center text-xs text-gray-500 pt-1">


                            <div className="flex items-center gap-1 ml-6">
                                <FaClock className="text-lime-600 text-sm" />
                                <span>{time || "Just now"}</span>
                            </div>
                        </div>
                    </div>



                );

            case "shop":

                return (
                    <div className="bg-white rounded-xl shadow-md w-full max-w-sm mx-auto my-3 hover:shadow-lg transition-shadow duration-300 ">

                        <div className="relative w-full h-56">
                            <img src={image} alt={title} className="w-full h-full  rounded-t-2xl object-cover" />
                            {type && (
                                <span
                                    className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full text-white ${type === "sale" ? "bg-green-600" : "bg-blue-600"
                                        }`}
                                >
                                    {category?.toUpperCase()}
                                </span>
                            )}
                        </div>


                        <div className="p-4 flex flex-col gap-3">
                            <h3 className="text-black font-semibold text-lg truncate">{title}</h3>

                            {/* Location */}
                            {location && (
                                <div className="flex items-center text-black gap-2">
                                    <FaMapMarkerAlt className="text-lime-600" />
                                    <span className="truncate">{location}</span>
                                </div>
                            )}

                            {/* Price */}
                            {price && (
                                <div className="flex items-center text-black gap-2">
                                    <FaDollarSign className="text-lime-600" />
                                    <span>{price}</span>
                                </div>
                            )}

                            {/* Category */}
                            {type && (
                                <div className="flex items-center text-black gap-2">
                                    <FaTag className="text-lime-600" />
                                    <span>{type}</span>
                                </div>
                            )}

                            {/* Action Buttons */}
                            {/* Action Footer */}
                            <div className="flex items-center justify-between mt-3 border-t border-gray-100 pt-3">
                                {/* Views and Likes */}
                                <div className="flex items-center gap-4 text-xs text-gray-600">
                                    {/* Views */}
                                    <div className="flex items-center gap-1">
                                        <FaEye className="text-lime-600" />
                                        <span>1.2k</span>
                                    </div>

                                    {/* Likes */}
                                    <button
                                        onClick={() => setLiked(!liked)}
                                        className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
                                    >
                                        {liked ? <FaHeart /> : <FaRegHeart />}
                                        <span>{liked ? "231" : "230"}</span>
                                    </button>
                                </div>

                                {/* Contact Button */}
                                <button className="flex items-center gap-2 bg-lime-600 text-white px-4 py-1 rounded-lg font-semibold hover:bg-lime-700 shadow-md transition text-xs">
                                    <FaMapMarkerAlt className="text-white" />
                                    Contact
                                </button>
                            </div>

                        </div>
                    </div>
                );
            case "tournament":
                return (
                    <div className="bg-white rounded-xl shadow-md w-full max-w-sm mx-auto my-3 hover:shadow-lg transition-shadow duration-300 ">

                        {/* Top Image */}
                        <div className="relative w-full h-56">
                            <img src={image} alt={title} className="w-full  rounded-t-2xl h-full object-cover" />

                            {/* Category Badge */}


                            {/* Type Badge */}
                            {category && (
                                <span className="absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full text-white bg-blue-600">
                                    {category.toUpperCase()}
                                </span>
                            )}
                        </div>

                        {/* Info Section */}
                        <div className="p-4 flex flex-col gap-3">
                            {category && (
                                <span className=" px-3 py-1 text-sm font-bold w-fit p-3 rounded-full bg-lime-100 text-lime-600 flex items-center gap-1">
                                    {getCategoryIcon(type)}
                                    {type}
                                </span>
                            )}
                            {/* Title */}
                            <h3 className="text-black font-semibold text-lg truncate">{title}</h3>


                            {/* Location */}
                            {location && (
                                <div className="flex items-center text-black gap-2 text-sm">
                                    <FaMapMarkerAlt className="text-lime-600" />
                                    <span className="truncate">{location}</span>
                                </div>
                            )}

                            {/* Price */}
                            {price && (
                                <div className="flex items-center text-black gap-2 text-sm">
                                    <FaDollarSign className="text-lime-600" />
                                    <span>{price}</span>
                                </div>
                            )}

                            {/* Action Buttons */}
                            {/* Action Footer */}
                            <div className="flex items-center justify-between mt-3 border-t border-gray-100 pt-3">
                                {/* Views and Likes */}
                                <div className="flex items-center gap-4 text-xs text-gray-600">
                                    {/* Views */}
                                    <div className="flex items-center gap-1">
                                        <FaEye className="text-lime-600" />
                                        <span>1.2k</span>
                                    </div>

                                    {/* Likes */}
                                    <button
                                        onClick={() => setLiked(!liked)}
                                        className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
                                    >
                                        {liked ? <FaHeart /> : <FaRegHeart />}
                                        <span>{liked ? "231" : "230"}</span>
                                    </button>
                                </div>

                                {/* Contact Button */}
                                <button className="flex items-center gap-2 bg-lime-600 text-white px-4 py-1 rounded-lg font-semibold hover:bg-lime-700 shadow-md transition text-xs">
                                    <FaMapMarkerAlt className="text-white" />
                                    Contact
                                </button>
                            </div>

                        </div>
                    </div>
                )
        }
    };

    return <>{renderCard(data)}</>;
};

export default CardScrollable;
