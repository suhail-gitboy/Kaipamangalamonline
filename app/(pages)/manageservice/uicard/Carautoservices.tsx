"use client"

import { useState } from "react"
import { Button } from "@/shadcn/ui/button"
import { Input } from "@/shadcn/ui/input"
import { Card, CardContent } from "@/shadcn/ui/card"
import { Switch } from "@/shadcn/ui/switch"
import {
    Select, SelectTrigger, SelectValue,
    SelectContent, SelectItem
} from "@/shadcn/ui/select"

import {
    Car, Phone, MapPin, Trash2,
    Plus, Clock, Pencil, ImagePlus
} from "lucide-react"

type ServiceType = "taxi" | "rental" | "repair"

type AutoService = {
    name: string
    carName: string
    contact: string
    location: string
    type: ServiceType
    price: string
    perDay?: boolean
    timeFrom?: string
    timeTo?: string
    image?: string | null
}

export default function AutoServiceUI() {

    const emptyService: AutoService = {
        name: "",
        carName: "",
        contact: "",
        location: "",
        type: "taxi",
        price: "",
        perDay: false,
        timeFrom: "09:00",
        timeTo: "20:00",
        image: null,
    }

    const [input, setInput] = useState<AutoService>(emptyService)
    const [services, setServices] = useState<AutoService[]>([])
    const [editIndex, setEditIndex] = useState<number | null>(null)

    const handleImage = (e: any) => {
        const file = e.target.files[0]
        if (file) setInput({ ...input, image: URL.createObjectURL(file) })
    }

    const addOrUpdate = () => {
        if (!input.name) return

        if (editIndex !== null) {
            const copy = [...services]
            copy[editIndex] = input
            setServices(copy)
            setEditIndex(null)
        } else {
            setServices([...services, input])
        }

        setInput(emptyService)
    }

    const editService = (i: number) => {
        setInput(services[i])
        setEditIndex(i)
    }

    const removeService = (i: number) =>
        setServices(services.filter((_, idx) => idx !== i))

    return (
        <div className="space-y-6">

            {/* ADD / EDIT CARD */}
            <Card className="rounded-2xl shadow-sm border-lime-100">
                <CardContent className="p-5 space-y-4">

                    <h3 className="font-semibold text-lg flex items-center gap-2">
                        <Car size={20} /> {editIndex !== null ? "Edit Auto Service" : "Add Auto Service"}
                    </h3>

                    <Input placeholder="Owner Name"
                        value={input.name}
                        onChange={(e) => setInput({ ...input, name: e.target.value })}
                    />

                    <Input placeholder="Car Name (Swift, Innova)"
                        value={input.carName}
                        onChange={(e) => setInput({ ...input, carName: e.target.value })}
                    />

                    <Input placeholder="Contact Number"
                        value={input.contact}
                        onChange={(e) => setInput({ ...input, contact: e.target.value })}
                    />

                    <Input placeholder="Location"
                        value={input.location}
                        onChange={(e) => setInput({ ...input, location: e.target.value })}
                    />

                    {/* IMAGE UPLOAD */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Car Image</label>

                        {input.image ? (
                            <div className="relative w-full h-40 rounded-xl overflow-hidden">
                                <img src={input.image} className="w-full h-full object-cover" />
                                <button
                                    onClick={() => setInput({ ...input, image: null })}
                                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ) : (
                            <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 cursor-pointer hover:bg-gray-50">
                                <ImagePlus className="mb-2 text-gray-500" />
                                <span className="text-sm text-gray-600">Upload Car Image</span>
                                <input hidden type="file" onChange={handleImage} />
                            </label>
                        )}
                    </div>

                    {/* TYPE */}
                    <Select
                        value={input.type}
                        onValueChange={(v: any) => setInput({ ...input, type: v })}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="taxi">Taxi</SelectItem>
                            <SelectItem value="rental">Rental</SelectItem>
                            <SelectItem value="repair">Repair</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* PRICE */}
                    {input.type !== "repair" && (
                        <Input
                            placeholder={input.type === "rental"
                                ? input.perDay ? "Price per day ₹" : "Rental price ₹"
                                : "Taxi price ₹"}
                            value={input.price}
                            onChange={(e) => setInput({ ...input, price: e.target.value })}
                        />
                    )}

                    {/* RENTAL MODE */}
                    {input.type === "rental" && (
                        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                            <span className="text-sm">
                                {input.perDay ? "Daily Rental" : "Normal Rental"}
                            </span>
                            <Switch
                                checked={input.perDay}
                                onCheckedChange={(v) => setInput({ ...input, perDay: v })}
                            />
                        </div>
                    )}

                    {/* TIME */}
                    <div className="grid grid-cols-2 gap-3">
                        <Input type="time"
                            value={input.timeFrom}
                            onChange={(e) => setInput({ ...input, timeFrom: e.target.value })}
                        />
                        <Input type="time"
                            value={input.timeTo}
                            onChange={(e) => setInput({ ...input, timeTo: e.target.value })}
                        />
                    </div>

                    <Button
                        onClick={addOrUpdate}
                        className="w-full rounded-xl bg-lime-600 hover:bg-lime-700"
                    >
                        <Plus className="mr-2 h-4 w-4" />
                        {editIndex !== null ? "Update Service" : "Add Service"}
                    </Button>

                </CardContent>
            </Card>


            {/* SERVICE LIST */}
            {services.length > 0 && (
                <Card className="rounded-2xl shadow-sm">
                    <CardContent className="p-4 space-y-3">

                        <h3 className="font-semibold text-lg">Added Services</h3>

                        {services.map((s, i) => (
                            <div key={i}
                                className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border hover:shadow-sm"
                            >

                                {/* IMAGE */}
                                {s.image && (
                                    <img
                                        src={s.image}
                                        className="w-full sm:w-28 h-28 rounded-xl object-cover"
                                    />
                                )}

                                {/* INFO */}
                                <div className="flex-1 space-y-1">
                                    <p className="font-medium flex gap-2 items-center">
                                        <Car size={16} /> {s.carName}
                                    </p>
                                    <p className="text-xs text-gray-500 flex gap-2">
                                        <Phone size={14} /> {s.contact}
                                    </p>
                                    <p className="text-xs text-gray-500 flex gap-2">
                                        <MapPin size={14} /> {s.location}
                                    </p>
                                    <p className="text-xs text-gray-500 flex gap-2">
                                        <Clock size={14} /> {s.timeFrom} - {s.timeTo}
                                    </p>
                                    {s.price && (
                                        <p className="text-xs text-lime-600 font-medium">
                                            ₹{s.price} {s.perDay && "/day"}
                                        </p>
                                    )}
                                </div>

                                {/* ACTIONS */}
                                <div className="flex gap-2 self-start">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => editService(i)}
                                    >
                                        <Pencil size={16} />
                                    </Button>

                                    <Button
                                        variant="destructive"
                                        size="icon"
                                        onClick={() => removeService(i)}
                                    >
                                        <Trash2 size={16} />
                                    </Button>
                                </div>

                            </div>
                        ))}

                    </CardContent>
                </Card>
            )}

        </div>
    )
}
