"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { RiArrowRightLine } from "react-icons/ri";
import { redirect, usePathname } from "next/navigation";
import { useUIStore } from "@/store/uistore";
import { parser } from "@/app/utils/parser";
import { Steps } from "@/types/steps";
import { useStepStore } from "@/store/stepstore";
import axios from "axios";
import clsx from "clsx";
import prisma from "@/db/src/db";


export const PromptInput = ({
  classname,
  rows,
  placeHolderPhrases,
}: {
  classname?: string;
  rows: number;
  placeHolderPhrases: string[];
}) => {
  
  const [input, setInput] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");
  const [placeHolderIndex, setPlaceHolderIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const pathName = usePathname()

  

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    autoScale();
  };

  async function init() {

    const response = await axios.post('/api/template', {
      prompt: input,
      redirect: false
    })
    
    const { prompts, uiPrompt } = response.data
    
    useUIStore.getState().setUIPrompt(uiPrompt[0])
    
    const result: string = await axios.post('/api/generate', {
      prompt: prompts,
      redirect: false
    })

    const parsedSteps: Steps[] = parser(result);
    parsedSteps.map((step => useStepStore().addStep(step)))

    redirect('/chat')
  }

  async function chat() {
    const response = await axios.post('/api/generate', {
      prompt: input
    })
  }
  
  const handleRequest = () => {
    if(pathName === "/generate") {
      init()
    } else if(pathName === "/chat") {
      chat()
    }
  }
  
  const autoScale = () => {
    const textarea = textAreaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  useEffect(() => {
    autoScale();
  }, []);

  useEffect(() => {
    const currentPhrase = placeHolderPhrases[placeHolderIndex];

    const typingSpeed = deleting ? 30 : 80;

    const timeout = setTimeout(() => {
      setPlaceHolder((prev) =>
        deleting
          ? currentPhrase.substring(0, prev.length - 1)
          : currentPhrase.substring(0, prev.length + 1)
      );

      if (!deleting && placeHolder === currentPhrase) {
        setTimeout(() => setDeleting(true), 1500);
      }

      if (deleting && placeHolder === "") {
        setDeleting(false);
        setPlaceHolderIndex((prev) => (prev + 1) % placeHolderPhrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [placeHolder, placeHolderIndex, deleting]);

  return (
    <div
      className={clsx(
        "border shadow-sm  dark:border-slate-600 bg-white text-black dark:bg-[#27272a] dark:text-white p-4 rounded-xl",
        classname
      )}
    >
      <textarea
        ref={textAreaRef}
        value={input}
        placeholder={placeHolder}
        className="w-full outline-none resize-none "
        onChange={handleChange}
        rows={rows}
      />
      <div className="flex justify-end">
        <Button
          classname="text-slate-500 dark:text-black flex items-center justify-center dark:bg-white bg-gray-200 !w-10"
          onClick={handleRequest}
        >
          <RiArrowRightLine />
        </Button>
      </div>
    </div>
  );
};
