"use client";

import { useSession } from "next-auth/react";
import { DropDown } from "./dropdown";
import { RiTwitterXLine } from "react-icons/ri";
import { ModeToogle } from "./modetoggle";
import { useEffect, useState } from "react";

export const AppBar = () => {
  const session = useSession();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`px-5 md:px-20 py-4 flex items-center justify-between w-full fixed z-50  ${
        scroll
          ? "bg-white/10 border-white/10 backdrop-blur-lg"
          : "bg-transparent border-transparent"
      } transition-all duration-300`}
    >
      <div className="text-2xl font-semibold font-sans">Strato</div>
      <div className="flex gap-5 items-center font-sans">
        <div>
          <RiTwitterXLine size={20} />
        </div>
        <div>
          <ModeToogle />
        </div>
        <div>
          <DropDown user={session.data?.user?.name || "User"} />
        </div>
      </div>
    </div>
  );
};
