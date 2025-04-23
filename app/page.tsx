
import { LandingPage } from "@/components/templates/template1/landingpage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function () {
  const session = await getServerSession();
  if(session?.user) redirect('/generate')
    return <div>
    <LandingPage/>
  </div>
}

