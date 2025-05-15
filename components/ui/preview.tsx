'use client'
import { Button } from "./button"

export const Preview = () => {
    return <div className="mx-5 border  h-full rounded-2xl">
        <div className="flex gap-2 m-1">
            <Button classname="text-white text-xs !w-20 rounded-xl bg-[#272727]" onClick={() => ""}>Code</Button>
            <Button classname="text-white text-xs !w-20  rounded-xl bg-[#272727]" onClick={() => ""}>Preview</Button>
        </div>
    </div>
}