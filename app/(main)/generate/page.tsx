import getServerSideSession from "@/app/lib/serversession";
import { Generate } from "@/components/ui/generate";
import { redirect } from "next/navigation";


export default async function() {
    const session = await getServerSideSession();
    if(!session) redirect('/')
        
    return <div className="w-full">
       <Generate/>
    </div>
}