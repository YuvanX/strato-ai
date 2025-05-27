import { Steps } from "@/types/stepsType";
import { Message } from "./chat";
import { FileSteps } from "./steps";
import { WebhookIcon } from "./webhook";

export const StratoMessageCard = ({ message, steps }: { message: Message, steps: Steps[] }) => {
  return (
    <div className="text-sm font-sans">
      <div>{message.initialText}</div>
      {message.title && <div>{message.title}</div>}
      <div>  <FileSteps steps={steps}/></div>
      <div>{message.finalText}</div>
    </div>
  );
};
