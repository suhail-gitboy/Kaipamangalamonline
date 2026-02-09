import React from 'react'
import Nav from '../components/layout/Nav'
import Searchexplore from '../components/layout/Searchexplore'
import Barbottom from '../components/layout/Barbottom'
import CardScrollable from '../components/cards/CardScrollable'
import { Scrollabledatas } from '../libs/Datas'

const page = () => {
    return (
        <>
            <Searchexplore />
            <main className='px-4 py-2  md:flex md:px-14 lg:px-17 mt-36'>
                <section className='hidden md:block md:w-2/8'>
                    <h1 className='text-2xl font-bold'>Explore</h1>
                    <p className='mt-2 text-sm text-gray-600'>Discover new content and connect with others.</p>
                </section>
                <section className='w-full scrollbar-hide overflow-y-auto h-160 md:w-4/8 flex flex-col gap-y-4'>
                    {
                        Scrollabledatas.map((data, ind) => (
                            <CardScrollable data={data} />
                        ))
                    }



                </section>


            </main>


            <Barbottom />

        </>
    )
}

export default page
