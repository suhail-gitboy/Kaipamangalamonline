"use client";

import Image from "next/image";
import Button from "../ui/Buttton";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ImageCarousel from "../ui/Carousal";
import ServiceCard from "../cards/Cardmain";
import LocalNewsCard from "../ui/Hookuser";
import { areaServices } from "@/libs/Datas";

const Header = () => {
    const router = useRouter();

    interface Activity {
        activity: string;
        icon: string;
    }

    const Activity: Activity[] = [
        { activity: "chaispot", icon: "/icons/tea.png" },
        { activity: "food", icon: "/icons/diet.png" },
        { activity: "grocery", icon: "/icons/shopping-bag.png" },
        { activity: "shops", icon: "/icons/store.png" },
        { activity: "tournaments", icon: "/icons/cricket.png" },
        { activity: "news", icon: "/icons/news-report.png" },
        { activity: "realestate", icon: "/icons/search.png" },
        { activity: "event", icon: "/icons/celebration.png" },
        { activity: "catering", icon: "/icons/catering.png" },
    ];





    const Arrayimages = Activity.map((dta) => dta.icon)


    return (
        <>
            <div className="hidden md:block">
                <LocalNewsCard />
            </div>
            <div className="md:flex justify-center overflow-hidden">
                <div className="flex items-center  md:w-fit mx-4 space-x-1 scrollbar-hide overflow-x-auto">
                    {Activity.map((data) => (
                        <div
                            onClick={() => router.push(`/explore?category=${data.activity}`)}
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



            <div className="">
                <div className="pt-1 flex justify-center flex-col gap-5">

                    <div className="flex justify-center items-center">
                        <div className="hidden md:grid grid-cols-2 justify-center w-7/8 gap-1 py-3  ">
                            {areaServices.map((service) => (
                                <ServiceCard key={service.id} {...service} />
                            ))}
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
