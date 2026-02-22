import Image from "next/image";
import Nav from "./components/layout/Nav";
import Header from "./components/layout/Header";
import Promotion from "./components/layout/Promotion";
import { areaServices } from "@/libs/Datas";
import ServiceCard from "./components/cards/Cardmain";
import Link from "next/link";
import Button from "./components/ui/Buttton";
import Adddetailbutton from "./components/ui/Adddetailbutton";
import Barbottom from "./components/layout/Barbottom";
import { useSession } from "next-auth/react";

export default function Home() {



  return (
    <div className=" min-h-screen  mb-25 ">



      {/* for header nav */}
      <header className="bg-linear-to-br md:from-orange-200 md:via-orange-300 md:to-orange-200 from-lime-200 via-lime-300 to-lime-100 ">
        <div className="px-4 pb-7 md:px-14 lg:px-17    h-auto ">
          <Nav />
          <Header />


        </div>
        <div className="block md:hidden bg-bg pb-5 pt-5 rounded-t-4xl    px-4  md:px-14 lg:px-17">
          <div className="grid grid-cols-2 gap-3 py-3  ">
            {areaServices.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          <Adddetailbutton />
        </div>


      </header>

      <Promotion />

      <Barbottom />


    </div>
  );
}
