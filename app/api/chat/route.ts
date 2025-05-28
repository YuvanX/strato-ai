import getServerSideSession from "@/app/lib/serversession";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const session = await getServerSideSession()
    if(!session) {
        return NextResponse.json({ success: false, message: "Unauthorized request"}, { status: 401 })
    }

    
}