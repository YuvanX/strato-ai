'use client'
import { useRouter } from "next/navigation";
import { Button } from "./button"
import { GoArrowLeft } from "react-icons/go";
export const NavigateButton = () => {
    const router = useRouter();

    return <Button className="bg-transparent  text-black dark:text-white  shadow-none border hover:text-white cursor-pointer" onClick={() => router.back()}>
        <GoArrowLeft size={18}/>
    </Button>
}