// app/api/location/reverse/route.ts
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const { searchParams } = new URL(req.url);
        const lat = searchParams.get("lat");
        const lon = searchParams.get("lon");

        if (!lat || !lon) {
            return NextResponse.json({ error: "Missing lat/lon" }, { status: 400 });
        }

        const res = await axios.get("https://nominatim.openstreetmap.org/reverse", {
            params: { lat, lon, format: "json" },
            headers: {
                "User-Agent": "MyApp/1.0 (suhailgti12@gmail.com)", // required by Nominatim
                "Accept-Language": "en",
            },
        });

        return NextResponse.json(res.data);
    } catch (err: any) {
        console.error(err.response?.data || err.message);
        return NextResponse.json({ error: "Error fetching location" }, { status: 500 });
    }
}