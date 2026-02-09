"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { mapPPath } from "@/app/libs/Datas";

const foodIcon = new L.Icon({
    iconUrl: "/icons/chicken-leg.png",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -36],
});

export default function MapLocation() {

    const center: [number, number] = [10.3567, 76.1198];



    return (
        <div className="w-full h-full rounded-xl overflow-hidden">
            <MapContainer
                center={center}
                zoom={14}
                className="h-full w-full"
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {mapPPath.map((data) => (
                    <Marker
                        key={data._id}
                        position={[data.location.lat, data.location.lng]}
                        icon={foodIcon}
                    >
                        <Popup>
                            <div className="w-44 rounded-xl overflow-hidden bg-white shadow-lg">
                                <img
                                    src={data.images[0].url}
                                    alt={data.images[0].public_id}
                                    className="w-full h-24 object-cover"
                                />
                                <div className="p-2">
                                    <h3 className="text-sm font-semibold truncate">
                                        {data.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 line-clamp-2">
                                        {data.title}
                                    </p>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
