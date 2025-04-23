import clsx from "clsx"

export const Avatar = ({ classname, children, text }: { classname?: string, children?: React.ReactNode, text: string }) => {
    return <div className={clsx("flex  flex-col items-center", classname)}>
        <div className="flex items-center bg-[#27272A] w-10 h-10 rounded-full   justify-center">{text}</div>
        <div className=" text-xs mt-1">{children}</div>
    </div>
}