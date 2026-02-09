

import Redirect from '@/app/components/rusable/Redirect'

import React from 'react'
import Profilepost from '../comp/Profilepost'

const page = () => {

    return (
        <div className='px-4 py-3 md:px-7 lg:px-25'>
            <div className="flex justify-baseline">
                <Redirect path='/profile' />
            </div>
            <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                    Your Uploads
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {[...Array(6)].map((_, i) => (
                        <Profilepost key={i} ind={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
