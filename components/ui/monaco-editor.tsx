'use client'

import { MonacoEditorProps } from "@/types/monacoPropsType"
import dynamic from "next/dynamic"
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false })


export const Editor = ({ value, language, onChange }: MonacoEditorProps) => {
    return <div className="rounded-b-2xl overflow-hidden">
        <MonacoEditor height={810}  defaultLanguage={language} defaultValue={value} theme="vs-dark" onChange={onChange}/>
    </div>
}