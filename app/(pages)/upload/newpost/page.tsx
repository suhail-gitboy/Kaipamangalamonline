"use client"

import { usePostdata } from "@/app/APISERVICES/allServices"
import Redirect from "@/app/components/rusable/Redirect"
import Loaderone from "@/app/components/ui/Loaderone"
import { Categoryenum } from "@/app/types"
import { useStore } from "@/app/zustandstate/Store"
import { Calendar } from "@/shadcn/ui/calendar"
import { Button } from "@/shadcn/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/shadcn/ui/popover"

import { format } from "date-fns"
import {
    ImageIcon,
    MapPin,
    Phone,
    Tag,
    FileText,
    CalendarDays,
    IndianRupee,
} from "lucide-react"
import { useRouter } from "next/navigation"

import { useEffect, useState } from "react"
import { HandledEvents } from "react-swipeable/es/types"
import LocationPicker from "@/app/(pages)/manageservice/uicard/Mappicker"

const Page = () => {
    const { setPostField, postData } = useStore()
    const navigate = useRouter()
    const isRealEstate = postData.category === Categoryenum.REALESTATE
    const isEvent =
        postData.category === Categoryenum.EVENTS ||
        postData.category === Categoryenum.OFFERS ||
        postData.category === Categoryenum.TOURNAMENTS

    const [image, Setimage] = useState<File | null>(null)
    const [imagep, Setimagep] = useState(null)
    const [loading, Setloading] = useState(false)
    const [pin, Setpinpoint] = useState({
        lat: "",
        lan: ""
    })
    const [adress, Setadress] = useState("")

    useEffect(() => {
        console.log(pin);
    }, [pin])


    const [fixture, setFixture] = useState<{
        from?: Date
        to?: Date
    }>({})


    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) {
            Setimage(null)
            Setimagep(null)
            return
        }

        Setimage(file)

        const previewURL = URL.createObjectURL(file)
        Setimagep(previewURL)
    }



    const Postnewpost = async () => {
        const { title, description, location } = postData
        if (!title || !description || !imagep) {
            alert("Please fill all fields & upload image")
            return
        }
        Setloading(true)

        const formData = new FormData()
        formData.append("title", title)
        formData.append("description", description)
        formData.append("category", postData.category)
        formData.append("mobilenumber", postData.mobilenumber)
        formData.append("location", postData.location)
        formData.append("pin", JSON.stringify({ ...pin, adress }))
        if (isEvent) {
            formData.append("fixture", JSON.stringify(fixture))
        }
        if (isRealEstate) formData.append("price", postData.price)


        formData.append("image", image)

        const res = await fetch("/api/regularpost", {
            method: "POST",
            body: formData,
        })

        if (!res.ok) {
            const msg = await res.text()
            console.error("Upload failed:", msg)
            alert("Upload failed")
            Setloading(false)
        } else {
            Setloading(false)
            alert("Post created successfully!")
            navigate.push("/")
        }
    }

    if (loading) {
        return <Loaderone />
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-lime-100 to-white flex items-center justify-center sm:p-6">

            <div className="absolute left-3 top-3">
                <Redirect path="/" />
            </div>

            <div className="w-full md:max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden">


                <div className="bg-lime-500 text-white p-7 rounded-br-[100px] relative">
                    <h2 className="text-3xl font-bold">Create New Post</h2>
                    <p className="opacity-90 text-sm">
                        Share news, events, real estate & more
                    </p>
                </div>


                <div className="p-6 space-y-5 text-black">


                    <div className="relative">
                        <FileText className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input
                            value={postData.title}
                            onChange={(e) => setPostField("title", e.target.value)}
                            placeholder="Post Title"
                            className="w-full border rounded-xl p-3 pl-10 focus:ring-2 focus:ring-lime-500"
                        />
                    </div>


                    <div className="relative">
                        <FileText className="absolute left-3 top-3 text-gray-400" size={18} />
                        <textarea
                            rows={4}
                            value={postData.description}
                            onChange={(e) => setPostField("description", e.target.value)}
                            placeholder="Write your post..."
                            className="w-full border rounded-xl p-3 pl-10 focus:ring-2 focus:ring-lime-500"
                        />
                    </div>


                    <label
                        htmlFor="img"
                        className="relative block border-2 border-dashed border-lime-400 rounded-3xl p-6 text-center bg-lime-50 hover:bg-lime-100 cursor-pointer transition overflow-hidden"
                    >
                        <input
                            type="file"
                            hidden
                            id="img"
                            accept="image/*"
                            onChange={handleImageChange}
                        />

                        {/* No Image */}
                        {!imagep && (
                            <div className="py-10">
                                <ImageIcon className="mx-auto mb-3 text-lime-600" size={40} />
                                <p className="text-lg font-semibold text-gray-700">
                                    Upload Post Image
                                </p>
                                <p className="text-sm text-gray-500">
                                    Click to choose or drag & drop
                                </p>
                                <span className="inline-block mt-3 bg-lime-500 text-white px-4 py-1 rounded-full text-sm">
                                    Choose File
                                </span>
                            </div>
                        )}


                        {imagep && (
                            <div className="relative">
                                <img
                                    src={imagep}
                                    className="w-full max-h-64 object-cover rounded-2xl"
                                />

                                {/* Overlay Buttons */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 flex items-center justify-center gap-4 transition rounded-2xl">

                                    <span className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
                                        Change
                                    </span>

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            Setimage(null)
                                            Setimagep("")
                                        }}
                                        className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                                    >
                                        Remove
                                    </button>

                                </div>
                            </div>
                        )}
                    </label>

                    <div className="grid md:grid-cols-2 gap-4">

                        <div className="relative">
                            <Tag className="absolute left-3 top-3 text-gray-400" size={18} />
                            <select
                                value={postData.category}
                                onChange={(e) => setPostField("category", e.target.value)}
                                className="w-full border rounded-xl p-3 pl-10"
                            >
                                {Object.values(Categoryenum).map((cat) => (
                                    <option key={cat} value={cat}>
                                        {cat}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="relative">
                            <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                value={postData.mobilenumber}
                                onChange={(e) => setPostField("mobilenumber", e.target.value)}
                                placeholder="Phone number"
                                className="w-full border rounded-xl p-3 pl-10"
                            />
                        </div>
                    </div>


                    {postData.category !== Categoryenum.NEWS && (<>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                value={postData.location}
                                onChange={(e) => setPostField("location", e.target.value)}
                                placeholder="Location"
                                className="w-full border rounded-xl p-3 pl-10"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium mb-2 block">
                                Select exact  Location
                            </label>

                            <div className="rounded-2xl overflow-hidden border">
                                <LocationPicker Setadress={Setadress} Setpinpoint={Setpinpoint} />
                            </div>
                        </div>
                    </>

                    )}


                    {isRealEstate && (
                        <div className="relative">
                            <IndianRupee className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input
                                value={postData.price}
                                onChange={(e) => setPostField("price", e.target.value)}
                                placeholder="Price"
                                className="w-full border rounded-xl p-3 pl-10"
                            />
                        </div>
                    )}


                    {isEvent && (
                        <div className="w-full">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start text-left font-normal"
                                    >
                                        <CalendarDays className="mr-2 h-4 w-4" />

                                        {fixture.from ? (
                                            fixture.to ? (
                                                <>
                                                    {format(fixture.from, "PPP")} -{" "}
                                                    {format(fixture.to, "PPP")}
                                                </>
                                            ) : (
                                                format(fixture.from, "PPP")
                                            )
                                        ) : (
                                            "Select Fixture Date Range"
                                        )}
                                    </Button>
                                </PopoverTrigger>

                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="range"
                                        selected={fixture}
                                        onSelect={(range) => {
                                            if (!range) return
                                            setFixture(range)
                                        }}
                                        numberOfMonths={2}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    )}


                    <button onClick={Postnewpost} className="w-full bg-lime-500 hover:bg-lime-600 text-white py-3 rounded-2xl font-semibold shadow-md text-lg transition">
                        Post Now 🚀
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Page