'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./button";

export const AppBar = () => {
    const session = useSession();
    const user = session.data?.user
    return <div className="flex justify-between">
        <div>
            Strato.ai
        </div>
        <div>
            <Button classname="bg-white hover:bg-slate-50" onClick={user ? signOut : signIn}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}