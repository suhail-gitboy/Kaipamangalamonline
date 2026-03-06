import { ImageType } from "@/app/types";
import cloudinary from "@/libs/Cloudinary";
import { Connectdb } from "@/libs/Configdb";
import { promises } from "dns";
import { NextRequest, NextResponse } from "next/server";
import { imageType } from "../../regularpost/route";
import { Turf } from "@/models/Turf.model";
import { title } from "process";



export async function POST(req: NextRequest) {

    const email = req.headers.get("email")

    const formdata: any = await req.formData()

    const alldata = Object.fromEntries(formdata.entries())

    const { description, title, contact, servicetime, slot, gameandprice, address } = alldata



    try {
        await Connectdb()
        const image = formdata.get("image") as File
        if (!image || typeof image == "string") {
            throw new Error("image not found")
        }
        const bufferimage = Buffer.from(await image.arrayBuffer())

        const uploadimage = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ resource_type: "image", folder: "imagepost" }, (error, results) => {
                if (error) return reject(error)
                resolve(results)

            }).end(bufferimage)

        })


        const imagefile: imageType | any = {
            url: uploadimage?.url,
            public_ID: uploadimage?.public_id

        }

        const gameandpriceparsed = JSON.parse(gameandprice)
        const parsedSlot = JSON.parse(slot)
        const addressparsed = JSON.parse(address)
        const servicetimeparsed = JSON.parse(servicetime)
        const alltiming = []
        for (let time of parsedSlot) {
            const obj = {
                time: time,
                isActive: true

            }
            alltiming.push(obj)
        }


        const upload = await Turf.create({
            title: title,
            description: description,
            contact: Number(contact),
            image: imagefile,
            time: servicetimeparsed,
            address: addressparsed,
            slots: alltiming,
            games: gameandpriceparsed,
            usermail: email


        })


        return NextResponse.json({ message: "successfully created" }, { status: 201 })




    }
    catch (error) {
        console.log(error);

        return NextResponse.json({ msge: "error" }, { status: 500 })


    }

}