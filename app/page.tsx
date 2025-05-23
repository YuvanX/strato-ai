import { LandingPage } from "@/components/landingpage/landingpage";
import getServerSideSession from "./lib/serversession";
import { redirect } from "next/navigation";

export default async function () {
  const session = await getServerSideSession();
  if(session) redirect('/generate')
  return <div>
    <LandingPage/>
  </div>
}
