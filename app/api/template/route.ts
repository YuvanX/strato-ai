import { ai } from "@/app/lib/llm/gemini";
import { templatePrompt } from "@/app/lib/llm/prompt";
import getServerSideSession from "@/app/lib/serversession";
import {
  nextjsPrompt,
  reactSetUpPrompt,
  uiSetUpPrompt,
} from "@/app/lib/stackprompts/prompts";
import { parser } from "@/app/utils/parser";
import prisma from "@/db/src/db";
import { Steps } from "@/types/stepsType";
import { createUserContent } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSideSession();

  if (!session) {
    return NextResponse.json({ success: false, message: "Unauthorized" },{ status: 403 });
  }

  const { prompt } = await req.json();

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [createUserContent(templatePrompt + prompt)],
    config: {
      maxOutputTokens: 200,
    },
  });

  const stack = response.text?.trim().toLowerCase();

  if (stack === "react") {
   
    const { projectId, steps } = await handleStackCreation(reactSetUpPrompt, session, prompt)

    return NextResponse.json({
      prompts: [
        uiSetUpPrompt,
        `Here is an artifact that contains all the files of the project visible to you.\n Consider the content of ALL files in the project.\n\n${reactSetUpPrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n - .gitignore\n - package.lock-json\n`,
        prompt
      ],
      projectId,
      steps: steps.steps
    });
  }

  if (stack === "next.js" || stack === "nextjs") {
    const { projectId, steps } = await handleStackCreation(nextjsPrompt, session, prompt)

    return NextResponse.json({
      prompts: [
        uiSetUpPrompt,
        `Here is an artifact that contains all the files of the project visible to you.\n Consider the content of ALL files in the project.\n\n${nextjsPrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n - .gitignore\n - package.lock-json\n`,
      ],
      projectId,
      steps: steps.steps
    });
  }

  return NextResponse.json({ message: "This stack is not supported as of now"}, { status: 403 });
}


async function handleStackCreation(stackPrompt: string, session: any, prompt: string) {
  return await prisma.$transaction(async (tx) => {
      const project = await tx.project.create({
        data: {
          userId: session.id,
          createdAt: new Date(),
        },
      });
      const parsedSteps: Steps[] = parser(stackPrompt);
      console.log(parsedSteps);
      
      const steps = await tx.steps.create({
        data: {
          projectId: project.id,
          steps: parsedSteps,
          createdAt: new Date()
        },
      });
      await tx.prompt.create({
        data: {
          projectId: project.id,
          originalPrompt: prompt,
          appPrompt: reactSetUpPrompt,
          createdAt: new Date(),
        },
      });
      return { projectId: project.id, steps }
  })
}
