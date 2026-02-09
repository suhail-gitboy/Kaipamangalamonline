import React from 'react'
import { Card, CardContent } from "@/shadcn/ui/card"
import Link from 'next/link'

const Yourstate = () => {
    return (
        <div className="grid grid-cols-3 gap-3 mt-6 text-center">

            {/* YOUR UPLOADS */}
            <Link href="/profile/posts">
                <Card className="rounded-2xl border-lime-100 hover:border-lime-300 bg-lime-200 transition cursor-pointer">
                    <CardContent className="p-4 flex flex-col items-center gap-1">
                        <h3 className="text-lg font-bold text-gray-900">UPLOADINGS</h3>
                        <p className="text-gray-500 text-xs">all category</p>
                    </CardContent>
                </Card>
            </Link>

            {/* YOUR SERVICES */}
            <Link href={"/profile/services"}>
                <Card className="rounded-2xl border-lime-100 hover:border-lime-300 bg-lime-200 transition cursor-pointer">
                    <CardContent className="p-4 flex flex-col items-center gap-1">
                        <h3 className="text-lg font-bold text-gray-900">SERVICES</h3>
                        <p className="text-gray-500 text-xs">all category</p>
                    </CardContent>
                </Card>
            </Link>

            {/* MANAGE */}
            <Link href={"/profile/manage"}>
                <Card className="rounded-2xl border-lime-100 hover:border-lime-300 bg-lime-200 transition cursor-pointer">
                    <CardContent className="p-4 flex flex-col items-center gap-1">
                        <h3 className="text-lg font-bold text-gray-900">Manage</h3>
                        <p className="text-gray-500 text-xs">Profile</p>
                    </CardContent>
                </Card>
            </Link>

        </div>

    )
}

export default Yourstate
