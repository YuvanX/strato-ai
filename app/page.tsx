import { getServerSession } from "next-auth";
import { authOptions } from "./lib/authOptions";
import { redirect } from "next/navigation";

export default async function () {
  const session = await getServerSession(authOptions);

  if (session?.user) redirect("/home");
  else redirect("/auth");
}
