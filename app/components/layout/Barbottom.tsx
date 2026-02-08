"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoAdd, IoSearch } from "react-icons/io5"
import { IoMdHeartEmpty } from "react-icons/io"
import { FaRegMessage, FaUser } from "react-icons/fa6"

const Barbottom = () => {
    const pathname = usePathname()

    const navItems = [
        {
            href: "/explore",
            label: "Explore",
            icon: IoSearch,
        },
        {
            href: "/",
            label: "Home",
            icon: IoMdHeartEmpty,
        },
        {
            href: "/newpost",
            label: "Add",
            icon: IoAdd,
            isCenter: true,
        },
        {
            href: "/messages",
            label: "Messages",
            icon: FaRegMessage,
        },
        {
            href: "/profile",
            label: "Profile",
            icon: FaUser,
        },
    ]

    return (
        <div
            className="
        fixed z-40 bottom-0 left-0 right-0 
        bg-white border-t border-slate-200
        px-2 py-2
        md:hidden
      "
        >
            <div className="flex items-center justify-between">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    const Icon = item.icon

                    if (item.isCenter) {
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="relative -mt-6 flex flex-col items-center"
                            >
                                <div
                                    className="
                    flex h-12 w-12 items-center justify-center
                    rounded-full bg-lime-700 text-white
                    shadow-lg
                  "
                                >
                                    <Icon className="text-xl" />
                                </div>
                                <span className="mt-1 text-[10px] text-slate-600">
                                    {item.label}
                                </span>
                            </Link>
                        )
                    }

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="flex flex-col items-center justify-center gap-0.5"
                        >
                            <Icon
                                className={`text-xl ${isActive ? "text-black" : "text-slate-400"
                                    }`}
                            />
                            <span
                                className={`text-[10px] ${isActive
                                    ? "font-medium text-black"
                                    : "text-slate-400"
                                    }`}
                            >
                                {item.label}
                            </span>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Barbottom
