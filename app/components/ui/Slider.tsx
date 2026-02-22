import * as React from "react"
import { Card, CardContent } from "../../../shadcn/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../shadcn/ui/carousel"
items
import Image from "next/image"
import { items } from "@/libs/Datas"

export function CarouselSize() {



    return (
        <Carousel opts={{ align: "start" }} className="relative w-full">
            <CarouselContent>
                {items.map((item, index) => (
                    <CarouselItem
                        key={index}
                        className="basis-2/3 sm:basis-1/3 lg:basis-1/3"
                    >
                        <div className="p-1">
                            <Card
                                className="
                  relative h-60 overflow-hidden rounded-2xl
                  border border-slate-200 bg-white
                  shadow-sm transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-md
                "
                            >
                                <CardContent className="relative h-full p-0">
                                    {/* Image */}
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

                                    {/* Tag */}
                                    <span
                                        className={`
                      absolute top-3 left-3 rounded-full px-2 py-0.5 text-[10px] font-semibold
                      ${item.tag === "Exclusive"
                                                ? "bg-orange-300 text-orange-900"
                                                : item.tag === "Trending"
                                                    ? "bg-lime-300 text-lime-900"
                                                    : "bg-sky-300 text-sky-900"
                                            }
                    `}
                                    >
                                        {item.tag}
                                    </span>

                                    {/* Content */}
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <p className="text-xs font-semibold text-white leading-snug">
                                            {item.title}
                                        </p>
                                        <p className="mt-0.5 text-[10px] text-white/85">
                                            {item.subtitle}
                                        </p>

                                        <div className="mt-1 flex items-center gap-1 text-[10px] text-white/70">
                                            <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
                                            {item.meta}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>

    )
}
