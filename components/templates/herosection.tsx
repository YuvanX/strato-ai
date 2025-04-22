"use client";
import { redirect } from "next/navigation";
import { Button } from "../button";
import { GoArrowRight } from "react-icons/go";

export const HeroSection = () => {
  return (
    <div className="text-center pt-50 max-w-6xl">
      <div className="text-8xl font-semibold">
        Generate Your Landing Just with a Prompt
      </div>
        <div className="max-w-2xl text-muted-foreground mx-auto text-lg my-5 leading-relaxed">
          Everything AI seamlessly integrated all the modern AI generation tools
          into one platform so that you can generate content with a single
          click.
        </div>

      <div className="flex gap-4 justify-center items-center">
        <Button
          classname="!w-30 text-white bg-gray-900  rounded-r-full rounded-l-full px-4 border border-slate-600 shadow-md"
          onClick={() => redirect("/auth")}
        >
          Get Started
        </Button>
        <div className="flex gap-2 items-center text-sm">
          <div>Contact us</div>
          <GoArrowRight />
        </div>
      </div>
    </div>
  );
};
