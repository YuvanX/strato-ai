
import { openai } from "@/app/lib/openai";
import prisma from "@/db/src/db";
import { promptType } from "@/types/prompttype";
import { getToken } from "next-auth/jwt";

import { NextRequest, NextResponse } from "next/server";


export const POST = async (req: NextRequest) => {
    const token = await getToken({ req })
    if(!token) return NextResponse.json({ success: false, message: "Unauthorized"}, {status: 401})

    try {
        const body = await req.json()
        const { prompt } = body

        const { success } = promptType.safeParse({prompt})
        if(!success) return NextResponse.json({ message: "Invalid Inputs", success: false}, { status: 400 })
        
        const response = await openai.beta.chat.completions.parse({
            model: "gpt-3.5-turbo",
            messages:[
                {"role": "system", "content": "You are a website landing page generator. Respond with JSON only."},
                {"role": "user", "content": prompt}
            ],
            temperature: 0.7
        })
        const content = response.choices[0].message.content
        const page = await prisma.page.create({
            data: {
                prompt,
                content: JSON.stringify(content),
                createdAt: new Date(),
                userId: Number(token.sub)
            }
        })

        return NextResponse.json({
            pageId: page.id
        }, { status: 200 })

    } catch(err) {
        console.error(err)
        return NextResponse.json({success: false, error: "Internal server error"}, {status: 500})
    }

}
