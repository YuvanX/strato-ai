import prisma from "@/db/src/db";
import Credentials from "next-auth/providers/credentials";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Google from "next-auth/providers/google";


export const authenticationOptions = {
    providers: [
         Google({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: {label: "Email", placeholder: "Enter your email", type: "text"},
                password: { label: "Password", placeholder: "Enter your password", type: "password"}
            },
            async authorize(credentials: any, req) {

                if(!credentials) throw new Error("No credentials provided!")

                const { email, password } = credentials;
                const user = await prisma.user.findUnique({ where: email })
                if(!user) throw new Error("Create an account")
                
                if(user && user.password) {
                    const isValidPassword = bcrypt.compare(password, user.password)
                    if(!isValidPassword) throw new Error("Incorrect password provided")

                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                }

                return null
            },
        })
    ],
    callbacks: {
        async signIn({ user, account }: any) {
            if(account && account.provider !== 'credentials') {
                try {
                    const existingUser = await prisma.user.findUnique({ where: { email: user.email }, include: { accounts: true }})
                    if(existingUser) {
                        const existingAccount = existingUser.accounts.find((acc) => acc.provider === account.provider)

                        if(!existingAccount) {
                            await prisma.account.create({
                                data: {
                                    userId: existingUser.id,
                                    type: account.type,
                                    provider: account.provider,
                                    providerAccountId: account.providerAccountId,
                                    access_token: account.access_token,
                                    token_type: account.token_type,
                                    refresh_token: account.refresh_token,
                                    expires_at: account.expires_at,
                                    scope: account.scope,
                                    id_token: account.id_token,
                                    session_state: account.session_state,
                                }
                            })
                        }

                        if(!existingUser.image && user.image) {
                            await prisma.user.update({ where: {id: existingUser.id }, data: {image: user.image}})
                        }
                        user.id = existingUser.id  
                    }
                } catch(e) {
                    console.log(e);
                    return true;
                }
            }
            return true;
        },
        async jwt({ token, user }: any) {
            if(user) {
                token.id = user.id
            }

            return token;
        },
        async session({ session, token }: any) {
            if(session.user) {
                session.user.id = token.id 
            }
            return session
        },
        async redirect({ url, baseUrl }: any){
            if(url.startsWith(baseUrl)) {
                return url
            }
            return baseUrl
        }
    },
    pages: {
        signIn: "/signin"
    },
}