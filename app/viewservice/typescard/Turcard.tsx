import { Clock, MapPin, Phone } from "lucide-react"

export default function TurfDetailsPage() {

    const getTurfStatus = () => {
        const now = new Date()
        const hours = now.getHours()
        const minutes = now.getMinutes()
        const currentTime = hours + minutes / 60

        const openTime = 6   // 6 AM
        const closeTime = 23 // 11 PM

        if (currentTime >= openTime && currentTime < closeTime - 1) {
            return "open"
        } else if (currentTime >= closeTime - 1 && currentTime < closeTime) {
            return "closing"
        } else {
            return "closed"
        }
    }

    const status = getTurfStatus()

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white pb-10 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                {/* LEFT SECTION */}
                <div className="flex-1 space-y-6">

                    {/* Hero */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">

                        <img
                            src="/services/imagesturf.jpg"
                            alt="Football Turf"
                            className="w-full h-64 md:h-[420px] object-cover transition duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                        {/* Status Badge */}
                        <div className="absolute top-4 right-4">
                            {status === "open" && (
                                <span className="bg-green-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                    Open for Booking
                                </span>
                            )}

                            {status === "closing" && (
                                <span className="bg-yellow-500 text-black text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                                    Closing Soon
                                </span>
                            )}

                            {status === "closed" && (
                                <span className="bg-red-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-lg">
                                    Closed
                                </span>
                            )}
                        </div>

                        {/* Bottom Info */}
                        <div className="absolute bottom-6 left-6">
                            <h1 className="text-3xl md:text-4xl font-bold">
                                Champions Football Turf
                            </h1>
                            <div className="flex items-center gap-2 text-gray-300 mt-2">
                                <MapPin className="w-5 h-5 text-green-400" />
                                Kaipamangalam, Thrissur
                            </div>
                        </div>

                    </div>

                    {/* Turf Info Card */}
                    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8 space-y-6 shadow-lg">

                        <div className="flex flex-wrap gap-4">

                            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                                <Clock className="w-4 h-4 text-green-400" />
                                <span className="text-sm">6:00 AM - 11:00 PM</span>
                            </div>

                            <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                                <Phone className="w-4 h-4 text-green-400" />
                                <span className="text-sm">777388383</span>
                            </div>

                            <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                5v5 • Floodlights Available
                            </div>

                        </div>

                        <p className="text-gray-400 leading-relaxed">
                            Premium synthetic football turf with high-quality grass,
                            professional floodlights, and online slot booking.
                            Perfect for tournaments and friendly matches.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">

                            {[
                                { title: "Ground Size", value: "5v5" },
                                { title: "Price", value: "₹1200/hr" },
                                { title: "Surface", value: "Synthetic" },
                                { title: "Parking", value: "Available" },
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col">
                                    <span className="text-xs uppercase tracking-wide text-gray-500">
                                        {item.title}
                                    </span>
                                    <span className="mt-1 font-semibold text-white">
                                        {item.value}
                                    </span>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION - SLOT BOOKING */}
                <div className="w-full lg:w-[380px]">
                    <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 sticky top-8 space-y-6 shadow-2xl">

                        <h2 className="text-2xl font-bold text-white">
                            Available Slots ⚽
                        </h2>

                        <div className="space-y-4">

                            {[
                                { time: "6:00 AM - 7:00 AM", price: 1000 },
                                { time: "7:00 PM - 8:00 PM", price: 1400 },
                                { time: "8:00 PM - 9:00 PM", price: 1500 },
                            ].map((slot, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center bg-gray-800 hover:bg-gray-700 transition p-4 rounded-2xl"
                                >
                                    <div>
                                        <p className="font-medium text-white">
                                            {slot.time}
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            ₹{slot.price}
                                        </p>
                                    </div>

                                    <button className="bg-green-600 hover:bg-green-500 transition px-4 py-2 rounded-full text-sm font-semibold">
                                        Book
                                    </button>
                                </div>
                            ))}

                        </div>

                        <button className="w-full bg-green-600 hover:bg-green-500 transition text-white py-3 rounded-2xl font-semibold shadow-lg">
                            Proceed to Booking
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}
