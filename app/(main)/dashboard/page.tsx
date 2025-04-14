import { DashBoard } from "@/components/dashboard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function() {
    
    const session = await getServerSession()
    if(!session?.user) {
        redirect("/auth")
    }

    return <div className="w-full px-5 md:px-20 pt-30">
            <DashBoard/>
        </div>

}