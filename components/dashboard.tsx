'use client'
import { IoAdd } from "react-icons/io5"
import { Button } from "./button"
import { RecentPage } from "./recentpage"
import { Stats } from "./stats"
import { redirect } from "next/navigation"

export const DashBoard = () => {
    return <div className="my-5">
        <div className="text-3xl font-semibold">Dashboard</div>
        <div className="text-lg text-slate-600">Welcome back! Create and manage your AI-generated landing pages.</div>
        <div className="flex gap-5">
            <Stats title="TOTAL PAGES" stats="4"/>
            <Stats title="TOTAL PAGES" stats="4"/>
            <Stats title="TOTAL PAGES" stats="4"/>
        </div>
        <Button classname="!w-60 flex items-center gap-2  text-white bg-black border border-slate-700 hover:bg-white hover:text-black" onClick={() => redirect('/generate')}>
            <IoAdd size={18} />
            <div>Create new Landing Page</div>
        </Button> {/*here*/}
        <div className="text-xl font-semibold mt-8 mb-4">Recent Landing Pages</div>
        <div className="flex gap-5">
            <RecentPage image="/landing.webp" title="Product launch landing page" content="High-converting landing page for our new software product launch." date="Created 15/09/2023"/>

            <RecentPage image="/landing.webp" title="Product launch landing page" content="High-converting landing page for our new software product launch." date="Created 15/09/2023"/>
            <RecentPage image="/landing.webp" title="Product launch landing page" content="High-converting landing page for our new software product launch." date="Created 15/09/2023"/>
            
        </div>
    </div>
}