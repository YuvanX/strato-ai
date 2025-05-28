"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { RiArrowRightLine } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import clsx from "clsx";
import { useChat } from "@/store/useChat";
import { parser } from "@/app/utils/parser";



export const PromptInput = ({
  className,
  rows,
  placeHolderPhrases,
}: {
  className?: string;
  rows: number;
  placeHolderPhrases: string[];
}) => {
  
  const [input, setInput] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");
  const [placeHolderIndex, setPlaceHolderIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const pathName = usePathname()
  const router = useRouter()

  const addToChat = useChat((state) => state.addToChat)


  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    autoScale();
  };

  async function init() {

  
    const response = await axios.post('/api/template', {
      prompt: input,
      redirect: false
    })
    
    const { prompts, steps, projectId } = response.data
    addToChat({ id: `msg-${Date.now()}` ,role: 'USER', message: input })
    addToChat({id: `msg-${Date.now()}`, role: 'AI', message: "OK I will setup the initial Project", steps: steps})

    
    const result = await axios.post('/api/generate', {
      prompt: prompts,
      projectId,
      redirect: false
    })

    const { llmResponse } = result.data
    const extraSteps = parser(llmResponse)
    addToChat({ id: `msg-${Date.now()}`, role: 'AI', message: llmResponse, steps: extraSteps })
   
    router.push(`/chat/${projectId}`)
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
        "border shadow-sm  dark:border-1 bg-white text-black dark:bg-card dark:text-white p-4 rounded-xl",
        className
      )}
    >
      <textarea
        ref={textAreaRef}
        value={input}
        placeholder={placeHolder}
        className="w-full outline-none resize-none bg-card"
        onChange={handleChange}
        rows={rows}
      />
      <div className="flex justify-end">
        <Button
         
          onClick={handleRequest}
        >
          <RiArrowRightLine />
        </Button>
      </div>
    </div>
  );
};
