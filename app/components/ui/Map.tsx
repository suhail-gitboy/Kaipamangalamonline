"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { carServices, mapPPath, turfs } from "../../../libs/Datas";

const foodIcon = new L.Icon({
    iconUrl: "/icons/chicken-leg.png",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
});

const carIcon = new L.Icon({
    iconUrl: "/car.png",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
});
const turfIcon = new L.Icon({
    iconUrl: "/football.png",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
});

export default function MapLocation({ service }: { service: string }) {
    const center: [number, number] = [10.3567, 76.1198];

    const renderService =
        service === "fooddelivery"
            ? mapPPath
            : service === "autoservices"
                ? carServices
                : service === "turf" ? turfs : [];

    const icon =
        service === "fooddelivery" ? foodIcon : service === "turf" ? turfIcon : carIcon;

    return (
        <div className="w-full h-full rounded-xl overflow-hidden">
            <MapContainer center={center} zoom={13} className="h-full w-full">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {renderService.map((data: any) => {
                    const imageUrl =
                        data.images?.url ||
                        data.image?.url ||
                        data.images?.[0]?.url ||
                        "/placeholder.jpg";

                    return (
                        <Marker
                            key={data._id}
                            position={[data.location.lat, data.location.lng]}
                            icon={icon}
                        >
                            <Popup>
                                <div className="w-48 rounded-xl overflow-hidden bg-white shadow-lg">
                                    <img
                                        src={imageUrl}
                                        alt={data.name}
                                        className="w-full h-24 object-cover"
                                    />

                                    <div className="p-2">
                                        <h3 className="text-sm font-semibold truncate">
                                            {data.name}
                                        </h3>

                                        {data.title && (
                                            <p className="text-xs text-gray-500 line-clamp-2">
                                                {data.title}
                                            </p>
                                        )}

                                        {data.price && (
                                            <p className="text-xs font-medium text-lime-600 mt-1">
                                                {data.price}
                                            </p>
                                        )}

                                        {data.available !== undefined && (
                                            <span
                                                className={`text-xs font-semibold ${data.available
                                                    ? "text-green-600"
                                                    : "text-red-500"
                                                    }`}
                                            >
                                                {data.available ? "Available" : "Unavailable"}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
}
