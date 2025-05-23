'use client'
import { useStepStore } from "@/store/useStepStore"
import { FileProcessor } from "./fileprocessor"
import { Steps } from "@/types/steps"

export const FileSteps =  () => {
    const steps: Steps[] = useStepStore((state) => state.steps)
    
    return <div className="flex flex-col">
        {steps && steps.map((s) => <FileProcessor key={s.id} filename={s.title} status={s.status}/>)}
    </div>
}