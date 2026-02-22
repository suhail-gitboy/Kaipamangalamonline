
import { restaurants } from "@/libs/Datas";
import { Star, Sparkles, MoreVertical } from "lucide-react";
import Link from "next/link";
export interface Items {
    _id: string;
    name: string;
    image: {
        url: string;
    };
    offer: string;
    rating: number;
    deliveryTime: string;
    cuisine: string[];
    location: {
        area: string;
        city: string;
        lat: number;
        lng: number;
    };
}

export default function RestaurantList({ item }: { item: Items }) {
    const id: number = 12134
    return (


        <Link
            href={`/viewservice/fooddelivery/${id}`}
            key={item._id}
            className="max-w-2xl w-full bg-white border rounded-2xl p-4 flex justify-between gap-4 hover:shadow-lg transition"
        >
            {/* IMAGE */}
            <div className="relative w-40 h-28 shrink-0" >
                <img
                    src={item.image.url}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl"
                />
                <span className="absolute bottom-2 left-2 bg-black/85 text-white text-xs font-semibold px-2 py-1 rounded-md">
                    {item.offer}
                </span>
            </div>

            {/* DETAILS */}
            <div className="flex flex-col flex-1 justify-between">
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">{item.name}</h3>

                    <div className="flex items-center gap-2 text-gray-500 hover:text-black cursor-pointer">
                        <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
                        <MoreVertical className="w-4 h-4" />
                    </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="flex items-center gap-1 text-green-600 font-medium">
                        <Star className="w-4 h-4 fill-green-600" />
                        {item.rating}
                    </span>
                    <span>•</span>
                    <span>{item.deliveryTime}</span>
                </div>

                <p className="text-sm text-gray-500">
                    {item.cuisine.join(", ")}
                </p>


            </div>
        </Link >

    );
}