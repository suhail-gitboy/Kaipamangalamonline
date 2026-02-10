import MapLocation from '@/app/components/ui/Map'
import React from 'react'
import MapHeader from '../Ui'
const page = async ({ params }: { params: { type: string } }) => {

    const { type } = await params
    return (
        <div className="bg-gray-50 p-4 md:p-10 space-y-4">
            <MapHeader type={type} />

            <div className="h-136 w-full rounded-2xl overflow-hidden shadow">
                <MapLocation service={type} />
            </div>
        </div>

    )
}

export default page
