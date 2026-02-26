"use client"
import React from 'react'
import { Card, CardContent, CardHeader } from "../../../shadcn/ui/card"
import { Skeleton } from "@/shadcn/ui/skeleton"

import Searchexplore from '@/app/components/layout/Searchexplore'
import Barbottom from '@/app/components/layout/Barbottom'
import CardScrollable from '@/app/components/cards/CardScrollable'
import { Scrollabledatas } from '@/libs/Datas'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { useStore } from '@/app/zustandstate/Store'
import { PostType } from '@/app/types'

const page = () => {

    const params = useSearchParams()
    const category = params.get("category") || ""
    const location = params.get("location") || ""
    const searchby = params.get("searchby") || ""

    const likes = useStore(s => s.likes)
    const { data, isPending } = useQuery({
        queryKey: ["postdata", category, location, searchby],
        queryFn: async () => {
            const res = await fetch(`/api/allpost?category=${category}&location=${location}&searchby=${searchby}`)
            return res.json()
        },


    })



    return (
        <>
            <Searchexplore />
            <main className="px-4 sm:px-8 py-2 mt-24 md:flex md:px-14 lg:px-20 gap-6">


                <section className="
    hidden md:block 
    md:w-2/8 
    md:sticky 
    md:top-44 
    self-start
  ">
                    <h1 className="text-2xl font-bold">Explore</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Discover new content and connect with others.
                    </p>
                </section>


                <section className="w-full md:w-4/8 flex flex-col ">

                    {isPending ? [1, 2, 3, 4].map((d, k) => (
                        <Card key={k} className="w-full mb-2">
                            <CardHeader>
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className="aspect-video w-full" />
                            </CardContent>
                        </Card>
                    )) : data?.allpost.length > 0 ? data?.allpost?.map((data: PostType, ind: any) => (
                        <CardScrollable key={ind} data={data} />
                    )) : <div className='p-4 mt-30'><img src="/—Pngtree—error 404 page not found_6501259.png" className='w-full object-contain h-80' alt="" />
                    </div>}
                </section>

            </main>



            <Barbottom />

        </>
    )
}

export default page
