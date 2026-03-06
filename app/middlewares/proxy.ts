import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"


export async function mainproxy(req: NextRequest) {

    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
    })

    const path = req.nextUrl.pathname

    if ((path.startsWith("/profile") || path.startsWith("/upload")) &&
        !token)
        return NextResponse.redirect(new URL("/login", req.url))

    if (path.startsWith("/admin")) {
        if (!token)
            return NextResponse.redirect(new URL("/login", req.url))

        if (token.email !== "suhailgti12@gmail.com")
            return NextResponse.redirect(new URL("/adminprotucted", req.url))
    }

    if (token) {
        const requestHeaders = new Headers(req.headers)

        requestHeaders.set("email", token.email)


        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        })
    }


    return NextResponse.next()
}
