import { Status } from "@/types/steps"
import { Spinner } from "./spinner"
import { MdDone } from "react-icons/md";

export const FileProcessor = ({ filename, status }: { filename: string, status: Status }) => {
    return <div className="flex gap-3 items-center m-2">
        <div>{status ===  Status.Pending ? <Spinner/> : <MdDone color="violet"/>}</div>
        <div>{filename}</div>
    </div>
}