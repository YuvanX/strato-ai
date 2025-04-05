import clsx from "clsx"

export const Select = ({classname, children, label, id, name}: { classname?: string, children: React.ReactNode, label: string, id: string,  name: string}) => {
    return <div className="flex flex-col my-2">
            <label className="text-sm mb-2 font-semibold" htmlFor={id}>{label}</label>
            <select className={clsx("px-2 py-2 outline-none rounded-xl border bg-black text-white", classname)} id={id} name={name}>
                {children}
            </select>
    </div>
}