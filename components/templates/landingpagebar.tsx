'use client'
import { redirect } from "next/navigation"
import { useEffect, useState } from "react"
import { ModeToogle } from "../modetoggle"
import { Button } from "../button"
import * as m from "motion/react-client";

export const LandingPageBar = () => {
     const [scroll, setScroll] = useState(false)

     useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
     }, [])


    return <m.div initial={{opacity: 0, y: -40}} animate={{opacity: 1, y: 0 }} exit={{opacity: 0, y: 0}} transition={{duration: 0.3, ease: "linear"}} className={`fixed flex justify-between items-center min-w-7xl rounded-full px-3 py-3 mt-5 ${scroll ? "bg-[#FAFAFA] dark:bg-[#191919]" : "bg-transparent border-transparent"} transition-all duration-300 z-50`}>
        <div className="flex gap-10 text-sm">
            <div className="font-semibold">Strato</div>
            <div>Pricing</div>
            <div>Blog</div>
            <div>Contact</div>
        </div>

        <div className="flex gap-3 items-center">
            <div><ModeToogle/></div>
            <Button classname="dark:text-white text-black" onClick={() => redirect('/auth')}>Login</Button>
            <Button classname="text-white bg-black rounded-r-full rounded-l-full px-4 border border-slate-600 shadow-md" onClick={() => redirect('/auth')}>Signup</Button>
        </div>

    </m.div>
}