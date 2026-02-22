
import { Heart, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/shadcn/ui/card"


import Profilepost from "./comp/Profilepost"
import Usercad from "./comp/Usercad"
import Yourstate from "./comp/Yourstate"
import { headers } from "next/headers"

export default function ProfilePage() {


    return (
        <div className="max-w-6xl mx-auto px-4 pb-6">


            <Usercad />

            <Yourstate />






        </div>

    )
}
