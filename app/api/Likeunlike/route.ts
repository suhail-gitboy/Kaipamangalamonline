import { Connectdb } from "@/libs/Configdb";
import { Post } from "@/models/Post.model";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
    try {

        const body = await req.json()
        const { username, propertyid } = body
        await Connectdb()

        const imageandname = {
            name: username,
            img: "https://img.freepik.com/premium-vector/default-avatar.jpg"
        }


        const postItem = await Post.findOne({
            _id: propertyid,
            "likes.name": username
        })

        if (postItem) {

            await Post.updateOne(
                { _id: propertyid },
                { $pull: { likes: { name: username } } }
            )
            console.log("removed");

        } else {

            const item = await Post.updateOne(
                { _id: propertyid },
                { $addToSet: { likes: imageandname } }
            )
            console.log(item);

        }

        return NextResponse.json({ message: "success" }, { status: 201 })


    } catch (error) {

        return NextResponse.json({ error }, { status: 500 })
    }

}