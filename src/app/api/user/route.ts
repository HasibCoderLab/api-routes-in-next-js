import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        name:"Hasib",
        age:15
    })
}

export async function POST(request:NextRequest) {
    let {name, age} = await request.json()

    return NextResponse.json({
        name,age
    })
}

