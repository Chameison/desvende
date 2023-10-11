import { NextResponse } from "next/server"

const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?"
const GOOLE_PLACE_KEY = process.env.GOOGLE_PLACE_KEY

export async function GET(request: any) {

    const { searchParams }: any = new URL(request.url)
    const q = searchParams.get('q');
    const res = await fetch(
        BASE_URL + "query=" + q + "&key=" + GOOLE_PLACE_KEY,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
    const response = await res.json()
    return NextResponse.json(
        {
            response
        }
    )
}