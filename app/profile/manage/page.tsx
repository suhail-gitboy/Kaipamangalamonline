import React from 'react'
import Redirect from '@/app/components/rusable/Redirect'
const page = () => {
    return (
        <div className='px-4 py-3 md:px-7 lg:px-25'>
            <div className="flex justify-baseline">
                <Redirect path='/profile' />
            </div>
            post
        </div>
    )
}

export default page
