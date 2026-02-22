"use client"
import React, { useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { VscSettings } from "react-icons/vsc";
import { BsBell } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from 'next/image';
import {
    User,
    Bell,
    Users,
    Settings,
    LogOut,
    Sparkles,
} from "lucide-react"

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
import { signOut, useSession } from 'next-auth/react';
import { useStore } from '@/app/zustandstate/Store';


const Nav = () => {
    const { data: session } = useSession()



    const setUser = useStore((s) => s.Setuser)
    const userdata = useStore((s) => s.userdata)
    useEffect(() => {
        if (session?.user == null) return
        setUser(session?.user)

    }, [session])


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


                        <button className='p-2 md:p-3 bg-white hover:bg-neutral-200 hover:text-black transition-colors duration-150 cursor-pointer rounded-full'><BsBell className='text-muted text-xl md:text-2xl' /></button>


                    </div>

                    {
                        userdata == null ? <Link href={"/login"} className='bg-white text-muted rounded-xl md:px-5 px-3 md:py-3 py-2 text-sm'>login</Link> :
                            <DropdownMenu>
                                {/* Trigger Button */}
                                <DropdownMenuTrigger asChild>
                                    <button className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white/80 backdrop-blur border shadow-sm hover:shadow-md transition-all">
                                        <Image
                                            src={
                                                userdata?.image ? userdata?.image : userdata.avatar ||
                                                    "https://ui-avatars.com/api/?name=User"
                                            }
                                            width={32}
                                            height={32}
                                            className="rounded-full"
                                            alt="avatar"
                                        />
                                        <span className="text-sm font-medium hidden md:block">
                                            {userdata?.name || "User"}
                                        </span>
                                    </button>
                                </DropdownMenuTrigger>

                                {/* Dropdown Content */}
                                <DropdownMenuContent className="w-64 p-2 rounded-2xl shadow-xl border bg-white/95 backdrop-blur animate-in fade-in zoom-in-95">

                                    {/* USER HEADER */}
                                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-lime-100 to-emerald-100 mb-2">
                                        <Image
                                            src={
                                                userdata?.image ? userdata.image : userdata.avatar ||
                                                    "https://ui-avatars.com/api/?name=User"
                                            }
                                            width={40}
                                            height={40}
                                            className="rounded-full border"
                                            alt="avatar"
                                        />
                                        <div>
                                            <p className="font-semibold text-sm">
                                                {userdata?.name || "User"}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {userdata?.email}
                                            </p>
                                        </div>
                                    </div>

                                    <DropdownMenuSeparator />

                                    {/* ACCOUNT */}
                                    <DropdownMenuGroup>
                                        <DropdownMenuLabel className="text-xs text-gray-400 px-2">
                                            My Account
                                        </DropdownMenuLabel>

                                        <DropdownMenuItem asChild>
                                            <Link href="/profile" className="flex items-center gap-2">
                                                <User size={16} /> Profile
                                            </Link>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem asChild>
                                            <Link href="/explore" className="flex items-center gap-2">
                                                <Bell size={16} /> Notifications
                                            </Link>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem asChild>
                                            <Link href="/team" className="flex items-center gap-2">
                                                <Users size={16} /> Team
                                            </Link>
                                        </DropdownMenuItem>

                                        <DropdownMenuItem asChild>
                                            <Link href="/settings" className="flex items-center gap-2">
                                                <Settings size={16} /> Settings
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>

                                    <DropdownMenuSeparator />

                                    {/* LOGOUT */}
                                    <DropdownMenuItem
                                        onClick={() => signOut()}
                                        className="flex items-center gap-2 text-red-500 focus:text-red-600"
                                    >
                                        <LogOut size={16} /> Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                    }


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
