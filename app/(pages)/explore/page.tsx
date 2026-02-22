import React from 'react'

import Searchexplore from '@/app/components/layout/Searchexplore'
import Barbottom from '@/app/components/layout/Barbottom'
import CardScrollable from '@/app/components/cards/CardScrollable'
import { Scrollabledatas } from '@/libs/Datas'

const page = () => {
    return (
        <>
            <Searchexplore />
            <main className="px-4 sm:px-8 py-2 mt-24 md:flex md:px-14 lg:px-20 gap-6">

                {/* LEFT – Sticky */}
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

                {/* RIGHT – Scrollable content */}
                <section className="w-full md:w-4/8 flex flex-col ">
                    {Scrollabledatas.map((data, ind) => (
                        <CardScrollable key={ind} data={data} />
                    ))}
                </section>

            </main>



            <Barbottom />

        </>
    )
}

export default page
