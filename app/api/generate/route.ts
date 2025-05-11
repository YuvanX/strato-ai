import { anthropic } from "@/app/lib/llm/anthropic";
import { findStack } from "@/app/lib/llm/findstack";
import getServerSideSession from "@/app/lib/serversession";
import {
  finalPrompt,
  nextjsPrompt,
  reactSetUpPrompt,
  uiSetUpPrompt,
} from "@/app/lib/stackprompts/prompts";
import { promptType } from "@/types/prompttype";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const session = await getServerSideSession();
  if (!session)
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 400 }
    );

  const { prompt } = await req.json();

  const { success } = promptType.safeParse(prompt);
  if (!success)
    return NextResponse.json(
      { success: false, message: "Invalid Prompt" },
      { status: 403 }
    );

  const stack = await findStack(prompt);

  const message = anthropic.messages.stream({
    model: "claude-3-7-sonnet-20250219",
    max_tokens: 8000,
    messages: [{
        role: "user",
        content: `${stack === "react" ? reactSetUpPrompt : nextjsPrompt}`,
      },
      {
        role: "user",
        content: uiSetUpPrompt,
      },
      {
        role: "user",
        content: `${prompt} ${finalPrompt}`,
      },
    ],
  });
  console.log(message);
  return NextResponse.json({
      success: true,
      message,
    },
    { status: 200 }
  );
};
