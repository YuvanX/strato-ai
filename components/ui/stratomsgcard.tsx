import { Steps } from "@/types/stepsType";
import { FileSteps } from "./steps";



export const StratoMessageCard = ({ message, steps }: { message: string, steps: Steps[] }) => {
  const parsedMessage = parsedLLMResponse(message)

  return (
    <div className="text-sm font-sans m-4">
      <div>{parsedMessage.initailText}</div>
      {steps && <FileSteps steps={steps}/>}
      <div>{parsedMessage.finalText}</div>
    </div>
  );
};

function parsedLLMResponse(message: string) {
  const msg = {
    initailText: "",
    finalText: ""
  }
  const index1 = message.indexOf('`')
  msg.initailText = message.substring(0, index1)

  const index2 = message.lastIndexOf('`')
  msg.finalText = message.substring(index2 + 1, message.length)

  return msg
}
