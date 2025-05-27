'use client'
import { useTheme } from "next-themes"
import { Button } from "./button"
import { RiMoonLine, RiSunFill } from "react-icons/ri"
import { useEffect, useState } from "react"

export const ModeToogle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return <div>
        <Button className="bg-transparent hover:bg-transparent shadow-none cursor-pointer" onClick={toggleTheme}>{theme === "light" ? <RiMoonLine className="text-[#FF7900]" size={20}/> : <RiSunFill className="text-[#de4300]" size={20}/>}</Button>
    </div>
}