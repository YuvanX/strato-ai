"use client";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import {  AnimatePresence, motion } from "motion/react"
export const NavBar = ({
  logo,
  children,
}: {
  logo: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-col items-center fixed top-0 mt-6 z-50 w-full">
      <div className="flex justify-between px-4 py-3 bg-white/10 border-white/20 backdrop-blur-lg  items-center rounded-full w-[90%] md:w-[80%]">
        <div className="pl-3 md:pl-10 font-extrabold text-xl md:text-4xl font-anton cursor-pointer font-anton">
          {logo.toUpperCase()}
        </div>
        <div className="hidden md:flex  gap-20 items-center font-thin cursor-pointer">
          {children}
        </div>
        <div className="hidden md:flex items-center gap-6">
          <div className="font-medium cursor-pointer">Login</div>
          <button className="px-3 py-3 font-semibold bg-white rounded-full text-black text-sm cursor-pointer">
            GET STARTED
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen((c) => !c)}>
            {isOpen ? <IoMdClose /> : <IoIosMenu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div initial={{opacity: 0, y: -10, scale: 0.95}} animate={{opacity: 1, y: 0, scale: 1}} exit={{opacity: 0, y: -10, scale: 0.95}} className="md:hidden mt-3 flex flex-col font-thin items-center w-[90%] bg-white/10 border-white/10 backdrop-blur-lg rounded-xl p-4">
          <div className="flex flex-col gap-3 items-center cursor-pointer">
            {children}
            <div className="font-medium cursor-pointer">Login</div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};
