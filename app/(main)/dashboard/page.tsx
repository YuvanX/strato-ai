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
        <div className="w-full px-20">
            <DashBoard/>
        </div>
    </div>
}