import Link from "next/link";
import { Star, PhoneCall, Car } from "lucide-react";
import { CarServiceItem, carServices } from "@/app/libs/Datas";

export default function CarServiceCard({ item }: { item: CarServiceItem }) {
    return (
        <Link href={`/viewservice/autoservices`} className="max-w-2xl w-full bg-white border rounded-2xl p-4 flex gap-4 hover:shadow-lg transition">

            {/* LEFT IMAGE */}
            <div className="relative w-40 h-28 shrink-0">
                <img
                    src={item.images.url}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl"
                />

                {/* SERVICE TYPE BADGE */}
                <span
                    className={`absolute top-2 left-2 text-xs font-semibold px-2 py-1 rounded-md text-white
            ${item.type === "taxi" && "bg-yellow-600"}
            ${item.type === "rental" && "bg-blue-600"}
            ${item.type === "dailyrental" && "bg-purple-600"}
          `}
                >
                    {item.type === "taxi" && "🚕 Taxi"}
                    {item.type === "rental" && "🚗 Rental"}
                    {item.type === "dailyrental" && "🚙 Daily Rental"}
                </span>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex flex-col flex-1 justify-between">

                {/* TITLE + RATING */}
                <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">{item.name}</h3>

                    <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                        <Star className="w-4 h-4 fill-green-600" />
                        {item.rating}
                    </span>
                </div>

                {/* LOCATION */}
                <p className="text-sm text-gray-500">
                    {item.location.area}, {item.location.city}
                </p>

                {/* CONDITIONAL: TAXI DRIVER */}
                {item.type === "taxi" && item.driverName && (
                    <p className="text-sm text-gray-600">
                        Driver: <span className="font-medium">{item.driverName}</span>
                    </p>
                )}

                {/* FOOTER */}
                <div className="flex justify-between items-center mt-2">

                    {/* PRICE */}
                    <span className="text-sm font-semibold text-gray-800">
                        {item.price}
                    </span>

                    {/* ACTIONS */}
                    <div className="flex items-center gap-2">
                        {item.type === "taxi" && item.contact && (
                            <a
                                href={`tel:${item.contact}`}
                                className="flex items-center gap-1 text-xs bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition"
                            >
                                <PhoneCall className="w-3 h-3" />
                                Call
                            </a>
                        )}

                        <Link
                            href={`/viewservice/${item.type}`}
                            className="flex items-center gap-1 text-xs bg-gray-100 px-3 py-1 rounded-lg hover:bg-gray-200 transition"
                        >
                            <Car className="w-3 h-3" />
                            View
                        </Link>
                    </div>
                </div>

                {/* AVAILABILITY */}
                {!item.available && (
                    <span className="text-xs text-red-500 font-medium mt-1">
                        Currently unavailable
                    </span>
                )}
            </div>
        </Link>
    );
}
