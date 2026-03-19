"use client"
import React, { useState } from 'react'
import { Heart, Trash2 } from "lucide-react"
import { motion } from "framer-motion"

import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/shadcn/ui/alert-dialog"
import { useRouter } from 'next/navigation'


export interface Item {
    _id: string,
    image: {
        url: string,
        public_ID: string
    },
    title: string

}

type Prop = {

    item: Item
}

const Profilepost = ({ item }: Prop) => {

    const router = useRouter()

    const [key, setKey] = useState<string | null>(null)


    const deleteitem = async () => {

        const res = await fetch(`/api/regularpost/${key}`, {
            method: "DELETE"
        })
        const resdata = await res.json()

        if (!resdata) throw new Error("error deleting")

        alert("deleted successfully")

        setKey(null)
        router.refresh()

    }
    return (
        <motion.div
            key={item._id}
            whileHover={{ scale: 1.04 }}
            className="relative aspect-square rounded-2xl overflow-hidden group"
        >

            <img
                src={item?.image?.url}
                alt="post"
                className="w-full h-full object-cover group-hover:opacity-90 transition"
            />

            {/* DELETE WITH WARNING */}
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <button
                        className="
              absolute top-2 right-2
              bg-black/60 text-white
              p-1.5 rounded-full
              opacity-100 md:opacity-0
              md:group-hover:opacity-100
              transition
              hover:bg-red-500
            "
                        onClick={() => setKey(item._id)}
                    >
                        <Trash2 size={16} />
                    </button>
                </AlertDialogTrigger>

                <AlertDialogContent className="rounded-2xl">
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Delete this post?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. The post will be permanently removed.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                        <AlertDialogCancel>
                            Cancel
                        </AlertDialogCancel>

                        <AlertDialogAction
                            className="bg-red-500 hover:bg-red-600"
                            onClick={deleteitem}
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>


            <div className="
        absolute items-baseline-last bottom-1 right-2
      
        flex  gap-1
      ">
                <p className='p-2 rounded-full bg-black/40 text-xs text-white'>{item.title}</p>
                <div className='flex h-fit items-center  bg-lime-500/90 text-white
        text-xs px-1 py-1
        rounded-full'>
                    <Heart size={12} />
                    {Math.floor(Math.random() * 900 + 100)}
                </div>

            </div>
        </motion.div>
    )
}

export default Profilepost
