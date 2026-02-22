"use client"
import React from 'react'
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


type Prop = {
    ind: number
}

const Profilepost = ({ ind }: Prop) => {
    return (
        <motion.div
            key={ind}
            whileHover={{ scale: 1.04 }}
            className="relative aspect-square rounded-2xl overflow-hidden group"
        >
            {/* Post Image */}
            <img
                src={`https://source.unsplash.com/random/600x600?social,${ind}`}
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
                            onClick={() => {
                                console.log("Deleted post", ind)
                            }}
                        >
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* Likes Overlay */}
            <div className="
        absolute bottom-2 right-2
        bg-lime-500/90 text-white
        text-xs px-2 py-1
        rounded-full
        flex items-center gap-1
      ">
                <Heart size={12} />
                {Math.floor(Math.random() * 900 + 100)}
            </div>
        </motion.div>
    )
}

export default Profilepost
