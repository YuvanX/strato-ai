"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { ModeToogle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import * as m from "motion/react-client";
import { MenuIcon } from "@/components/ui/menu";
import { AnimatePresence } from "motion/react";
import { WebhookIcon } from "@/components/ui/webhook";

export const LandingPageBar = () => {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <m.div
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "linear" }}
        className={`fixed flex justify-between items-center min-w-full md:min-w-7xl rounded-full px-3 py-3 mt-5 ${
          scroll
            ? "bg-[#FAFAFA] dark:bg-[#191919]"
            : "bg-transparent border-transparent"
        } transition-all duration-300 z-50`}
      >
        <div className="font-semibold flex gap-2 items-center">
          <WebhookIcon className="!bg-transparent"/>
          <div>Strato</div>
        </div>
        <div className="lg:hidden flex items-center">
          {open && (
            <AnimatePresence>
              <m.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
              >
                <ModeToogle />
              </m.div>
            </AnimatePresence>
          )}
          <MenuIcon onClick={() => setOpen((c) => !c)} />
        </div>

        <div className="hidden lg:flex gap-3 items-center">
          <div>
            <ModeToogle />
          </div>
          <Button
            className="dark:text-white text-black bg-transparent"
            onClick={() => redirect("/auth")}
          >
            Login
          </Button>
          <Button
            className="text-white bg-black rounded-r-full rounded-l-full px-4 border border-slate-600 shadow-md"
            onClick={() => redirect("/auth")}
          >
            Signup
          </Button>
        </div>
      </m.div>
      {open && (
        <div className="z-20 fixed top-25 h-screen bg-white dark:bg-black w-full lg:hidden">
          <Button
            className="dark:text-white text-black"
            onClick={() => redirect("/auth")}
          >
            Login
          </Button>
          <Button
            className="text-white bg-black rounded-r-full  rounded-l-full  border border-slate-600 shadow-md"
            onClick={() => redirect("/auth")}
          >
            Signup
          </Button>
        </div>
      )}
    </>
  );
};
