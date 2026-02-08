import React from 'react'
import ImageCarousel from '../ui/Carousal'
import { CarouselSize } from '../ui/Slider'
const Arrayimages: string[] = [
    "/ajooba.png",
    "/promo3.avif",
    "/promo4.avif",
    "/promo.webp"

]
const Promotion = () => {
    return (
        <div className="flex flex-col  md:flex-row gap-4 relative max-w-full pt-4 px-4 lg:px-14">

            {/* Left / Top — Trending Nearby */}
            <div className="w-full md:w-2/3">
                <div className="relative rounded-2xl bg-bg p-4 shadow-md">

                    {/* Heading */}
                    <div className="flex items-center gap-2 mb-1">
                        <span className="inline-flex h-2 w-2 rounded-full bg-lime-500 animate-pulse" />
                        <h2 className="text-sm font-semibold text-slate-900">
                            What’s Trending Nearby
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                        Popular spots, events, and local updates people are talking about
                    </p>

                    {/* Divider */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-lime-300/50 to-transparent mb-3" />

                    {/* Trending Cards / Carousel */}
                    <CarouselSize />
                </div>
            </div>

            {/* Right / Bottom — This Week’s Offers */}
            <div className="w-full md:w-1/3">
                <div className="rounded-2xl bg-white shadow-md p-3 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                            This Week’s Offers
                        </h2>
                        <span className="rounded-full bg-lime-200 px-2 py-0.5 text-[10px] font-medium text-lime-800">
                            Featured
                        </span>
                    </div>

                    {/* Carousel */}
                    <div className="rounded-xl overflow-hidden">
                        <ImageCarousel images={Arrayimages} />
                    </div>
                </div>
            </div>
        </div>




    )
}

export default Promotion
