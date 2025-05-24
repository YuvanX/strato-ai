import { Message } from "./chat";
import { FileSteps } from "./steps";
import { WebhookIcon } from "./webhook";

export const StratoMessageCard = ({ message }: { message: Message }) => {
  return (
    <div className="text-sm font-sans">
      <div className="flex items-center my-2">
          <WebhookIcon size={15} className="!bg-transparent"/>
          <div className="font-semibold font-sans">Strato</div>
      </div>
      <div>{message.initialText}</div>
      {message.title && <div>{message.title}</div>}
      <div>  <FileSteps steps={message.code}/></div>
      <div>{message.finalText}</div>
    </div>
  );
};
