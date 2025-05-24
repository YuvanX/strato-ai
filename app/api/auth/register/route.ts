import prisma from "@/db/src/db";
import { registerType } from "@/types/registerType";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
    const { email, password, name } = await req.json()

    const { success } = registerType.safeParse({email, password, name})
    if(!success) return NextResponse.json({ success: false, message: "Invalid Inputs"}, { status: 411 })

    try {
        const user = await prisma.user.findUnique({
            where: {email}
        })
        if(user) {
            return NextResponse.json({success: false, message: "User with email already exists"}, { status: 403 })
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const registerUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name
            }
        })

        const { password: _, ...userWithOutPassword} = registerUser

        return NextResponse.json({ success: true, message: "Created a user", user: userWithOutPassword}, { status: 200 })
    } catch(error) {
        return NextResponse.json({ success: false, message: "Unable to create a user"}, { status: 500 })
    }
} 