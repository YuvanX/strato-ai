import { ai } from "@/app/lib/llm/gemini";
import { templatePrompt } from "@/app/lib/llm/prompt";
import getServerSideSession from "@/app/lib/serversession";
import { nextjsPrompt, reactSetUpPrompt, uiSetUpPrompt } from "@/app/lib/stackprompts/prompts";
import { createUserContent } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export  async function POST(req: NextRequest) {
    const session = await getServerSideSession()
    console.log(session);
    
    if(!session) return NextResponse.json({ success: false, message: "Unauthorized"}, {status: 403})
    console.log(session);
    
    const prompt = await req.json()
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: [createUserContent(templatePrompt + prompt)],
        config: {
            maxOutputTokens: 200
        }
    })

    const stack = response.text?.trim().toLowerCase()
    

    if(stack === "react") {
        
       return NextResponse.json({
            prompts: [uiSetUpPrompt,`Here is an artifact that contains all the files of the project visible to you.\n Consider the content of ALL files in the project.\n\n${reactSetUpPrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n - .gitignore\n - package.lock-json\n`],
            uiPrompt: [reactSetUpPrompt]
        })
        
    }

    if(stack === "next.js" || stack === "nextjs") {
        return NextResponse.json({
            prompts: [uiSetUpPrompt, `Here is an artifact that contains all the files of the project visible to you.\n Consider the content of ALL files in the project.\n\n${nextjsPrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n - .gitignore\n - package.lock-json\n`],
            uiPrompt: [nextjsPrompt]
        })
    }

    return NextResponse.json({
        message: "This stack is not supported as of now"
    }, { status: 403 })
}