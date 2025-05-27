"use client";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GoArrowRight } from "react-icons/go";
import * as m from "motion/react-client";

export const HeroSection = () => {
  return (
    <div className="text-center pt-50 max-w-6xl">
      <m.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="text-3xl text-[#FF7900] dark:text-[#DE4300] md:text-6xl xl:text-8xl font-semibold"
      >
        Your Website, Built by AI. No Code. No Hassle.
      </m.div>
      <m.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="max-w-2xl text-muted-foreground mx-auto text-sm md:text-lg my-5 leading-relaxed"
      >
        Generate professional websites by simply telling us what you want.
        Perfect for startups, creators, and businesses looking to launch fast.
      </m.div>

      <m.div
        initial={{ opacity: 0, y: 90 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="flex gap-4 justify-center items-center"
      >
        <Button
          className="!w-30 text-white   rounded-r-full rounded-l-full px-4 border shadow-md cursor-pointer"
          onClick={() => redirect("/signup")}
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
