import React from 'react'

const page = async ({ params }: { params: { type: string } }) => {
    const { type } = await params


    return (
        <div>
            {type}
        </div>
    )
}

export default page
