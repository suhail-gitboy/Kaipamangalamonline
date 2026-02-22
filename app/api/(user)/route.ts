import { Connectdb } from "@/libs/Configdb"
import { User } from "@/models/User.model"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params
    try {
        Connectdb()

        const formdata = await req.formData()
        const image = formdata.get("image")
        const userdetails = Object.fromEntries(formdata.entries())


        console.log(userdetails);

        if (!userdetails) throw new Error("missing user details")
        const { name, email } = userdetails

        const updateuser = await User.findById({ _id: id })
        if (name) {
            updateuser.name = name
        }

        if (email) {
            updateuser.email = email

        }

        if (image) {
            const arraybuffer = Buffer.from(await image.arrayBuffer())
        }



        return NextResponse.json({ user: updateuser }, { status: 201 })



    } catch (error) {

        NextResponse.json({ messgae: "wrong server error" }, { status: 500 })
    }

}