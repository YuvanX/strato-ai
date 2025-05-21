import NextAuth from "next-auth"
import { authenticationOptions } from "@/app/lib/authOptions"
 
 const  handlers = NextAuth(authenticationOptions)

 export { handlers as GET, handlers as POST }