"use client"
import React, { useEffect, useState } from "react";
import { FaUserCircle, FaClock, FaMapMarkerAlt, FaDollarSign, FaTag, FaHeart, FaRegHeart, FaTimes } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { format } from "date-fns";

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

import { useStore } from "@/app/zustandstate/Store";
import { useSession } from "next-auth/react";
import { useQueryClient } from "@tanstack/react-query";
import { useLike } from "@/app/APISERVICES/allServices";
import { functionFormated } from "@/libs/date";
import { PostType } from "@/app/types";
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

interface Ficture {
    from: Date,
    to: Date
}
export interface CardProps {
    mobilenumber: string
    image: {
        url: string,
        public_id: string
    };
    views: {

    }[]
    title: string;
    description?: string;
    location?: string;
    type?: string; // sale/rent
    price?: string;
    category?: string; // news/shop/tournament
    user?: string;
    fixture?: Ficture,
    _id: string
    likes: {
        name: string,
        img: string
    }[],
    createdAt: Date
}

const CardScrollable = ({ data }: { data: CardProps }) => {
    const { data: session } = useSession()
    const { mutate } = useLike()
    let userdata = session?.user



    const renderCard = (card: CardProps) => {
        const { createdAt, likes, _id, title, category, description, location, image, type, price, user, fixture } = card;
        const liked = likes?.some((i: any) => i.name == userdata?.name)
        console.log(liked);

        switch (category) {
            case "news":
                const createdDate = new Date(card?.createdAt);
                const formattedDate = new Intl.DateTimeFormat("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                }).format(createdDate);

                return (
                    <div className="bg-white rounded-2xl shadow-md w-full mx-auto my-4 hover:shadow-xl transition-shadow duration-300 overflow-hidden">

                        {/* Top Image */}
                        <div className="relative w-full h-64">
                            <img
                                src={image.url}
                                alt={description || title}
                                className="w-full h-full object-cover rounded-t-2xl"
                            />

                            {/* Category Badge */}
                            <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white bg-orange-600 rounded-full shadow">
                                📰 News
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-4 space-y-2">
                            {/* Type Badge */}
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                                {type || "Public"}
                            </span>

                            {/* Title */}
                            <h3 className="text-gray-900 font-bold text-lg leading-snug line-clamp-2">
                                {title}
                            </h3>
                            <h3 className="text-gray-500 font-semibold text-md leading-snug line-clamp-2">
                                {description}
                            </h3>

                            {/* Location */}
                            {location && (
                                <div className="flex items-center gap-1 text-sm text-lime-600">
                                    <FaMapMarkerAlt className="text-sm" />
                                    <span className="truncate">{location}</span>
                                </div>
                            )}

                            {/* Views & Likes */}
                            <div className="flex justify-between items-center mt-2">
                                <div className="flex items-center gap-4 text-gray-600 text-sm">
                                    {/* Views */}
                                    <div className="flex items-center gap-1">
                                        <FaEye className="text-lime-600" />
                                        <span>{card.views?.length || 0}</span>
                                    </div>



                                    <button
                                        type="button"
                                        className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
                                        onClick={() => {






                                            mutate({ username: userdata?.name as string, propertyid: _id })
                                        }}
                                    >
                                        {liked ? <FaHeart /> : <FaRegHeart />}
                                        <span>{likes?.length}</span>
                                    </button>
                                </div>

                                {/* View More Button */}
                                <button className="flex items-center gap-1 bg-lime-600 text-white px-3 py-1 rounded-lg font-semibold hover:bg-lime-700 shadow text-xs">
                                    <FaMapMarkerAlt className="text-white" />
                                    View More
                                </button>
                            </div>

                            {/* Created At */}
                            <div className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                                <FaClock className="text-lime-600 text-sm" />
                                <span>{formattedDate}</span>
                            </div>
                        </div>
                    </div>
                );

            case "realestate":

                return (
                    <div className="bg-white relative rounded-xl shadow-md w-full  mx-auto my-3 hover:shadow-lg transition-shadow duration-300 ">

                        <div className="relative w-full h-66">
                            <img src={image.url} alt={title} className="w-full h-full  rounded-t-2xl object-cover" />
                            {type && (
                                <span
                                    className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full text-white ${type === "sale" ? "bg-green-600" : "bg-blue-600"
                                        }`}
                                >
                                    {category?.toUpperCase()}
                                </span>
                            )}
                        </div>


                        <div className="p-1 flex flex-col px-3">
                            <h3 className="text-black font-bold text-md  truncate">{title.toUpperCase()}</h3>
                            <h3 className="text-neutral-500 font-semibold text-sm ">{description}</h3>

                            {/* Location */}
                            <div className="flex justify-between mt-4">
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

                            </div>
                            {/* Category */}
                            {category && (
                                <div className="absolute bg-black/40 rounded-md p-2 top-2 right-2">
                                    <div className=" flex items-center text-white text-xs font-semibold gap-2">
                                        <FaTag className="text-lime-600" />
                                        <span>available for sale </span>
                                    </div>
                                </div>

                            )}


                            <div className="flex items-center justify-between mt-3  border-t border-gray-100 p-2">

                                <div className="flex items-center gap-4 text-xs text-gray-600">

                                    <div className="flex items-center gap-1">
                                        <FaEye className="text-lime-600" />
                                        <span>1.2k</span>
                                    </div>


                                    <button
                                        type="button"
                                        className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
                                        onClick={() => {






                                            mutate({ username: userdata?.name as string, propertyid: _id })
                                        }}
                                    >
                                        {liked ? <FaHeart /> : <FaRegHeart />}
                                        <span>{likes?.length}</span>
                                    </button>
                                </div>

                                {/* Contact Button */}
                                <a href={`tel:${data.mobilenumber}`} className="flex items-center gap-2 bg-lime-600 text-white px-4 py-1 rounded-lg font-semibold hover:bg-lime-700 shadow-md transition text-xs">
                                    <FaMapMarkerAlt className="text-white" />
                                    Contact
                                </a>
                            </div>

                        </div>
                    </div>
                );
            case "tournaments":

                const fromDate = new Date(fixture?.from || "");
                const toDate = new Date(fixture?.to || "");
                const today = new Date();

                let status = "Upcoming";
                if (today > toDate) status = "Finished";
                else if (today >= fromDate && today <= toDate) status = "Live";

                return (



                    <div className="bg-white rounded-2xl shadow-md w-full mx-auto my-4 hover:shadow-xl transition-all duration-300 overflow-hidden">

                        <div className="relative h-52 w-full">
                            <img
                                src={image.url}
                                alt={title}
                                className="w-full h-full object-cover"
                            />


                            <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full text-white
                    ${status === "Live" ? "bg-red-600 animate-pulse"
                                    : status === "Finished" ? "bg-gray-600"
                                        : "bg-blue-600"}`}>
                                {status}
                            </span>


                            <span className="absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full text-white bg-purple-600">
                                🏆 TOURNAMENT
                            </span>
                        </div>

                        <div className="p-4 flex flex-col gap-2">
                            <span className="px-3 py-1 rounded-full bg-lime-100 w-fit text-lime-700 flex items-center gap-1 font-semibold">
                                {getCategoryIcon(type)}
                                {type || "Sports"}
                            </span>
                            <div className="flex justify-between items-center text-sm">

                                <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
                                    {title}
                                </h3>
                                <h3 className="text-md font-semibold text-gray-500 line-clamp-2">
                                    {description}
                                </h3>





                            </div>

                            {/* LOCATION */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <FaMapMarkerAlt className="text-lime-600" />
                                    {location}
                                </div>
                                <span className="flex items-center gap-1 text-blue-600 font-medium">
                                    <CiCalendarDate className="text-lg" />
                                    {functionFormated(fixture?.from, fixture?.to)}
                                </span>
                            </div>



                            {/* CONTACT */}


                            {/* FOOTER */}
                            <div className="flex items-center justify-between pt-3 border-t mt-2">

                                {/* Views & Likes */}
                                <div className="flex items-center gap-4 text-sm">
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <FaEye />
                                        1.2k
                                    </div>

                                    <button
                                        type="button"
                                        className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
                                        onClick={() => {






                                            mutate({ username: userdata?.name as string, propertyid: _id })
                                        }}
                                    >
                                        {liked ? <FaHeart /> : <FaRegHeart />}
                                        <span>{likes?.length}</span>
                                    </button>
                                </div>

                                {/* Join Button */}
                                <a
                                    href={`tel:${data.mobilenumber}`}
                                    className="bg-lime-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-lime-700 transition shadow"
                                >
                                    📞 Join Tournament
                                </a>
                            </div>
                        </div>
                    </div>

                )

            default: {




                return (
                    <div className="w-full my-4">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">

                            {/* IMAGE */}
                            <div className="relative w-full h-64">
                                <img
                                    src={image?.url}
                                    alt={description || title}
                                    className="w-full h-full object-cover rounded-t-xl"
                                />

                                {/* CATEGORY BADGE */}
                                <span
                                    className={`absolute top-3 left-3 px-3 py-1 text-sm font-semibold text-white rounded-full flex items-center gap-1 shadow-md
            ${category === "news" ? "bg-orange-500" :
                                            category === "grocery" ? "bg-lime-500" :
                                                category === "shop" ? "bg-blue-500" :
                                                    category === "event" ? "bg-purple-500" :
                                                        category === "chaispot" ? "bg-yellow-500" :
                                                            "bg-gray-400"
                                        }`}
                                >
                                    {category === "news" && "📰 News"}
                                    {category === "grocery" && "🛒 Grocery"}
                                    {category === "shop" && "🏪 Shop"}
                                    {category === "event" && "📅 Event"}
                                    {category === "chaispot" && "☕ ChaiSpot"}
                                    {!category && "Public"}
                                </span>
                            </div>

                            {/* CONTENT */}
                            <div className="p-4 space-y-3 font-sans">

                                {/* TITLE */}
                                <h3 className="text-gray-900 font-bold text-lg sm:text-xl line-clamp-2 leading-snug">
                                    {title}
                                </h3>

                                {/* LOCATION */}
                                {location && (
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <FaMapMarkerAlt className="text-lime-600" />
                                        <span>{location}</span>
                                    </div>
                                )}


                                {category === "event" && fixture?.from && fixture?.to && (
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <FaCalendarAlt className="text-purple-500" />
                                        <span>{functionFormated(fixture.from, fixture.to)}</span>
                                    </div>
                                )}


                                <div className="flex justify-between items-center pt-2">
                                    {/* VIEWS & LIKES */}
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <FaEye className="text-lime-600" />
                                            <span>{0}</span>
                                        </div>
                                        <button
                                            type="button"
                                            className="flex items-center gap-1 text-red-500 hover:text-red-600 transition"
                                            onClick={() => {






                                                mutate({ username: userdata?.name as string, propertyid: _id })
                                            }}
                                        >
                                            {liked ? <FaHeart /> : <FaRegHeart />}
                                            <span>{likes?.length}</span>
                                        </button>
                                    </div>

                                    {/* ACTION BUTTON */}
                                    {category === "grocery" ? (
                                        <a
                                            href={`tel:${data.mobilenumber}`}
                                            className="flex items-center gap-2 bg-lime-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-lime-700 shadow-md transition text-sm"
                                        >
                                            Call to Buy
                                        </a>
                                    ) : (
                                        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 shadow-md transition text-sm">
                                            For More
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2 text-xs text-gray-500 border-t border-gray-100">
                                <FaClock className="text-lime-600 text-sm" />
                                <span>{new Date(createdAt).toLocaleString("en-US", { weekday: "short", month: "short", day: "numeric" })}</span>
                            </div>

                        </div>
                    </div>
                );

            }
        }
    };

    return <>{renderCard(data)}</>;
};

export default CardScrollable;
