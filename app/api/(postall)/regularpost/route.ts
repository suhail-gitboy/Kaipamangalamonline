import { Categoryenum, PostType } from "@/app/types";
import cloudinary from "@/libs/Cloudinary";
import { Connectdb } from "@/libs/Configdb";
import { Post } from "@/models/Post.model";
import { User } from "@/models/User.model";
import { register } from "module";

import { NextRequest, NextResponse } from "next/server";

type imageType = {
    url: string | null,
    public_ID: string | null
}
export async function POST(req: NextRequest) {
    const user = req.headers.get("email")
    console.log(user);


    try {
        await Connectdb()


        const get_id = await User.findOne({ email: user }).select("_id")
        const formData: PostType | any = await req.formData()
        const datas = Object.fromEntries(formData.entries())

        const imagefile = formData.get("image") as File

        if (!imagefile || typeof imagefile == "string"
        ) throw new Error("image missing")
        const { title, category, mobilenumber, location, price, fixture, } = datas


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
        Newpost.userid = get_id

        if (category !== Categoryenum.NEWS) {
            Newpost.location = location
        }

        if (category === Categoryenum.REALESTATE) {
            Newpost.price = price
        }
        if (category == Categoryenum.EVENTS || category == Categoryenum.TOURNAMENTS) {
            Newpost.fixture = fixture
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