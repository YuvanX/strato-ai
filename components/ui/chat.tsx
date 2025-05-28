"use client";
import { placeHolderPhrases } from "@/app/utils/constants";
import { PromptInput } from "./promptinput";
import { StratoMessageCard } from "./stratomsgcard";
import { UserMessageCard } from "./usermsgcard";
import { useLLMResponse } from "@/store/useLLMResponse";
import { parser } from "@/app/utils/parser";
import { Steps } from "@/types/stepsType";
import { useMemo } from "react";

import { useChat } from "@/store/useChat";

export const Chat = () => {
  
  const chat = useChat((state) => state.chat);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {chat.map((c) =>
          c.role === "AI" ? (
            <StratoMessageCard
              key={c.id}
              message={c.message}
              steps={c.steps || []}
            />
          ) : (
            <UserMessageCard key={c.id} message={c.message} />
          )
        )}
      </div>
      <PromptInput
        className="z-50"
        rows={2}
        placeHolderPhrases={placeHolderPhrases}
      />
    </div>
  );
};
