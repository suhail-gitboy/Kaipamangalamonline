import RestaurantList from '@/app/components/cards/Foodcard'
import MapLocation from '@/app/components/ui/Map'
import { restaurants } from '@/app/libs/Datas'
import React, { use } from 'react'
import Searchexplore from './ui/SEarch'
import { motion } from 'framer-motion'


type pArams = {
    params: {
        service: string
    }
}

const page = async ({ params }: pArams) => {

    const { service } = await params

    return (
        <div>
            <Searchexplore service={service} />
            <div className='flex bg-gray-100 h-screen flex-col  md:flex-row px-4 md:px-10 pt-2  gap-7 '>

                <div className="flex w-full gap-3  overflow-visible">

                    <section className="w-full md:w-6/12">
                        <div className="space-y-2">
                            {restaurants.map((data, key) => (
                                <RestaurantList item={data} key={key} />
                            ))}
                        </div>
                    </section>


                    <section className="hidden md:block md:w-6/12 relative">
                        <div className={`sticky  ${service === "fooddelivery" ? "h-[70vh] top-45" : "h-150"} `}>
                            <MapLocation />
                        </div>
                    </section>
                </div>


            </div>
        </div>
    )
}

export default page
