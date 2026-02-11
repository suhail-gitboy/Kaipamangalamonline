import { ServiceType } from '@/app/types'
import React from 'react'
import CarDetailService from '../../typescard/CarautoService'
import FoodDDetailDelivery from '../../typescard/FoodDelivery'
import TurDetailCard from '../../typescard/Turcard'
import Redirect from '@/app/components/rusable/Redirect'

const page = async ({ params }: { params: { type: string, id: string } }) => {
    const { type, id } = await params

    const Dynamiccard = () => {
        switch (type) {
            case ServiceType.AUTOSERVICES:
                return <CarDetailService />
            case ServiceType.FOODDELIVERY:
                return <FoodDDetailDelivery />
            case ServiceType.TURF:
                return <TurDetailCard />
            default:
                return null
        }
    }
    return (
        <div className='pb-20 bg-gray-950'>
            <div className={`${type === ServiceType.TURF ? "bg-gray-900" : "bg-gray-50"} flex justify-between  p-2`}>
                <Redirect color={`${type == ServiceType.AUTOSERVICES ? "bg-gray-100" : type == ServiceType.FOODDELIVERY ? "bg-gray-100" : type == ServiceType.TURF ? "bg-gray-900" : ""}`} path={`/services/${type}`} />
            </div>
            <Dynamiccard />
        </div>
    )
}

export default page
