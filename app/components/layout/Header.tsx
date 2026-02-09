"use client";

import Image from "next/image";
import Button from "../ui/Buttton";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ImageCarousel from "../ui/Carousal";
import ServiceCard from "../cards/Cardmain";
import LocalNewsCard from "../ui/Hookuser";
import { areaServices } from "@/app/libs/Datas";

const Header = () => {
    const router = useRouter();

    interface Activity {
        activity: string;
        icon: string;
    }

    const Activity: Activity[] = [
        { activity: "chai spot", icon: "/icons/tea.png" },
        { activity: "food", icon: "/icons/diet.png" },
        { activity: "grocery", icon: "/icons/shopping-bag.png" },
        { activity: "shops", icon: "/icons/store.png" },
        { activity: "tournaments", icon: "/icons/cricket.png" },
        { activity: "news", icon: "/icons/news-report.png" },
        { activity: "real estate", icon: "/icons/search.png" },
        { activity: "Fest", icon: "/icons/celebration.png" },
        { activity: "catering", icon: "/icons/catering.png" },
    ];





    const Arrayimages = Activity.map((dta) => dta.icon)


    return (
        <>
            <div className="hidden md:block">
                <LocalNewsCard />
            </div>
            {/* servicesicons */}

            <div className="md:flex justify-center overflow-hidden">
                <div className="flex items-center  md:w-fit mx-4 space-x-1 scrollbar-hide overflow-x-auto">
                    {Activity.map((data) => (
                        <div
                            key={data.activity}
                            className="shrink-0 m-2 h-auto flex flex-col items-center"
                        >
                            <div className="p-4 bg-neutral-100 rounded-xl">
                                <Image alt="icon" src={data.icon} height={35} width={36} />
                            </div>

                            <p className="pt-2 text-xs text-muted text-center h-8">
                                {data.activity}
                            </p>
                        </div>
                    ))}
                </div>
            </div>


            {/* activities and services */}
            <div className="">
                <div className="pt-1 flex justify-center flex-col gap-5">

                    <div className="flex justify-center items-center">
                        <div className="hidden md:grid grid-cols-2 justify-center w-7/8 gap-1 py-3  ">
                            {areaServices.map((service) => (
                                <ServiceCard key={service.id} {...service} />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="hidden md:block w-5/6 ">
                            <div className="relative overflow-hidden rounded-2xl border border-orange-200/60 bg-gradient-to-br from-orange-50 via-white to-lime-50 p-5 shadow-sm transition hover:shadow-md">

                                {/* Soft glow */}
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.5),_transparent_60%)]" />

                                {/* Header */}
                                <div className="relative mb-4 flex items-start justify-between">
                                    <div>
                                        <h4 className="text-md text-lime-500 md:text-orange-400 font-semibold text-slate-900">
                                            Community discussions
                                        </h4>
                                        <p className="mt-0.5 text-[11px] text-slate-600">
                                            Active conversations near you
                                        </p>
                                    </div>

                                    <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                                        Live
                                    </span>
                                </div>

                                {/* Discussions */}
                                <div className="relative space-y-3">
                                    {[
                                        { title: "Best rental areas near IT Park", replies: 14 },
                                        { title: "New housing projects launching soon", replies: 8 },
                                        { title: "Is Kaipamgalam good for families?", replies: 21 }
                                    ].map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="
    group relative flex items-center justify-between
    rounded-2xl border border-slate-200/70
    bg-white/80 p-4 backdrop-blur
    transition
    hover:-translate-y-0.5
    hover:border-orange-300/60
    hover:shadow-md
  "
                                        >
                                            {/* Left accent */}
                                            <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-gradient-to-b from-lime-400 to-orange-400 opacity-0 transition group-hover:opacity-100" />

                                            {/* Content */}
                                            <div className="flex items-start gap-3">
                                                {/* Icon / bullet */}
                                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-lime-200 to-orange-200 text-xs font-semibold text-slate-700">
                                                    💬
                                                </div>

                                                <div>
                                                    <p className="text-xs font-semibold text-slate-900 leading-snug">
                                                        {item.title}
                                                    </p>

                                                    <div className="mt-1 flex items-center gap-2">
                                                        <span className="text-[10px] text-slate-500">
                                                            {item.replies} replies
                                                        </span>
                                                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                                                        <span className="text-[10px] text-slate-500">
                                                            Active
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right action */}
                                            <div className="flex items-center gap-2">
                                                <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-medium text-orange-700">
                                                    Join
                                                </span>
                                                <span className="text-sm text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-600">
                                                    →
                                                </span>
                                            </div>
                                        </div>

                                    ))}
                                </div>

                                {/* Footer CTA */}
                                <button className="relative mt-4 w-full rounded-xl border border-slate-300 bg-orange-400 py-2 text-[11px] font-medium text-slate-800 hover:bg-orange-500/30 transition">
                                    View all discussions
                                </button>
                            </div>
                        </div>
                    </div>
                </div >
                <div className="md:hidden block">
                    <LocalNewsCard />
                </div>
            </div>
        </>
    );
};

export default Header;
