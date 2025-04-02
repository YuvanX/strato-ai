import clsx from "clsx"
import React from "react"
export const Card = ({ children, classname }: { children: React.ReactNode, classname?: string}) => {
    return <div className={clsx("p-4 rouned-md shadow-md bg-white text-black w-full", classname)}>
        { children }
    </div>
}