'use client'

import { Button } from "./button"
import { Editor } from "./monaco-editor"
import { Separator } from "./separator"

export const Preview = () => {
    return <div className="mx-5 border  h-full rounded-2xl ">
        <div className="flex gap-0.5  bg-slate-900 w-max rounded-full m-2">
            <Button className="text-white text-sm rounded-xl bg-transparent" onClick={() => ""}>Code</Button>
            <Button className="text-white text-sm rounded-xl bg-transparent" onClick={() => ""}>Preview</Button>
        </div>
        <Separator className="mt-2"/>
        <Editor  value="function helloWorld() { console.log('hello world')}" language="javascript" onChange={() => ""} />
    </div>
}