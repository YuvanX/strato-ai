import { UIPrompt } from "@/types/uipromptstore";
import { create } from "zustand";

export const useUIStore = create<UIPrompt>((set) => ({
    uiPrompt: "",
    setUIPrompt: (prompt) => set({uiPrompt: prompt})
}))