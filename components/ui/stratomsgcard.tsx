import { WebhookIcon } from "./webhook";

export const StratoMessageCard = ({ message }: { message: string }) => {
  return (
    <div className="text-sm">
      <div className="flex items-center my-2">
          <WebhookIcon size={15} className="!bg-transparent"/>
          <div className="font-semibold font-sans">Strato</div>
      </div>
      {message}
    </div>
  );
};
