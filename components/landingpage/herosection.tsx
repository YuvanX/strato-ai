"use client";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button"
import { GoArrowRight } from "react-icons/go";
import * as m from "motion/react-client";

export const HeroSection = () => {
  return (
    <div className="text-center pt-50 max-w-6xl">
      <m.div initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeIn"}} className="text-3xl md:text-6xl xl:text-8xl font-semibold">
        Generate Your Landing Just with a Prompt
      </m.div>
        <m.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeIn"}} className="max-w-2xl text-muted-foreground mx-auto text-sm md:text-lg my-5 leading-relaxed">
          Everything AI seamlessly integrated all the modern AI generation tools
          into one platform so that you can generate content with a single
          click.
        </m.div>

      <m.div initial={{opacity: 0, y: 90}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeIn"}} className="flex gap-4 justify-center items-center">
        <Button
          className="!w-30 text-white bg-gray-900  rounded-r-full rounded-l-full px-4 border border-slate-600 shadow-md"
          onClick={() => redirect("/auth")}
        >
          Get Started
        </Button>
        <div className="flex gap-2 items-center text-xs md:text-sm">
          <div>Contact us</div>
          <GoArrowRight />
        </div>
      </m.div>
    </div>
  );
};
