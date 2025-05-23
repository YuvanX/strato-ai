import { LLMResponse } from "@/types/llmresponse";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLLMResponse = create<LLMResponse>()(
  persist(
    (set) => ({
      llm: "",
      setLLM: (response: string) => set({ llm: response }),
    }),
    { name: "llmrepsonse-store" }
  )
);
