import { Connectdb } from "@/libs/Configdb";
import { Post } from "@/models/Post.model";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {

    const { id } = await params

    try {

        Connectdb()


        await Post.findByIdAndDelete({ _id: id })

        return NextResponse.json({ msg: "deleted" }, { status: 200 })

    } catch (error) {

        return NextResponse.json({ error }, { status: 500 })

    }



}