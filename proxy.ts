import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { mainproxy } from "./app/middlewares/proxy"

export async function proxy(req: NextRequest) {
    let res

    res = await mainproxy(req)
    if (res) return res





    return NextResponse.next()
}

export const config = {
    matcher: [
        "/upload/:path*",
        "/profile/:path*",
        "/api/regularpost/:path*",
        "/api/servicepost/:path*",
        "/api/exclusive/:path*",
        "/newpost",
        "/admin/:path*"
    ],
}
