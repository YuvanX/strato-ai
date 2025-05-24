import { Status } from "@/types/stepsType"
import { Spinner } from "./spinner"
import { MdDone } from "react-icons/md";

export const FileProcessor = ({ filename, status }: { filename: string, status: Status }) => {
    return <div className="flex gap-3 items-center my-3">
        <div>{status ===  Status.Pending ? <Spinner/> : <MdDone color="violet"/>}</div>
        <div className="text-sm">{filename}</div>
    </div>
}