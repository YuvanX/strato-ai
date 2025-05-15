import { placeHolderPhrases } from "@/app/utils/constants";
import { PromptInput } from "./promptinput"
import { StratoMessageCard } from "./stratomsgcard";
import { UserMessageCard } from "./usermsgcard";
import { Steps } from "./steps";

export const Chat = () => {
    return <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <UserMessageCard message="Hi there"/>
        <StratoMessageCard message="Namaskaram"/>
        <Steps/>
      </div>
      <PromptInput classname="z-50" rows={2} placeHolderPhrases={placeHolderPhrases} />
    </div>
}