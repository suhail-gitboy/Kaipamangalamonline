import Redirect from '@/app/components/rusable/Redirect';
import React from 'react'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Card, CardContent } from "@/shadcn/ui/card"

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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[...Array(3)].map((_, i) => (
                        <Card
                            key={i}
                            className="rounded-2xl border border-lime-100 hover:border-lime-300 transition"
                        >
                            <CardContent className="p-4 space-y-2">
                                <h4 className="font-semibold text-gray-900">
                                    Service Title
                                </h4>
                                <p className="text-sm text-gray-500">
                                    Short service description goes here.
                                </p>

                                <button className="mt-2 text-xs bg-lime-600 text-white px-3 py-1 rounded-lg hover:bg-lime-700 transition">
                                    Manage
                                </button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
