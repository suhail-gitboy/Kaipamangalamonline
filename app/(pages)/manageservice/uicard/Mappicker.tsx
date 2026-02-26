"use client"

import React, { useState } from "react"
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import axios from "axios"
import L from "leaflet"

// 🏠 Custom icon
const houseIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/619/619032.png",
    iconSize: [36, 36],
    iconAnchor: [18, 36],
})
interface pin {
    Setpinpoint: (value: { lat: string; lng: string }) => void
    Setadress: (value: { adress: string }) => void
}

const LocationPicker = ({ Setpinpoint, Setadress }: pin) => {


    const [position, setPosition] = useState<[number, number]>([
        10.3423460, 76.1356248
    ])

    const [address, setAddress] = useState("")
    const [results, setResults] = useState<any[]>([])


    const searchPlace = async (query: string) => {
        if (!query) return setResults([])

        try {
            const res = await axios.get(
                "https://nominatim.openstreetmap.org/search",
                {
                    params: {
                        q: query,
                        format: "json",
                        limit: 5,
                    },
                }
            )
            setResults(res.data.address.suburb)
            Setadress(res.data)


        } catch (err) {
            console.log(err)
        }
    }


    const selectPlace = (item: any) => {
        const lat = parseFloat(item.lat)
        const lng = parseFloat(item.lon)

        setPosition([lat, lng])

        Setpinpoint({ lat: lat.toString(), lan: lng.toString() })
        setAddress(item.display_name)
        setResults([])
    }


    const MapClickHandler = () => {
        useMapEvents({
            click: async (e) => {
                const { lat, lng } = e.latlng
                setPosition([lat, lng])

                try {
                    const res = await fetch(`/api/location?lat=${lat}&lon=${lng}`);
                    const data = await res.json();
                    setAddress(data.display_name);
                    console.log(data);

                    Setpinpoint({
                        lat: data.lat?.toString() || lat.toString(),
                        lan: data.lon?.toString() || lng.toString(),
                    });


                    Setadress(data.display_name);

                } catch (err) {
                    console.log(err)
                }
            },
        })
        return null
    }

    return (
        <div className="p-4">


            {/* 🔍 Search Input */}
            <div className="relative">
                <input
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value)
                        searchPlace(e.target.value)
                    }}
                    placeholder="Search city, area, address"
                    className="
            w-full rounded-xl border border-lime-200
            px-4 py-3 outline-none
            focus:border-lime-500 focus:ring-1 focus:ring-lime-500
          "
                />

                {/* Results */}
                {results.length > 0 && (
                    <div className="
            absolute z-10 mt-1 w-full bg-white
            rounded-xl border shadow
          ">
                        {results.map((item) => (
                            <button
                                key={item.place_id}
                                onClick={() => selectPlace(item)}
                                className="
                  w-full text-left px-4 py-2 text-sm
                  hover:bg-lime-50
                "
                            >
                                {item.display_name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* 🗺️ Map */}
            <MapContainer
                center={position}
                zoom={13}
                className="h-[350px] rounded-2xl border border-lime-200"
            >
                <TileLayer
                    attribution="© OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={houseIcon} position={position} />
                <MapClickHandler />
            </MapContainer>

            {/* 📍 Lat Lng */}
            <div className="text-sm text-gray-600">
                Lat: {position[0].toFixed(5)} | Lng: {position[1].toFixed(5)}
            </div>
        </div>
    )
}

export default LocationPicker
