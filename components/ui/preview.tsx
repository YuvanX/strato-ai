'use client'

import { useState } from "react"
import { Button } from "./button"
import { FileBuilder } from "./file-builder"
import { Editor } from "./monaco-editor"
import { Separator } from "./separator"

export const Preview = () => {
    const [selectedFile, setSelectedFile] = useState<{ name: string, content: string } | null>(null)
    

    function handleFileSelect(fileData: { name: string, content: string }) {
        setSelectedFile(fileData)
    }

    return <div className="mx-5 border  h-full rounded-2xl ">
        <div className="flex gap-0.5  bg-slate-900 w-max rounded-full m-2">
            <Button className="text-white text-sm rounded-xl bg-transparent" onClick={() => ""}>Code</Button>
            <Button className="text-white text-sm rounded-xl bg-transparent" onClick={() => ""}>Preview</Button>
        </div>
        <Separator className="mt-2"/>
        
        <div className="grid grid-cols-12">
            <div className="col-span-3">
                <FileBuilder setSelectedFile={handleFileSelect}/>
            </div>
            <div className="col-span-9">
                <Editor key={selectedFile?.name}  value={selectedFile?.content || "default"} language={getLanguage(selectedFile?.name || "ts")} onChange={() => ""} />
            </div>
        </div>
    </div>
}


function getLanguage(filename: string): string {
    const extension = filename.split('.').pop()?.toLowerCase()
    switch(extension) {
        case "ts":
        case "tsx":
            return "typescript"
        case "js":
        case "jsx":
            return "javascript"
        case "css":
            return "css"
        case "json": 
            return "json"
        default:
            return "plaintext"
    }
}