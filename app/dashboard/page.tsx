import { AppBar } from "@/components/appbar";
import { DashBoard } from "@/components/dashboard";
import { SideBar } from "@/components/sidebar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function() {
    
    const session = await getServerSession()
    if(!session?.user) {
        redirect("/auth")
    }

    return <div className="flex">
        <SideBar username={session.user.name || "User"} email={session.user.email || "user@example.com"}/>
        <div className="w-full mx-30">

            <DashBoard/>
        </div>
    </div>
}