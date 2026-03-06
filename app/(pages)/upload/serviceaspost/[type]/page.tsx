import Redirect from '@/app/components/rusable/Redirect'
import React from 'react'
import Turf from './Servicecard/Turf'

const page = async ({ params }: { params: { type: string } }) => {

    const { type } = await params


    const Switch = () => {
        switch (type) {
            case "turf": return <Turf />
        }
    }
    return (
        <>
            <div className='absolute top-2 left-2'>
                <Redirect path='/' />
            </div>
            {
                Switch()
            }
        </>
    )
}

export default page
