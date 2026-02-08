import React from 'react'
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { BsBell } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from 'next/image';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../../shadcn/ui/dropdown-menu"
import Link from 'next/link';


const Nav = () => {
    return (
        <nav className='pt-4  pb-2'>
            <div className='flex justify-between items-center'>
                <div className='flex items-baseline '>
                    <Image className='' alt='tree' width={42} height={42} src={"/icons/coconut-tree.png"} />
                    <h1 className='text-2xl font-bold  font-sans '><span className='text-2xl md:text-3xl'>K<span className='hidden md:inline text-2xl'>aipmangalam</span></span>online.</h1>
                </div>

                <Link href={"explore"} className='w-1/3 hidden lg:flex  rounded-full  px-4 py-3  items-center bg-neutral-100'>
                    <CiSearch className='text-muted  text-2xl' />
                    <input type="text" placeholder='search ' className='  px-2 w-full outline-0 underline-0 rounded-full text-muted text-md ' />

                </Link>
                <div className='flex items-center space-x-3 justify-between'>
                    <div className='flex '>

                        <button className='p-2 md:p-3 hover:bg-neutral-200 hover:text-black transition-colors duration-150 cursor-pointer bg-white   rounded-full mr-2'><VscSettings className='text-muted text-xl md:text-2xl' /></button>
                        <button className='p-2 md:p-3 bg-white hover:bg-neutral-200 hover:text-black transition-colors duration-150 cursor-pointer rounded-full'><BsBell className='text-muted text-xl md:text-2xl' /></button>


                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className='bg-white hover:text-black transition-colors duration-150 cursor-pointer flex space-x-2 items-center p-2 md:p-3 rounded-xl'>
                                <RxHamburgerMenu className='text-xl md:text-2xl' />
                                <Image
                                    src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-color-icon.svg"
                                    width={24} height={24}
                                    className="  rounded-full"
                                    alt="User avatar"
                                />




                            </button>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuGroup>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuItem asChild><Link href={"/profile"}> Profile </Link></DropdownMenuItem>
                                <DropdownMenuItem> <Link href={"/explore"}> Notifications </Link> </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuGroup>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem><Link href={"/search"}> Team</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href={"/search"}> Notifications </Link></DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>


                </div>


            </div>

            <Link href={"explore"} className="pt-6">
                <div className='w-full mt-5 flex lg:hidden rounded-full  px-4 py-2 md:py-3  items-center bg-neutral-100'>
                    <CiSearch className='text-muted text-2xl' />
                    <input type="text" placeholder='search ' className='  px-2 w-full outline-0 underline-0 rounded-full text-muted text-md ' />

                </div>
            </Link>

        </nav>
    )
}

export default Nav
