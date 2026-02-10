"use client"
import React, { useState } from "react";
import { FaUserCircle, FaClock, FaMapMarkerAlt, FaDollarSign, FaTag, FaHeart, FaRegHeart, FaTimes } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import {

    FaTrophy,
    FaFootballBall,
    FaBasketballBall,
    FaRunning
} from "react-icons/fa";
import {
    FaShoppingBasket,
    FaStore,
    FaCalendarAlt,
    FaNewspaper,

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
import { CiCalendarDate } from "react-icons/ci";
const TYPE_CONFIG: Record<string, any> = {
    news: {
        label: "News",
        icon: <FaNewspaper />,
        badge: "bg-orange-600",
    },
    grocery: {
        label: "Grocery",
        icon: <FaShoppingBasket />,
        badge: "bg-lime-600",
    },
    shop: {
        label: "Shop",
        icon: <FaStore />,
        badge: "bg-blue-600",
    },
    event: {
        label: "Event",
        icon: <FaCalendarAlt />,
        badge: "bg-purple-600",
    },
    default: {
        label: "Public",
        icon: <FaNewspaper />,
        badge: "bg-gray-500",
    },
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
    fixture?: string
}


const CardScrollable = ({ data }: { data: CardProps }) => {
    const [liked, setLiked] = useState(false);

    const renderCard = (card: CardProps) => {
        const { title, category, description, location, image, type, price, user, time } = card;

        switch (category) {
            case "news":
                return (
                    <div className="">
                        <div className="bg-white rounded-xl shadow-md w-full  mx-auto my-3 hover:shadow-lg transition-shadow duration-300">

                            {/* Top Image */}
                            <div className="relative w-full h-66">
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

            case "sale":

                return (
                    <div className="bg-white rounded-xl shadow-md w-full  mx-auto my-3 hover:shadow-lg transition-shadow duration-300 ">

                        <div className="relative w-full h-66">
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


                        <div className="p-1 flex flex-col gap-1">
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
                                    <span>available for {type} </span>
                                </div>
                            )}

                            {/* Action Buttons */}
                            {/* Action Footer */}
                            <div className="flex items-center justify-between mt-3  border-t border-gray-100 p-2">
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
                    <div className="bg-white rounded-xl shadow-md w-full mx-auto my-3 hover:shadow-lg transition-shadow duration-300 ">

                        {/* Top Image */}
                        <div className="relative w-full h-66">
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
                        <div className="p-4 flex flex-col gap-1">
                            <div className="flex justify-between items-center">

                                <span className=" px-3 py-1 text-sm font-bold w-fit p-3 rounded-full bg-lime-100 text-lime-600 flex items-center gap-1">
                                    {getCategoryIcon(type)}
                                    {type}
                                </span>

                                <p className="items-center flex gap-1  text-blue-600 font-bold"><CiCalendarDate className="text-blue-600 text-xl" />:FEB 26-27</p>
                            </div>
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

            default: {


                return (

                    <div>
                        <div className="bg-white rounded-xl shadow-md w-full mx-auto my-3 hover:shadow-lg transition-shadow duration-300">

                            {/* IMAGE */}
                            <div className="relative w-full h-66">
                                <img
                                    src={image}
                                    alt={description}
                                    className="w-full h-full rounded-t-2xl object-cover"
                                />

                                {/* CATEGORY BADGE */}
                                <span
                                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold text-white rounded-full flex items-center gap-1
            ${category === "news"
                                            ? "bg-orange-600"
                                            : category === "grocery"
                                                ? "bg-lime-600"
                                                : category === "shop"
                                                    ? "bg-blue-600"
                                                    : category === "event"
                                                        ? "bg-purple-600"
                                                        : "bg-gray-500"
                                        }`}
                                >
                                    {category === "news" && "📰 News"}
                                    {category === "grocery" && "🛒 Grocery"}
                                    {category === "shop" && "🏪 Shop"}
                                    {category === "event" && "📅 Event"}
                                    {category === "chaispot" && "☕ ChaiSpot"}
                                    {!category && "Public"}
                                </span>

                                {/* EVENT STATUS */}
                                {type === "upcoming" && (
                                    <span className="absolute top-2 right-2 px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded-full">
                                        Upcoming
                                    </span>
                                )}
                            </div>

                            {/* CONTENT */}
                            <div className="p-4 space-y-3">

                                {/* TYPE CHIP */}
                                <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full w-fit">
                                    {type || "Public"}
                                </span>

                                {/* TITLE */}
                                <h3 className="text-black font-bold text-base leading-snug line-clamp-2">
                                    {title}
                                </h3>

                                {/* EVENT FIXTURE */}
                                {category === "event" && (
                                    <div className="flex items-center gap-1 text-xs text-gray-600">
                                        <FaCalendarAlt className="text-lime-600" />
                                        <span>12-34 FEB</span>
                                    </div>
                                )}

                                {/* LOCATION */}
                                {location && (
                                    <button className="flex items-center gap-1 mt-2 text-lime-600 text-xs font-medium px-3 py-1 rounded-full border border-lime-300 hover:bg-lime-50 transition">
                                        <FaMapMarkerAlt className="text-sm" />
                                        {location}
                                    </button>
                                )}

                                {/* FOOTER */}
                                <div className="flex justify-between items-center pt-2">
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

                                    <button className="flex items-center gap-2 bg-lime-600 text-white px-4 py-1 rounded-lg font-semibold hover:bg-lime-700 shadow-md transition text-xs">
                                        View more
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* TIME */}
                        <div className="flex p-3 items-center text-xs text-gray-500 pt-1 ml-6">
                            <FaClock className="text-lime-600 text-sm mr-1" />
                            <span>{time || "Just now"}</span>
                        </div>
                    </div>
                )
            }
        }
    };

    return <>{renderCard(data)}</>;
};

export default CardScrollable;
