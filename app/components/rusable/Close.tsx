import React from 'react'
import { IoMdClose } from "react-icons/io";
const Close = ({ onClick }: { onClick: () => void }) => {
    return (
        <div className='absolute top-4 right-5 px-4 py-1'>
            <button onClick={onClick} className="p-2 rounded-md  text-black">
                <IoMdClose className='text-2xl' />
            </button>
        </div>
    )
}

export default Close
