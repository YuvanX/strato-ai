'use client'
import clsx from "clsx"

export const Button = ({ children, classname, onClick }: { children: React.ReactNode, classname?: string, onClick: () => void}) => {

    return <button onClick={onClick} className={clsx("w-full bg-white hover:bg-black text-black px-2 py-2 rounded-md text-sm font-[600] cursor-pointer", classname)}>
        {children}
    </button>
}