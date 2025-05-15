'use client'
import { parser } from "@/app/utils/parser"
import { useUIStore } from "@/store/uistore"
import { FileProcessor } from "./fileprocessor"

export const Steps = () => {
    const prompt = useUIStore((state) => state.uiPrompt)
    const steps = parser(prompt)    
    return <div className="flex flex-col">
        {steps && steps.map((s => <FileProcessor filename={s.title} status={s.status} key={s.id}/>))}
    </div>
}