"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { RiArrowRightLine } from "react-icons/ri";

export const PromptInput = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [placeHolder, setPlaceHolder] = useState("");
  const [placeHolderIndex, setPlaceHolderIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const placeHolderPhrases = [
    "Write a landing page for an AI tool...",
    "Describe a product that helps with productivity...",
    "Generate copy for a SaaS website...",
    "Create a pitch for a startup idea...",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    autoScale();
  };

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
        setTimeout(() => setDeleting(true), 1500); // pause before delete
      }

      if (deleting && placeHolder === "") {
        setDeleting(false);
        setPlaceHolderIndex((prev) => (prev + 1) % placeHolderPhrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [placeHolder, placeHolderIndex, deleting]);

  return (
    <div className="border shadow-sm  dark:border-slate-600 bg-white text-black dark:bg-[#27272a] dark:text-white p-4 rounded-xl">
      <textarea
        ref={textAreaRef}
        value={prompt}
        placeholder={placeHolder}
        className="w-full outline-none resize-none "
        onChange={handleChange}
        rows={5}
      />
      <div className="flex justify-end">
            <Button classname="text-slate-500 dark:text-black flex items-center justify-center dark:bg-white bg-gray-200 !w-10" onClick={() => ""}>
                <RiArrowRightLine/>
            </Button>
      </div>
    </div>
  );
};
