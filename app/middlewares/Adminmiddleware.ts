import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function adminmiddleware(req: NextRequest) {
    console.log("from admin middleware")

    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
    })

    const { pathname } = req.nextUrl

    if (pathname.startsWith("/admin")) {

        if (!token) {
            return NextResponse.redirect(new URL("/", req.url))
        }

        if (token.email !== "suhailgti12@gmail.com") {
            return NextResponse.redirect(new URL("/adminprotucted", req.url))
        }
    }

    return null   // IMPORTANT
}
