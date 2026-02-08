
import { Heart, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/shadcn/ui/card"


import Profilepost from "./comp/Profilepost"
import Usercad from "./comp/Usercad"

export default function ProfilePage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-6">

            {/* PROFILE HEADER */}

            <Usercad />


            {/* STATS */}
            <div className="grid grid-cols-3 gap-3 mt-6 text-center">
                {[
                    { label: "Posts", value: "128" },
                    { label: "Total Likes", value: "86.4K", icon: Heart },
                    { label: "Visitors", value: "42.3K" },
                ].map((stat, i) => (
                    <Card
                        key={i}
                        className="rounded-2xl border-lime-100 hover:border-lime-300 transition"
                    >
                        <CardContent className="p-4 flex flex-col items-center gap-1">
                            {stat.icon && (
                                <stat.icon size={18} className="text-lime-500" />
                            )}
                            <h3 className="text-xl font-bold text-gray-900">
                                {stat.value}
                            </h3>
                            <p className="text-gray-500 text-xs">{stat.label}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* POSTS GRID */}
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                    Posts
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {[...Array(6)].map((_, i) => (
                        <Profilepost ind={i} />
                    ))}
                </div>

            </div>
        </div>
    )
}
