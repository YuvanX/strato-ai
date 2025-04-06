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
        <Button onClick={toggleTheme}>{theme === "light" ? <RiMoonLine size={20}/> : <RiSunFill color="white" size={20}/>}</Button>
    </div>
}