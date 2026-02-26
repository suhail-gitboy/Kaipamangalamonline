import { Connectdb } from "@/libs/Configdb";
import { Post } from "@/models/Post.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    try {
        await Connectdb()

        const { searchParams } = new URL(req.url)

        const category = searchParams.get("category")
        const location = searchParams.get("location")
        const searchby = searchParams.get("searchby")


        let filter: { category: string | null, location: any } = {}

        if (category) filter.category = category
        if (location) filter.location = { $regex: location }
        let data
        if (searchby) {
            data = await Post.find({
                $or: [

                    { category: { $regex: searchby, $options: "i" } },
                    { location: { $regex: searchby, $options: "i" } },
                    { title: { $regex: searchby, $options: "i" } },
                    { description: { $regex: searchby, $options: "i" } }
                ]
            }).sort({ createdAt: -1 })

        } else {
            data = await Post.find(filter).sort({ createdAt: -1 })
        }
        return NextResponse.json({ allpost: data }, { status: 200 })




    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }

}