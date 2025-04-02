import prisma from "@/db/src/db";
import bcrypt from "bcryptjs";
import { credentialsType } from "@/types/authtype";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";



export const authOptions: NextAuthOptions = {
  providers: [
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    Credentials({
        credentials: {
            email: { label: "Email", type: "text", placeholder: "Enter email" },
            password: { label: "Password", type: "password", placeholder: "Enter password" },
            name: { label: "Name", type: "text", placeholder: "Enter your name"},
            isSignUp: { label: "Is Signup", type: "text"}
        },
        async authorize(credentials, req) {
            
            if(!credentials) return null;


            const { success } = credentialsType.safeParse(credentials);
            if (!success) return null;


            let user = await prisma.user.findUnique({
            where: {
                email: credentials?.email,
            },
            });

            if (!user && credentials.name && credentials.isSignUp === "true") {
                const hashedPassword = await bcrypt.hash(credentials.password, 10);
                user = await prisma.user.create({
                    data: {
                    email: credentials.email,
                    password: hashedPassword,
                    name: credentials.name,
                    provider: "CREDENTIALS",
                    createdAt: new Date(),
                    },
                });

                return {
                    id: user.id,
                    name: user?.name,
                    email: user.email
                };
            }

            if(user && user.password) {
                const isValidPassword = await bcrypt.compare(credentials.password, user.password);
                if(!isValidPassword) return null

                return {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }
            }

            return null
        },
    }),
    
  ],
  callbacks: {
    async signIn({user, account}: any){
        if(account?.provider == "google") {
            let googleUser = await prisma.user.findUnique({
                where: {
                    email: user?.email
                }
            })

            if(!googleUser) {
               googleUser =  await prisma.user.create({
                    data: {
                        email: user.email,
                        provider: "GOOGLE",
                        name: user.name,
                        createdAt: new Date()
                    }
                })
                return true
            }

            return true;
        }
    },
    async jwt({token, user}: any) {
        if(user) {
            token.id = user.id
        }

        return token
    },

    async session({session, token, user}: any) {
        session.user.id = token.id
        return session
    },
    async redirect({url, baseUrl}: any) {
        if(url.startsWith(baseUrl)) {
            return url
        }
        return baseUrl
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt"},
  pages: {
    signIn: "/auth",
  }
};
