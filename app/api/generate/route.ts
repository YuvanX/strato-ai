import { CONTENT } from "@/app/lib/content";
import prisma from "@/db/src/db";
import { promptType } from "@/types/prompttype";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const token = await getToken({ req });

  if (!token)
    return NextResponse.json(
      { sucess: false, message: "Unauthorized" },
      { status: 401 }
    );

  const { prompt } = await req.json();
  const { success } = promptType.safeParse({ prompt });

  if (!success)
    return NextResponse.json(
      { success: false, message: "Invalid Inputs" },
      { status: 411 }
    );

  try {
    const aiResponse = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mistralai/mistral-7b-instruct",
          messages: [
            {
              role: "system",
              content: CONTENT,
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await aiResponse.json();
    const content =
      data.choices?.[0]?.message?.content || "No content generated.";
    let structuredContent: any;

    try {
      structuredContent = JSON.parse(content);
    } catch (err) {
      return NextResponse.json(
        { success: false, message: "unstructred response" },
        { status: 500 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        email: token.email!,
      },
    });

    if (!user)
      return NextResponse.json(
        { success: false, message: "Invalid user" },
        { status: 404 }
      );

    const page = await prisma.page.create({
      data: {
        userId: user.id,
        content: structuredContent,
        prompt,
        createdAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Page created successfully",
      pageId: page.id,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Server Error" },
      { status: 500 }
    );
  }
};
