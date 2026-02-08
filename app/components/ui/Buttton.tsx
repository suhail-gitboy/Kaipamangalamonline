import React from 'react'
interface Prop {

    text: string,
    click: () => void

}
const Button = ({ text, click }: Prop) => {
    return (
        <button onClick={click} className='rounded-xl text-nowrap  text-black font-semibold bg-linear-to-br px-3 py-1 text-xs from-lime-200 transition-colors duration-150 hover:via-lime-500 via-lime-200 to-lime-50 text-black' >{text}</button>
    )
}

export default Button
