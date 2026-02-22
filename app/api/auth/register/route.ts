import { NextResponse } from "next/server";
import { Connectdb } from "@/libs/Configdb";
import { User } from "@/models/User.model";
import bcrypt from "bcrypt"

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, password } = body;

        await Connectdb();

        const existing = await User.findOne({ email });
        if (existing)
            return NextResponse.json(
                { message: "User already exists" },
                { status: 400 }
            );

        const hashed = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashed,
        });

        return NextResponse.json({ message: "User created" }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: "Error" }, { status: 500 });
    }
}
