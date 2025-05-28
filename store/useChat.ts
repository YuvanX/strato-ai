import { ChatType, Message } from "@/types/chatType";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useChat = create<ChatType>()(
  persist(
    (set) => ({
      chat: [],
      addToChat: (message: Message) =>
        set((state) => ({ chat: [...state.chat, message] })),
      setChat: (messages: Message[]) => set({ chat: messages }),
    }),
    { name: "chat-store" }
  )
);
