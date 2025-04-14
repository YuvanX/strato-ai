"use client";
import { IoAdd } from "react-icons/io5";
import { Button } from "./button";
import { RecentPage } from "./recentpage";
import { Stats } from "./stats";
import { redirect } from "next/navigation";

export const DashBoard = () => {
  return (
    <div>
      <div className="text-3xl font-semibold">Dashboard</div>
      <div className="text-lg text-slate-600">
        Welcome back! Create and manage your AI-generated landing pages.
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-5">
        <Stats title="TOTAL PAGES" stats="4" />
        <Stats title="TOTAL DRAFTS" stats="3" />
        <Stats title="TOTAL PUBLISHED" stats="1" />
      </div>
      <Button
        classname="!w-60 flex items-center my-2 gap-2 text-black border hover:bg-black hover:text-white dark:text-white border-slate-700"
        onClick={() => redirect("/generate")}
      >
        <IoAdd size={18} />
        <div>Create new Landing Page</div>
      </Button>{" "}
      <div className="text-xl font-semibold mt-8 mb-4">
        Recent Landing Pages
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <RecentPage
          image="/landing.webp"
          title="Product launch landing page"
          content="High-converting landing page for our new software product launch."
          date="Created 15/09/2023"
        />
        <RecentPage
          image="/landing.webp"
          title="Product launch landing page"
          content="High-converting landing page for our new software product launch."
          date="Created 15/09/2023"
        />
        <RecentPage
          image="/landing.webp"
          title="Product launch landing page"
          content="High-converting landing page for our new software product launch."
          date="Created 15/09/2023"
        />
      </div>
    </div>
  );
};
