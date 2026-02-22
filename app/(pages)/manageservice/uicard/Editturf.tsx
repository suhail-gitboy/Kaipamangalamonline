import React from 'react'
import { Button } from "@/shadcn/ui/button"
import { Input } from "@/shadcn/ui/input"
import { Switch } from "@/shadcn/ui/switch"
import { Card, CardContent } from "@/shadcn/ui/card"
import { Pencil, Trash2, EyeOff, Upload, Save } from "lucide-react"
import LocationPicker from './Mappicker'

const Editturf = () => {
    return (
        <div>
            <Card className="rounded-3xl shadow-sm border border-gray-100">
                <CardContent className="p-6 space-y-8">

                    {/* HEADER */}
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold flex items-center gap-2">
                            <Pencil size={18} /> Edit Service
                        </h2>

                        <Button className="bg-lime-500 hover:bg-lime-600 text-black gap-2">
                            <Save size={16} />
                            Save Changes
                        </Button>
                    </div>

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

                    <div className="space-y-3">
                        <label className="text-sm font-medium text-gray-700">
                            Service Image
                        </label>

                        <div className="
    flex flex-col sm:flex-row
    gap-5 items-center
    p-4 rounded-2xl
    border border-lime-100
    bg-lime-50/30
  ">

                            {/* Image Preview */}
                            <div className="relative group">
                                <img
                                    src="/placeholder.jpg"
                                    className="
          w-52 h-42 sm:w-36 sm:h-36
          rounded-2xl object-cover
          border border-lime-200
          shadow-sm
        "
                                />

                                {/* Edit icon overlay */}
                                <div className="
        absolute inset-0
        bg-black/40 opacity-0
        group-hover:opacity-100
        flex items-center justify-center
        rounded-2xl
        transition
      ">
                                    <Pencil size={20} className="text-white" />
                                </div>
                            </div>


                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

                                <label className="cursor-pointer w-full sm:w-auto">
                                    <input type="file" hidden />

                                    <Button
                                        variant="outline"
                                        className="
            w-full sm:w-auto
            gap-2
            border-lime-200
            hover:bg-lime-50
            rounded-xl
            transition-all
          "
                                    >
                                        <Upload size={16} />
                                        Change Image
                                    </Button>
                                </label>

                                <Button
                                    variant="outline"
                                    className="
          w-full sm:w-auto
          gap-2
          text-red-500
          border-red-200
          hover:bg-red-50
          rounded-xl
          transition-all
        "
                                >
                                    <Trash2 size={16} />
                                    Remove
                                </Button>

                            </div>

                        </div>
                    </div>



                    {/* IMAGE EDIT */}



                    {/* TITLE */}
                    <div>
                        <label className="text-sm font-medium">Service Title</label>
                        <Input
                            placeholder="Elite Football Turf"
                            className="mt-2 border-lime-200 focus:border-lime-500 rounded-xl"
                        />
                    </div>
                    <div className="space-y-2">


                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Service Price
                            </label>

                            <div className="relative">
                                {/* ₹ Icon */}
                                <span className="
      absolute left-3 top-1/2 -translate-y-1/2
      text-gray-500 text-sm
    ">
                                    ₹
                                </span>

                                <Input
                                    type="number"
                                    placeholder="Enter price"
                                    className="
        pl-8
        border border-lime-200
        focus:border-lime-500
        focus:ring-1 focus:ring-lime-500
        rounded-xl
        transition-all
      "
                                />
                            </div>

                            {/* UNIT */}
                            <select
                                className="
      w-full h-10 px-3 mt-2
      border border-lime-200
      focus:border-lime-500
      rounded-xl text-sm
    "
                            >
                                <option>Per Hour</option>
                                <option>Per Service</option>
                                <option>Per Item</option>
                                <option>Per Day</option>
                            </select>

                            {/* Preview */}
                            <p className="text-xs text-lime-600">
                                Example: ₹800 Per Hour
                            </p>
                        </div>


                        {/* PREVIEW */}
                        <p className="text-sm text-lime-600 mt-1">
                            Example: ₹500 → ₹1200 Per Hour
                        </p>
                    </div>



                    {/* TIMING */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Service Timing
                        </label>

                        <div className="
    grid grid-cols-1 sm:grid-cols-2
    gap-3
  ">
                            {/* FROM */}
                            <div className="relative">
                                <span className="text-xs text-gray-500 mb-1 block">From</span>
                                <Input
                                    type="time"
                                    className="
          border border-lime-200
          focus:border-lime-500
          focus:ring-1 focus:ring-lime-500
          rounded-xl
          transition-all
        "
                                />
                            </div>

                            {/* TO */}
                            <div className="relative">
                                <span className="text-xs text-gray-500 mb-1 block">To</span>
                                <Input
                                    type="time"
                                    className="
          border border-lime-200
          focus:border-lime-500
          focus:ring-1 focus:ring-lime-500
          rounded-xl
          transition-all
        "
                                />
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-lime-600 mt-1">
                        Open: 06:00 AM → 10:00 PM
                    </p>



                    {/* OPTIONS */}

                    <div>
                        <label htmlFor="">Pick your exact loaction</label>
                        <LocationPicker />
                    </div>

                    {/* DANGER ZONE */}
                    <div className="pt-6 border-t space-y-3">
                        <p className="text-sm font-semibold text-red-500">
                            Danger Zone
                        </p>

                        <Button
                            className="
                w-full
                bg-red-500 hover:bg-red-600
                text-white
                rounded-xl
              "
                        >
                            Remove Service Permanently
                        </Button>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Editturf
