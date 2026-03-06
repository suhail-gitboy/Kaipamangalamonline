"use client"
import React, { useState } from 'react'
import { Button } from "@/shadcn/ui/button"
import { Input } from "@/shadcn/ui/input"
import { Switch } from "@/shadcn/ui/switch"
import { Card, CardContent } from "@/shadcn/ui/card"
import { Pencil, Trash2, EyeOff, Upload, Save } from "lucide-react"
import LocationPicker from '@/app/(pages)/manageservice/uicard/Mappicker'
import { useRouter } from 'next/navigation'
import { FaImage, FaXmark } from 'react-icons/fa6'

export const Turf = () => {
    const [preview, Setpreview] = useState(null)
    const [img, Setimg] = useState(null)
    const [games, Setgames] = useState([])
    const [pin, Setpinpoint] = useState({
        lat: "",
        lan: ""
    })
    const router = useRouter()
    const [adress, Setadress] = useState("")
    const [price, setPRice] = useState("")
    const [Priceandgame, Setarray] = useState([])
    const [settime, Settime] = useState({
        from: "",
        to: ""
    })

    const Mainaddress = {
        lat: pin.lat,
        lan: pin.lan,
        address: adress
    }
    const [detail, setdetail] = useState({
        title: "",
        description: "",
        contact: ""
    })

    const Selectpriceforgame = (game) => {
        if (!price) {
            alert("choose price")
            return
        }
        const value = {
            price: price,
            game: game
        }
        Setarray([...Priceandgame, value])

        setPRice("")


    }

    const Selectgames = (game) => {
        setPRice("")


        Setgames((prev) =>
            prev.includes(game)
                ? prev.filter((item) => item !== game)
                : [...prev, game]
        );
    };
    const imageupload = (e: FormData) => {

        if (!e) return null
        const img = e.target?.files[0]
        Setimg(img)
        const url = URL.createObjectURL(img)
        Setpreview(url)
    }
    const [slotInput, setSlotInput] = useState("");
    const [slots, setSlots] = useState([]);
    const addSlot = () => {
        if (!slotInput.trim()) return;


        if (slots.includes(slotInput.trim())) return;

        setSlots((prev) => [...prev, slotInput.trim()]);
        setSlotInput("");
    };
    const removeSlot = (slot: string) => {
        setSlots((prev) => prev.filter((s) => s !== slot));
    };
    const handleDetailChange = (e) => {
        const { name, value } = e.target;
        setdetail((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleTimeChange = (e) => {
        const { name, value } = e.target;
        Settime((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const [load, setload] = useState(false)

    const functionsubmit = async () => {
        if (!img) {
            alert("upload image")
            return
        }
        const { title, description, contact } = detail
        const { from, to } = settime

        if (!title || !description || !contact || !from || !to) {
            alert("fill the field")
            return

        }

        if (Priceandgame.length == 0) {
            alert("choose the game")
            return

        } if (slots.length == 0) {
            alert("choose the slot")
            return

        }
        setload(true)
        const formdata = new FormData()

        formdata.append("description", description)
        formdata.append("contact", contact)
        formdata.append("title", title)

        formdata.append("image", img)
        formdata.append("servicetime", JSON.stringify(settime))
        formdata.append("slot", JSON.stringify(slots))
        formdata.append("gameandprice", JSON.stringify(Priceandgame))
        formdata.append("address", JSON.stringify(Mainaddress))

        try {
            const res = await fetch("/api/servicepost/turfpost", { method: "POST", body: formdata })
            if (res.status == 201) {
                alert("success. upload")
            }
        } catch (error) {
            setload(false)
            console.log(error);

        }
    }


    return (
        <div className='w-full  md:w-3/4 py-10 mx-auto'>
            <div className="mb-8 px-4">
                <h1 className="text-3xl font-bold text-lime-300">
                    Turf Booking
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    Create and manage your turf service details
                </p>
            </div>
            <Card className="rounded-3xl shadow-sm border border-gray-100">
                <CardContent className="p-6 space-y-8">



                    <div className="space-y-4 pt-4 border-t">



                    </div>



                    <div className=" mx-auto w-2/3 md:w-2/4 h-40">
                        {
                            preview && <div className="relative ">
                                <div className="absolute inset-0 bg-black/40 z-50 opacity-0 hover:opacity-100 flex items-center justify-center gap-4 transition rounded-2xl">

                                    <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                                        Change
                                    </span>

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            Setimg(null)
                                            Setpreview(null)
                                        }}
                                        className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                                    >
                                        Remove
                                    </button>

                                </div>
                                <img src={preview} className="w-full h-40 object-cover rounded-2xl" />

                            </div>
                        }
                        {
                            !preview && <>
                                <label className="text-sm font-medium text-gray-700 block mb-2">
                                    Upload Image
                                </label>

                                <label className="flex flex-col items-center justify-center h-36 border-2 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                                    <FaImage className="text-3xl text-gray-400 mb-2" />
                                    <p className="text-sm text-gray-600">
                                        Click to upload
                                    </p>

                                    <input
                                        type="file"
                                        className="hidden"
                                        onChange={(e) => imageupload(e)
                                        }
                                    />
                                </label>
                            </>
                        }
                    </div>
                    <div className="flex flex-col gap-3 md:flex-row w-full ">
                        <div className="space-y-2 space-x-2 w-full">
                            <label className="text-sm font-medium text-gray-700">
                                Turf Title
                            </label>

                            <input
                                name="title"
                                value={detail.title}
                                onChange={handleDetailChange}
                                placeholder="Elite Football Turf"
                                className="mt-1 w-full border p-2 rounded-xl transition"
                            />
                        </div>
                        <div className="space-y-2 w-full">
                            <label className="text-sm font-medium text-gray-700">
                                contactinfo
                            </label>

                            <input
                                name="contact"
                                value={detail.contact}
                                onChange={handleDetailChange}
                                placeholder="Elite Football Turf"
                                className="mt-1 w-full border p-2 rounded-xl transition"
                            />
                        </div>
                    </div>


                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Description
                        </label>

                        <textarea
                            name="description"
                            value={detail.description}
                            onChange={handleDetailChange}
                            rows={4}
                            placeholder="Floodlights, parking, 5v5 turf..."
                            className="w-full px-3 py-2 border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 rounded-xl text-sm resize-none transition"
                        />
                    </div>

                    <div className="space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">





                        <label className="text-sm font-medium text-gray-700">
                            choose games
                        </label>
                        <select onChange={(e) => Selectgames(e.target.value)} className="w-full h-10 px-3 mt-2 border border-gray-200 focus:border-lime-500 focus:ring-2 focus:ring-lime-200 rounded-xl text-sm transition">
                            <option disabled>type football,cricket...</option>
                            <option>football</option>
                            <option>cricket</option>
                            <option>hockey</option>
                            <option>badminton</option>
                        </select>

                        <section className="text-xs rounded-xl bg-gray-100 text-lime-500 mt-1 flex  gap-2 flex-row flex-wrap  p-3">

                            {
                                games?.length > 0 ? games.map((item) => (
                                    <p key={item} className='bg-gray-200 flex items-center gap-2 w-fit rounded-md text-lime-600 font-bold text-sm p-2 shadow-md'>
                                        {item}
                                        <FaXmark onClick={() => Selectgames(item)} />

                                    </p>
                                )) : <>no have not selected</>
                            }


                        </section>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Select slot Price for each games
                        </label>

                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">

                            </span>

                            <Input
                                value={price}
                                onChange={(e) => setPRice(e.target.value)}
                                type="text"
                                placeholder="choose price"
                                className="pl-8 border border-gray-200 focus:border-lime-500 p-3 focus:ring-2 focus:ring-lime-200 rounded-xl transition"
                            />

                        </div>
                        <section className="text-xs rounded-xl bg-gray-100 text-lime-500 mt-1 flex gap-2 flex-wrap p-3">

                            {games?.length > 0 ? (
                                games.map((game) => {

                                    const match = Priceandgame?.find(
                                        (pg) => pg.game === game
                                    );

                                    return (
                                        <div
                                            key={game}
                                            className="bg-gray-200 flex items-center gap-2 rounded-md text-lime-700 font-semibold text-sm p-2 shadow"
                                        >
                                            <span>{game}</span>

                                            {match ? (
                                                <span className="bg-red-300 px-2 py-1 rounded-md text-black">
                                                    ₹ {match.price}
                                                </span>
                                            ) : (
                                                <button
                                                    className="bg-blue-300 px-2 py-1 rounded-md text-black"
                                                    onClick={() => Selectpriceforgame(game)}
                                                >
                                                    Add Price
                                                </button>
                                            )}
                                        </div>
                                    );
                                })
                            ) : (
                                <span>No games selected</span>
                            )}

                        </section>

                    </div>




                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                            Service Timing
                        </label>

                        <div className="grid grid-cols-2 gap-4">

                            <div>
                                <span className="text-xs text-gray-500 mb-1 block">From</span>

                                <Input
                                    type="time"
                                    name="from"
                                    value={settime.from}
                                    onChange={handleTimeChange}
                                    className="border border-lime-200 focus:border-lime-500 rounded-xl"
                                />
                            </div>

                            <div>
                                <span className="text-xs text-gray-500 mb-1 block">To</span>

                                <Input
                                    type="time"
                                    name="to"
                                    value={settime.to}
                                    onChange={handleTimeChange}
                                    className="border border-lime-200 focus:border-lime-500 rounded-xl"
                                />
                            </div>

                        </div>
                    </div>
                    <p className="text-sm text-lime-600 mt-1">

                    </p>

                    <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 space-y-4">

                        <label className="text-sm font-medium text-gray-700">
                            Add Time Slots
                        </label>

                        <div className="flex gap-1">
                            <input
                                type="text"
                                value={slotInput}
                                onChange={(e) => setSlotInput(e.target.value)}
                                placeholder="Example: 9-10 AM"
                                className="flex-1 p-2 border border-gray-200 rounded-xl focus:border-lime-500 focus:ring-2 focus:ring-lime-200 transition"
                            />

                            <button
                                type="button"
                                onClick={addSlot}
                                className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-4 rounded-xl transition"
                            >
                                Add
                            </button>
                        </div>

                        {/* SLOT LIST */}
                        <div className="flex flex-wrap gap-3">
                            {slots.length > 0 ? (
                                slots.map((slot) => (
                                    <div
                                        key={slot}
                                        className="bg-gray-100 px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm"
                                    >
                                        <span className="font-medium text-gray-700">
                                            {slot}
                                        </span>

                                        <button
                                            onClick={() => removeSlot(slot)}
                                            className="text-red-500 hover:text-red-700 text-sm"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-sm text-gray-400">
                                    No slots added yet
                                </p>
                            )}
                        </div>

                    </div>



                    <div>
                        <label htmlFor="">Pick your exact loaction</label>
                        <LocationPicker Setpinpoint={Setpinpoint} Setadress={Setadress} />
                    </div>


                    <div className="pt-6 border-t space-y-4">

                        <p className="text-sm font-semibold text-gray-700">
                            Publish Service
                        </p>

                        <Button
                            type="submit"
                            className="
            w-full
            bg-gradient-to-r from-lime-400 to-lime-500
            hover:from-lime-500 hover:to-lime-600
            text-gray-900
            font-semibold
            py-3
            rounded-2xl
            shadow-md
            hover:shadow-lg
            transition-all duration-200
            active:scale-[0.98]
        " onClick={functionsubmit}
                        >
                            🚀 Submit Service
                        </Button>

                        <p className="text-xs text-gray-400 text-center">
                            Your service will be reviewed before going live
                        </p>

                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default Turf
