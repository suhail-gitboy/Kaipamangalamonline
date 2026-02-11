import Link from "next/link";
import { Star, Clock } from "lucide-react";
import { TurfItem } from "@/app/libs/Datas";

export default function TurfCard({ item }: { item: TurfItem }) {
    return (
        <Link
            key={item._id}
            href={`/viewservice/turf/${item._id}`}
            className="max-w-2xl w-full bg-white border rounded-2xl p-4 flex gap-4 hover:shadow-lg transition"
        >
            {/* IMAGE */}
            <div className="relative w-40 h-28 shrink-0">
                <img
                    src={item.image.url}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl"
                />

                {/* BOOKING STATUS */}
                <span
                    className={`absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded-md text-white
            ${item.bookingStatus === "available" && "bg-green-600"}
            ${item.bookingStatus === "few" && "bg-yellow-500"}
            ${item.bookingStatus === "high" && "bg-red-600"}
          `}
                >
                    {item.bookingStatus === "available" && "Available"}
                    {item.bookingStatus === "few" && "Few Slots"}
                    {item.bookingStatus === "high" && "High Booking"}
                </span>
            </div>

            {/* DETAILS */}
            <div className="flex flex-col flex-1 justify-between">
                {/* NAME + RATING */}
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">{item.name}</h3>

                    <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                        <Star className="w-4 h-4 fill-green-600" />
                        {item.rating}
                    </span>
                </div>

                {/* TIMING */}
                <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-lime-600" />
                    {item.timing}
                </div>

                {/* SPORTS */}
                <p className="text-sm text-gray-500">
                    {item.sports.join(", ")}
                </p>

                {/* LOCATION */}
                <p className="text-xs text-gray-400">
                    {item.location.area}, {item.location.city}
                </p>
            </div>
        </Link>
    );
}
