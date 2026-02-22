import RestaurantList from '@/app/components/cards/Foodcard'
import MapLocation from '@/app/components/ui/Map'
import { carServices, restaurants, turfs } from "../../../../libs/Datas"
import React, { use } from 'react'
import Searchexplore from './ui/SEarch'
import { motion } from 'framer-motion'
import CarServiceCard from '@/app/components/cards/Carservices'
import TurfCard from '@/app/components/cards/Turf'
import Link from 'next/link'


type pArams = {
    params: {
        service: string
    }
}

const page = async ({ params }: pArams) => {

    const { service } = await params



    const FunctionSwitch = () => {
        switch (service) {
            case "fooddelivery": return (
                <div className="space-y-2">
                    {restaurants.map((data, key) => (

                        <RestaurantList item={data} />

                    ))}
                </div>
            )

            case "autoservices": return (
                <div className="space-y-2">
                    {carServices.map((data, key) => (

                        <CarServiceCard item={data} />

                    ))}
                </div>
            )

            case "turf": return (
                <div className="space-y-2">
                    {turfs.map((data, key) => (

                        <TurfCard item={data} />

                    ))}
                </div>
            )
        }
    }

    return (
        <div>
            <Searchexplore service={service} />
            <div className='flex bg-gray-100 h-screen flex-col  md:flex-row px-4 md:px-10 pt-2  gap-7 '>

                <div className="flex w-full gap-3  overflow-visible">

                    <section className="w-full md:w-6/12">
                        {FunctionSwitch()}
                    </section>


                    <section className="hidden md:block md:w-6/12 relative">
                        <div className={`sticky  h-[70vh] ${service !== "turf" ? "top-45" : "top-23"} `}>
                            <MapLocation service={service} />
                        </div>
                    </section>
                </div>


            </div>
        </div>
    )
}

export default page
