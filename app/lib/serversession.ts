import { getServerSession } from "next-auth";
import { authenticationOptions } from "./authOptions";

export default async function getServerSideSession() {
    const session = await getServerSession(authenticationOptions);
    return session?.user;
}