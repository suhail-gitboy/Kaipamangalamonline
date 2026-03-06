import cloudinary from "@/libs/Cloudinary";
import { Connectdb } from "@/libs/Configdb";
import { Exclusive } from "@/models/Exclusive.model";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    try {

        await Connectdb()

        const datas = await req.formData()

        const imagefile = datas.get("image") as File

        const all = Object.fromEntries(datas.entries())

        const { description, address, title, type } = all

        if (!imagefile) throw new Error("image not found")

        const Bufferimg = Buffer.from(await imagefile.arrayBuffer())

        const Uploadimage = await new Promise((resolve, reject) => {

            cloudinary.uploader.upload_stream({ resource_type: "image", folder: "imagepost" }, (err, res) => {
                if (err) reject(err)
                resolve(res)
            }).end(Bufferimg)

        })



        const imageobject: any = {
            url: Uploadimage?.url,
            public_ID: Uploadimage.public_id

        }
        console.log(imageobject);
        const email = req.headers.get("email")

        const parsedadres = address ? JSON.parse(address) : null
        const Upload = await Exclusive.create({
            usermail: email,
            title,
            address: parsedadres,
            description,
            type,
            image: imageobject

        })


        return NextResponse.json({ msg: "success" }, { status: 201 })






    } catch (error) {

        return NextResponse.json({ msg: error }, { status: 500 })

    }

}