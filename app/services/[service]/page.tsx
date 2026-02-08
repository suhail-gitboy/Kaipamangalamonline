import React, { use } from 'react'


type pArams = {
    params: {
        service: string
    }
}

const page = async ({ params }: pArams) => {

    const { service } = await params

    return (
        <div>
            <p>       {service == "fooddelivery" ? "food" : "autotaxi"}</p>

        </div>
    )
}

export default page
