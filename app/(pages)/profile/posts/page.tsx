
export const dynamic = "force-dynamic";
import Redirect from '@/app/components/rusable/Redirect'

import React from 'react'
import Profilepost, { Item } from '../comp/Profilepost'
import { SERVERurl } from '@/app/APISERVICES/Instance'
import { useStore } from '@/app/zustandstate/Store'
import { cookies } from 'next/headers'

const page = async () => {

    var property: Item[] = []
    async function GEtpost() {
        try {

            const cookieStore = await cookies()

            const res = await fetch(`${SERVERurl}/api/regularpost`, {
                method: "GET",
                headers: {
                    cookie: cookieStore.toString()
                },

                cache: "no-store"
            })

            if (!res.ok) throw new Error("error fetching")

            const resdata = await res.json()

            property = resdata.properties

        } catch (error) {
            console.log(error)
            return null
        }
    }
    await GEtpost()



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
                    {property.length > 0 ? property?.map((item: Item, i: any) => (
                        <Profilepost key={i} item={item} />
                    )) : <>no post yet</>}
                </div>
            </div>
        </div>
    )
}

export default page
