import { MapPin, Phone, Clock, Car, Users } from "lucide-react"

type ServiceType = "taxi" | "rental" | "dailyRental"

export default function CarServicePage({
    type = "taxi",
}: {
    type?: ServiceType
}) {


    const getStatus = () => {
        const hour = new Date().getHours()

        if (hour >= 6 && hour < 22) return "available"
        if (hour >= 22 && hour < 23) return "limited"
        return "offline"
    }

    const status = getStatus()



    const config = {
        taxi: {
            title: "City Taxi Service",
            image:
                "https://images.unsplash.com/photo-1549924231-f129b911e442",
            priceLabel: "Starting from ₹15/km",
            cta: "Book Ride",
            badge: "Instant Pickup",
        },
        rental: {
            title: "Self Drive Rental",
            image:
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
            priceLabel: "₹1,499 / day",
            cta: "Rent Now",
            badge: "Unlimited KM",
        },
        dailyRental: {
            title: "Daily Car Rental",
            image:
                "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
            priceLabel: "₹8,999 / week",
            cta: "Reserve Car",
            badge: "Best for Trips",
        },
    }

    const service = config[type]

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-10 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                {/* LEFT SECTION */}
                <div className="flex-1 space-y-6">

                    {/* HERO */}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">

                        <img
                            src={service.image}
                            alt="Car Service"
                            className="w-full h-64 md:h-[420px] object-cover transition duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                        {/* STATUS BADGE */}
                        <div className="absolute top-4 right-4">
                            {status === "available" && (
                                <span className="bg-green-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                    Available Now
                                </span>
                            )}

                            {status === "limited" && (
                                <span className="bg-yellow-500 text-black px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                                    Limited Availability
                                </span>
                            )}

                            {status === "offline" && (
                                <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                                    Offline
                                </span>
                            )}
                        </div>

                        {/* TITLE OVERLAY */}
                        <div className="absolute bottom-6 left-6 text-white">
                            <h1 className="text-3xl md:text-4xl font-bold">
                                {service.title}
                            </h1>
                            <p className="text-gray-200 mt-2">
                                Safe • Reliable • Affordable
                            </p>
                        </div>
                    </div>

                    {/* INFO CARD */}
                    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 space-y-6">

                        {/* BADGES */}
                        <div className="flex flex-wrap gap-3">
                            <div className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                                <Car className="w-4 h-4 text-blue-600" />
                                AC Sedan
                            </div>

                            <div className="bg-gray-100 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
                                <Users className="w-4 h-4 text-blue-600" />
                                4 Seats
                            </div>

                            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                                {service.badge}
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            Professional drivers, clean vehicles, GPS tracking and
                            24/7 support for your comfortable journey.
                        </p>

                        {/* INFO GRID */}
                        <div className="border-t pt-6 grid grid-cols-2 md:grid-cols-4 gap-6">

                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 uppercase">
                                    Pricing
                                </span>
                                <span className="font-semibold text-gray-800 mt-1">
                                    {service.priceLabel}
                                </span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 uppercase">
                                    Service Area
                                </span>
                                <span className="font-semibold text-gray-800 mt-1">
                                    Thrissur City
                                </span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 uppercase">
                                    Timing
                                </span>
                                <span className="font-semibold text-gray-800 mt-1">
                                    6:00 AM - 11:00 PM
                                </span>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 uppercase">
                                    Rating
                                </span>
                                <span className="font-semibold text-green-600 mt-1">
                                    4.6 ★
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION */}
                <div className="w-full lg:w-[380px]">
                    <div className="bg-white rounded-3xl shadow-2xl p-6 sticky top-8 space-y-6 border border-gray-100">

                        <h2 className="text-2xl font-bold text-gray-900">
                            Quick Booking
                        </h2>

                        {/* Contact */}
                        <div className="space-y-4">

                            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                                <Phone className="w-5 h-5 text-green-600" />
                                <span className="text-sm font-medium">
                                    777388383
                                </span>
                            </div>

                            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                                <MapPin className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium">
                                    Pickup Location
                                </span>
                            </div>

                        </div>

                        {/* CTA */}
                        <button
                            disabled={status === "offline"}
                            className={`w-full py-3 rounded-2xl font-semibold shadow-lg transition 
                ${status === "offline"
                                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                                    : "bg-black text-white hover:bg-gray-900"
                                }`}
                        >
                            {service.cta}
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}
