import { UserPrompt } from "@/types/userPrompt";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserPrompt = create<UserPrompt>()(
  persist(
    (set) => ({
      userPrompt: "",
      setUserPrompt: (message: string) => set({ userPrompt: message }),
    }),
    { name: "user-prompt" }
  )
);
