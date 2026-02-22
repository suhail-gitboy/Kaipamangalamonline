import { Clock, MapPin, Phone, Utensils } from "lucide-react"


export default function HotelDetailsPage() {

    const getRestaurantStatus = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const currentTime = hours + minutes / 60;

        const openTime = 9;   // 9 AM
        const closeTime = 22; // 11 PM

        if (currentTime >= openTime && currentTime < closeTime - 1) {
            return "open";
        } else if (currentTime >= closeTime - 1 && currentTime < closeTime) {
            return "closing";
        } else {
            return "closed";
        }
    };

    const status = getRestaurantStatus();

    return (


        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-6 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

                {/* LEFT SECTION */}
                <div className="flex-1 space-y-6">

                    {/* Hero Image */}
                    <div className="relative rounded-3xl overflow-hidden shadow-xl group">

                        {/* Image */}
                        <img
                            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
                            alt="Hotel"
                            className="w-full h-64 md:h-[420px] object-cover transition duration-700 group-hover:scale-105"
                        />

                        {/* Dark Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                        {/* Status Badge (Top Right) */}
                        <div className="absolute top-4 right-4">
                            {status === "open" && (
                                <span className="bg-green-500/90 backdrop-blur-md text-white text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                    Open Now
                                </span>
                            )}

                            {status === "closing" && (
                                <span className="bg-yellow-500/90 backdrop-blur-md text-white text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                    Closing Soon
                                </span>
                            )}

                            {status === "closed" && (
                                <span className="bg-red-600/90 backdrop-blur-md text-white text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                                    <span className="w-2 h-2 bg-white rounded-full"></span>
                                    Closed
                                </span>
                            )}
                        </div>

                        {/* Optional: Restaurant Name Bottom Left */}
                        <div className="absolute bottom-6 left-6 text-white">
                            <h1 className="text-2xl md:text-4xl font-bold">
                                Royal Spice Hotel
                            </h1>
                            <p className="text-sm md:text-base text-gray-200 mt-1">
                                Kaipamangalam, Thrissur
                            </p>
                        </div>

                    </div>


                    {/* Hotel Card */}
                    <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 space-y-6">

                        {/* Title Row */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                                    Royal Spice Hotel
                                </h1>

                                <div className="flex items-center gap-2 text-gray-500 mt-2">
                                    <MapPin className="w-5 h-5 text-red-500" />
                                    <p className="text-sm md:text-base">
                                        Kaipamangalam, Thrissur
                                    </p>
                                </div>

                                {/* Rating */}
                                <div className="mt-3 inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                                    ⭐ 4.5 Excellent
                                </div>
                            </div>

                            {/* Info Badges */}
                            <div className="flex flex-wrap gap-3">

                                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                                    <Phone className="w-4 h-4 text-green-600" />
                                    777388383
                                </div>

                                <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                                    <Clock className="w-4 h-4" />
                                    9:00 AM - 11:00 PM
                                </div>

                            </div>
                        </div>

                        {/* DELIVERY HIGHLIGHT SECTION */}
                        <div className="flex items-center gap-4 bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 p-5 rounded-2xl shadow-sm">
                            <img
                                src="/icons/delivery-bike.png"  // <-- Use your PNG here
                                alt="Fast Delivery"
                                className="w-14 h-14 object-contain"
                            />
                            <div>
                                <p className="font-semibold text-red-600 text-lg">
                                    Fast Delivery Available 🚀
                                </p>
                                <p className="text-sm text-gray-600">
                                    Delivered within 30-40 minutes to your doorstep
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed">
                            Royal Spice Hotel offers delicious South Indian and North Indian cuisine
                            with lightning-fast online delivery. Enjoy fresh meals, biriyani specials,
                            and family combos delivered hot and fresh.
                        </p>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                            {[
                                { title: "Cuisine", value: "Indian, Chinese" },
                                { title: "Delivery Time", value: "30-40 mins" },

                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 hover:bg-white transition p-4 rounded-2xl text-center shadow-sm border"
                                >
                                    <p className="font-semibold text-gray-800">{item.title}</p>
                                    <p className="text-sm text-gray-500 mt-1">{item.value}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>


                {/* RIGHT SECTION - ORDER CARD */}
                <div className="w-full lg:w-[380px]">
                    <div className="bg-white rounded-3xl shadow-2xl p-6 sticky top-8 space-y-6 border border-gray-100">

                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Order Online
                            </h2>
                            <span className="text-xs bg-red-50 text-red-600 px-3 py-1 rounded-full font-semibold">
                                Live Kitchen
                            </span>
                        </div>

                        {/* 🔥 Today's Special */}
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-100 rounded-2xl p-4 space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="text-red-500 text-lg">🔥</span>
                                <p className="font-semibold text-red-600">
                                    Today’s Special
                                </p>
                            </div>

                            <div className="flex justify-between items-center bg-white rounded-xl p-3 shadow-sm">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        {/* Non-Veg Indicator */}
                                        <span className="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
                                            <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                                        </span>
                                        <p className="font-semibold text-gray-800">
                                            Special Chicken Mandhi
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-500">₹249</p>
                                    <div className="text-xs bg-green-600 text-white px-2 py-0.5 rounded-md inline-block">
                                        4.7 ★ Bestseller
                                    </div>
                                </div>

                                <button className="bg-red-500 hover:bg-red-600 active:scale-95 transition text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow">
                                    Add
                                </button>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t"></div>

                        {/* Regular Items */}
                        <div className="space-y-5">
                            {[
                                { name: "Chicken Biriyani", price: 180, rating: "4.5" },
                                { name: "Veg Meals", price: 120, rating: "4.2", veg: true },
                                { name: "Fried Rice", price: 150, rating: "4.3" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-start hover:bg-gray-50 p-3 rounded-2xl transition"
                                >
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">

                                            {/* Veg / Non-Veg Indicator */}
                                            {item.veg ? (
                                                <span className="w-3 h-3 border-2 border-green-600 flex items-center justify-center">
                                                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                                                </span>
                                            ) : (
                                                <span className="w-3 h-3 border-2 border-red-600 flex items-center justify-center">
                                                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                                                </span>
                                            )}

                                            <p className="font-medium text-gray-800">
                                                {item.name}
                                            </p>
                                        </div>

                                        <p className="text-sm text-gray-500">
                                            ₹{item.price}
                                        </p>

                                        <span className="text-xs text-green-600 font-medium">
                                            {item.rating} ★
                                        </span>
                                    </div>

                                    <button className="bg-white border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition px-4 py-1.5 rounded-full text-sm font-semibold">
                                        Add
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Cart Button */}
                        <button className="w-full bg-black hover:bg-gray-900 transition text-white py-3 rounded-2xl font-semibold shadow-lg">
                            View Cart • 2 Items
                        </button>

                    </div>
                </div>


            </div>
        </div>



    )
}
