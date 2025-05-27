import prisma from "@/db/src/db";
import { registerType } from "@/types/registerType";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { validateEmail } from "@/app/utils/email";

export async function POST(req: NextRequest) {
    const { email, password, name } = await req.json()

    const { success } = registerType.safeParse({email, password, name})
    if(!success) return NextResponse.json({ success: false, message: "Invalid Inputs"}, { status: 400 })

    try {
        const isValidEmail = await validateEmail(email);
        if(!isValidEmail) {
            return NextResponse.json({ success: false, message: "Invalid Email" }, { status: 422 })
        }

        const user = await prisma.user.findUnique({
            where: {email}
        })
        if(user) {
            return NextResponse.json({success: false, message: "User with email already exists"}, { status: 409 })
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