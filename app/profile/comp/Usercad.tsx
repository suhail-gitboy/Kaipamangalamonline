"use client"
import React, { useState } from 'react'
import { Button } from "@/shadcn/ui/button"
import { Badge } from "@/shadcn/ui/badge"
import { ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/shadcn/ui/card"
import EditProfilePage from './Sideditbar'

const Usercad = () => {


    const [editprof, Seteditprof] = useState(false)
    return (
        <div

            className='' >
            {editprof && <EditProfilePage editprofile={() => Seteditprof(false)} />}

            <div className="rounded-3xl border-lime-200 shadow-md relative" >
                <div className="absolute md:hidden  bg-lime-600 -top-0 left-0 w-full h-1/2 rounded-b-full"></div>
                <div className="p-6 flex flex-col md:flex-row items-center gap-6">

                    {/* Avatar */}
                    <div className="relative">
                        <img
                            src="/G.png"
                            alt="profile"
                            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-lime-400"
                        />
                        <span className="absolute bottom-1 right-1 w-4 h-4 bg-lime-500 rounded-full border-2 border-white" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Alex Johnson
                        </h2>

                        <p className="text-gray-500 text-sm">
                            Creator · Travel · Lifestyle
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                            <Badge className="bg-lime-100 text-lime-700 flex items-center gap-1">
                                <ShieldCheck size={14} /> Verified
                            </Badge>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 mt-4 justify-center md:justify-start">
                            <Button onClick={() => Seteditprof(true)} className="bg-lime-500 hover:bg-lime-600">
                                Manage Profile
                            </Button>
                            <Button
                                variant="outline"
                                className="border-lime-400 text-lime-600 hover:bg-lime-50"
                            >
                                Share Profile
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Usercad
