'use client'
import { placeHolderPhrases } from "@/app/utils/constants";
import { PromptInput } from "./promptinput"
import { StratoMessageCard } from "./stratomsgcard";
import { UserMessageCard } from "./usermsgcard";
import { useLLMResponse } from "@/store/useLLMResponse";
import { parser } from "@/app/utils/parser";
import { Steps } from "@/types/stepsType";
import { useMemo } from "react";



export const Chat = () => {
  const llmResponse = useLLMResponse((state) => state.llm)
  const message = useMemo(() => parsedLLMResponse(llmResponse), [llmResponse])
  
    return <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {/* <UserMessageCard message="Hi there"/> */}
        <StratoMessageCard message={message}/>
      </div>
      <PromptInput className="z-50" rows={2} placeHolderPhrases={placeHolderPhrases} />
    </div>
}

function parsedLLMResponse(llmResponse: string) {
  const message: Message = {
    initialText: "",
    code: [],
    finalText: "",
    title: ""
  }

  const code = parser(llmResponse)
  const firstTextBlockIndex = llmResponse.indexOf('`')
  const firstTextBlock = llmResponse.substring(0, firstTextBlockIndex)
  const lastTextBlockIndex = llmResponse.lastIndexOf('`')
  const lastTextBlock = llmResponse.substring(lastTextBlockIndex + 1, llmResponse.length)
  const title = findTitle(llmResponse)
  message.initialText = firstTextBlock
  message.code = code
  message.finalText = lastTextBlock
  message.title = title
  return message
}

export interface Message {
  initialText: string;
  code: Steps[],
  finalText: string;
  title: string | null;
}

function findTitle(llmResponse: string) {
  const match = llmResponse.match(/<stratoArtifact\s+[^>]*id="([^"]+)"/)
  return match ? match[1] : null
}

