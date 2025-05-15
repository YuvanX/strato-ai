import { promptType } from "@/types/prompttype";
import { NextRequest, NextResponse } from "next/server";
import { getSystemPrompt } from "@/app/lib/llm/prompt";
import { ai } from "@/app/lib/llm/gemini";
import { createUserContent, PartListUnion } from "@google/genai";
import getServerSideSession from "@/app/lib/serversession";

export const POST = async (req: NextRequest) => {

  const session = await getServerSideSession();
  if (!session) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 400 });

  const { prompt } = await req.json();
  console.log(prompt);
  
  // const { success } = promptType.safeParse(prompt)
  
  // if (!success) return NextResponse.json({ success: false, message: "Invalid Prompt" }, { status: 403 });

  const contents = prompt.map((p: PartListUnion) => createUserContent(p));

 const message = await ai.models.generateContent({
  model: 'gemini-2.0-flash',
  contents,
  config: {
    systemInstruction: getSystemPrompt(),
    maxOutputTokens: 8000,
  }
 })
 console.log(message);
 

  return NextResponse.json({ success: true, message}, { status: 200 });
};
