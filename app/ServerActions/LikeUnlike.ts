"use server"

import { Connectdb } from "@/libs/Configdb"
import { Post } from "@/models/Post.model"
import mongoose from "mongoose"

interface Prop {
    username: string
    propertyid: string | any
}

export const Likeunlike = async ({ username, propertyid }: Prop) => {
    console.log(propertyid, username);

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

}