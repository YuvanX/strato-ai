import { RiArrowRightLine } from "react-icons/ri"

export const  HeroSection = () =>  {
    return <div className="mx-10 text-center">
        <div className="text-2xl lg:text-7xl font-sans font-medium">Your smartest AI assistant</div>
        <div className="text-2xl lg:text-7xl font-sans font-medium text-green-500">work faster and smarter</div>
        <div className="text-xs  lg:text-lg mt-5">
            Smarter sales, faster decisions: AI powered dashboard with <br/>call analytics, transcripts, summaries and more.
        </div>
        <div className="flex gap-10 mt-10 justify-center">
            <button className="flex gap-2 items-center px-5 py-3 bg-green-500 rounded-full">
                <div className="text-black font-medium text-xs">GET STARTED</div>
                <RiArrowRightLine color="black"/>
            </button>
            <button className="underline text-xs cursor-pointer">
                DISCOVER MORE
            </button>
        </div>
    </div>
}