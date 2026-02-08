"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";

interface ImageCarouselProps {
    images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,

            }}
            className="rounded-2xl overflow-hidden"
        >
            {images.map((src, index) => (
                <SwiperSlide key={index}>
                    <div className="relative w-full h-74 overflow-hidden rounded-2xl shadow-md group">
                        {/* Image */}
                        <Image
                            src={src}
                            alt={`offer-${index}`}
                            fill
                            priority={index === 0}
                            className="
      object-cover
      transition-transform duration-500
      group-hover:scale-105
    "
                        />

                        {/* Gradient overlay */}
                        <div
                            className="
      absolute inset-0
      bg-gradient-to-t
      from-black/60 via-black/20 to-transparent
    "
                        />

                        {/* Offer badge */}
                        <span
                            className="
      absolute top-3 left-3
      rounded-full
      bg-lime-500 px-3 py-1
      text-[10px] font-bold text-slate-900
      shadow-sm
    "
                        >
                            LIMITED OFFER
                        </span>

                        {/* Bottom content */}
                        <div className="absolute bottom-3 left-3 right-3">
                            <p className="text-xs font-semibold text-white leading-snug">
                                Exclusive deals near you
                            </p>
                            <p className="mt-0.5 text-[10px] text-white/80">
                                Food • Stay • Local shops
                            </p>
                        </div>
                    </div>

                </SwiperSlide>
            ))}
        </Swiper>
    );
}
