import { NextRequest, NextResponse } from "next/server";
import { getSystemPrompt } from "@/app/lib/llm/prompt";
import { ai } from "@/app/lib/llm/gemini";
import {
  createUserContent,
  GenerateContentResponse,
  PartListUnion,
} from "@google/genai";
import getServerSideSession from "@/app/lib/serversession";
import { parser } from "@/app/utils/parser";
import { Steps } from "@/types/steps";
import prisma from "@/db/src/db";

export const POST = async (req: NextRequest) => {
  const session = await getServerSideSession();
  if (!session) {
    return NextResponse.json({ success: false, message: "Unauthorized" },{ status: 400 });
  }

  const { prompt, projectId } = await req.json();
  console.log(projectId);
  
  const contents = prompt.map((p: PartListUnion) => createUserContent(p));

  const llmResponse: GenerateContentResponse = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents,
    config: {
      systemInstruction: getSystemPrompt(),
      maxOutputTokens: 8000,
    },
  });

  if (!llmResponse) {
    return NextResponse.json({
      sucess: false,
      result: "No response from llm",
    });
  
  } else {
    
    const parsedSteps: Steps[] = parser(llmResponse.candidates[0].content.parts[0].text!)
    await prisma.steps.create({
      data: {
        projectId: projectId,
        steps: parsedSteps, 
        createdAt: new Date()
      }
    })

    return NextResponse.json({ success: true, message: "Generated the content", llmResponse },{ status: 200 });
  }
};
