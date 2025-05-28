import { Steps } from "./stepsType";

export type Message = {
    id: string;
    role: 'USER' | 'AI';
    message: string;
    steps?: Steps[]

}

export type ChatType = {
    chat: Message[];
    addToChat: (message: Message) => void;
    setChat: (messages: Message[]) => void;
}