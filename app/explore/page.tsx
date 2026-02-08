import React from 'react'
import Nav from '../components/layout/Nav'
import Searchexplore from '../components/layout/Searchexplore'
import Barbottom from '../components/layout/Barbottom'
import CardScrollable from '../components/cards/CardScrollable'

const page = () => {
    return (
        <>
            <Searchexplore />
            <main className='px-4 py-2  md:flex md:px-14 lg:px-17 '>
                <section className=' md:block md:w-2/8'>
                    <h1 className='text-2xl font-bold'>Explore</h1>
                    <p className='mt-2 text-sm text-gray-600'>Discover new content and connect with others.</p>
                </section>
                <section className='w-full md:w-4/8 flex flex-col gap-y-4'>
                    {
                        [...Array(10)].map((_, ind) => (
                            <CardScrollable index={ind} image="https://media-cdn.tripadvisor.com/media/photo-m/1280/2e/99/e4/e1/profitez-de-notre-terrasse.jpg"
                                title="Beautiful Sea View House in Moonnupeedika"
                                location="Moonnupeedika, Kaipamangalam"
                                type="sale"
                                price="₹25,00,000" />
                        ))
                    }



                </section>


            </main>


            <Barbottom />

        </>
    )
}

export default page
