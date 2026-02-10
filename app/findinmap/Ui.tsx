import { FaUtensils, FaCar, FaFutbol, FaMapMarkerAlt } from "react-icons/fa";

const MapHeader = ({ type = "sports" }: { type: string }) => {
    const config: any = {
        fooddelivery: {
            title: "Hungry near Kaipamangalam?",
            subtitle: "Discover hotels, food spots & quick bites near you",
            icon: <FaUtensils />,
            chips: ["Biriyani", "Mandhi", "Alfaham", "Shawarma"],
            bg: "from-orange-100 to-orange-50",
            accent: "text-orange-600",
        },
        autoservices: {
            title: "Find rides & auto services nearby",
            subtitle: "Taxis, rental cars & local transport around you",
            icon: <FaCar />,
            chips: ["Taxi", "Rental Cars", "Auto", "24×7"],
            bg: "from-blue-100 to-blue-50",
            accent: "text-blue-600",
        },
        turf: {
            title: "Playgrounds & turfs near you",
            subtitle: "Find football turfs & sports arenas nearby",
            icon: <FaFutbol />,
            chips: ["Football", "Cricket", "Badminton", "Night Play"],
            bg: "from-green-100 to-green-50",
            accent: "text-green-600",
        },
    };

    const current: any = config[type];

    return (
        <div
            className={`rounded-2xl bg-gradient-to-br ${current.bg} p-4 md:p-6 shadow-sm`}
        >
            {/* Header */}
            <div className="flex items-start gap-3">
                <div
                    className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow ${current.accent}`}
                >
                    {current.icon}
                </div>

                <div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900">
                        {current.title}
                    </h2>
                    <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                        <FaMapMarkerAlt className={current.accent} />
                        {current.subtitle}
                    </p>
                </div>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2 mt-4">
                {current.chips.map((chip: any, i: any) => (
                    <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-white text-gray-700 shadow-sm"
                    >
                        {chip}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default MapHeader;
