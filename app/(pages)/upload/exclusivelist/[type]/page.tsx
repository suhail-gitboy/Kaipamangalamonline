import React from 'react'
import Page from '../Comp'

const page = async ({ params }: { params: { type: string } }) => {

    const { type } = await params
    return (
        <div className=' '>
            <Page type={type} />

        </div>
    )
}

export default page
