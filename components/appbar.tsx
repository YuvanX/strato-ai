'use client'

import { useSession } from "next-auth/react"
import { DropDown } from "./dropdown"
import { RiTwitterXLine } from "react-icons/ri"
import { ModeToogle } from "./modetoggle"

export const AppBar = () => {
    const session = useSession()

    return <div className="px-20 py-4 flex items-center justify-between w-full">
        <div className="text-2xl font-semibold font-sans">
            Strato
        </div>
        <div className="flex gap-5 items-center font-sans">
            <div>
            <RiTwitterXLine size={20} />
            </div>
            <div>
                <ModeToogle/>
            </div>
            <div>
                <DropDown user={session.data?.user?.name || "User"}/>
            </div>
        </div>
    </div>
}