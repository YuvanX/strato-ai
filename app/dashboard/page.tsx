import { AppBar } from "@/components/appbar";
import { DashBoard } from "@/components/dashboard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function() {
    
    const session = await getServerSession()
    if(!session?.user) {
        redirect("/auth")
    }

    return <div >
        {/* <SideBar username={session.user.name || "User"} email={session.user.email || "user@example.com"}/> */}
        <AppBar/>
        <div className="w-full px-10">

            <DashBoard/>
        </div>
    </div>
}