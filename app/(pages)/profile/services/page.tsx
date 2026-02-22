import Redirect from '@/app/components/rusable/Redirect';
import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Card, CardContent } from "@/shadcn/ui/card"
import ServiceCard from '../comp/ServiceCArd';
import { servicesAll } from '@/libs/Datas';

interface Props {
    category: "turf" | "carautoservices" | "fooddelivery"
}
const page = () => {
    return (
        <div className='px-4  md:px-7 lg:px-25'>
            <div className="py-3 flex justify-baseline">
                <Redirect path='/profile' />
            </div>
            <div className="mt-10">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    Your Services
                </h3>

                <div className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-2
      gap-6
      px-4
      py-6
    ">
                    {servicesAll.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
