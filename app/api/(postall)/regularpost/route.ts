import { Categoryenum, PostType } from "@/app/types";
import cloudinary from "@/libs/Cloudinary";
import { Connectdb } from "@/libs/Configdb";
import { Post } from "@/models/Post.model";
import { User } from "@/models/User.model";
import { register } from "module";

import { NextRequest, NextResponse } from "next/server";

export type imageType = {
    url: string | null,
    public_ID: string | null
}
export async function POST(req: NextRequest) {
    const user = req.headers.get("email")
    console.log(user);


    try {
        await Connectdb()




        const formData: PostType | any = await req.formData()
        const datas = Object.fromEntries(formData.entries())

        const imagefile = formData.get("image") as File

        if (!imagefile || typeof imagefile == "string"
        ) throw new Error("image missing")
        const { title, category, mobilenumber, pin, location, price, fixture, description } = datas



        const arrayBuffer = await imagefile.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        const uploadimage: any = await new Promise((resolve, reject) => {

            cloudinary.uploader.upload_stream({ resource_type: "image", folder: "imagepost" }, (error, results) => {
                if (error) return reject(error)
                resolve(results)

            }).end(buffer)

        })



        const image: imageType | any = {
            url: uploadimage?.url,
            public_ID: uploadimage.public_id

        }



        const Newpost = new Post()

        Newpost.title = title
        Newpost.image = image
        Newpost.category = category
        Newpost.mobilenumber = Number(mobilenumber)
        Newpost.usermail = user
        Newpost.description = description

        if (category !== Categoryenum.NEWS.toLocaleLowerCase()) {
            Newpost.location = location
            Newpost.address = JSON.parse(pin)
        }

        if (category === Categoryenum.REALESTATE.toLocaleLowerCase()) {
            Newpost.price = price
        }
        if (category == Categoryenum.EVENTS.toLocaleLowerCase() || category.toLocaleLowerCase() == Categoryenum.TOURNAMENTS.toLocaleLowerCase() || category == Categoryenum.OFFERS.toLocaleLowerCase()) {
            Newpost.fixture = JSON.parse(fixture)
        }


        await Newpost.save()



        return NextResponse.json({
            data: datas
        }, { status: 201 })

    } catch (error) {
        console.log(error);

        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        )




    }



}