"use client"

import { useState } from "react"
import LocationPicker from "./Mappicker"

import { Button } from "@/shadcn/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/shadcn/ui/card"
import { Input } from "@/shadcn/ui/input"
import { Switch } from "@/shadcn/ui/switch"
import { Textarea } from "@/shadcn/ui/textarea"

import { ImagePlus, Pen, Trash2 } from "lucide-react"
import AddDishesUI from "./Adddish"

export default function FoodEditPage() {

    const [hotelImage, setHotelImage] = useState<string | null>("")

    const handleImageUpload = (e: any) => {
        const file = e.target.files[0]
        if (file) {
            setHotelImage(URL.createObjectURL(file))
        }
    }

    return (
        <div className="max-w-5xl mx-auto p-6 space-y-8">

            {/* RESTAURANT INFO */}
            <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                    <CardTitle className="text-xl">Edit Restaurant</CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="space-y-4 pt-4 border-t">

                        {/* Hide Service */}
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Hide Service</p>
                                <p className="text-sm text-gray-500">
                                    Service won’t appear to customers
                                </p>
                            </div>
                            <Switch className="
    data-[state=checked]:bg-lime-500
    data-[state=unchecked]:bg-gray-300
  " />
                        </div>

                        {/* Renewal Mode */}
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Renewal Mode</p>
                                <p className="text-sm text-gray-500">
                                    Pause bookings until renewed
                                </p>
                            </div>
                            <Switch className="
    data-[state=checked]:bg-lime-500
    data-[state=unchecked]:bg-gray-300
  " />
                        </div>

                    </div>
                    {/* Name */}
                    <div>
                        <label className="text-sm font-medium">Restaurant Name</label>
                        <Input placeholder="Aryaas Restaurant" className="mt-2 rounded-xl" />
                    </div>

                    {/* Cuisine */}
                    <div>
                        <label className="text-sm font-medium">Cuisine Type</label>
                        <Input placeholder="South Indian, Chinese, Arabian" className="mt-2 rounded-xl" />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-sm font-medium">Description</label>
                        <Textarea placeholder="Short restaurant description..." className="mt-2 rounded-xl" />
                    </div>


                    {/* HOTEL IMAGE UPLOAD */}
                    <div>
                        <label className="text-sm font-medium">Restaurant Image</label>

                        {hotelImage ? (
                            <div className="relative mt-3 w-full h-52 rounded-xl overflow-hidden">
                                <img src={hotelImage} className="w-full h-full object-cover" />

                                <button
                                    onClick={() => setHotelImage(null)}
                                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"
                                >
                                    <Pen size={18} />
                                </button>
                            </div>
                        ) : (
                            <label className="mt-3 flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 cursor-pointer hover:bg-gray-50">
                                <ImagePlus className="mb-2 text-gray-500" />
                                <span className="text-sm text-gray-600">Upload Restaurant Image</span>
                                <input type="file" hidden onChange={handleImageUpload} />
                            </label>
                        )}
                    </div>


                    {/* MAP PICKER */}
                    <div>
                        <label className="text-sm font-medium mb-2 block">
                            Restaurant Location
                        </label>

                        <div className="rounded-2xl overflow-hidden border">
                            <LocationPicker />
                        </div>
                    </div>


                    {/* OPEN SWITCH */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div>
                            <p className="font-medium">Restaurant Open</p>
                            <p className="text-xs text-gray-500">Toggle restaurant availability</p>
                        </div>
                        <Switch />
                    </div>
                    <AddDishesUI />


                    <Button className="rounded-xl bg-lime-600 hover:bg-lime-700">
                        Save Changes
                    </Button>

                </CardContent>
            </Card>

        </div>
    )
}
