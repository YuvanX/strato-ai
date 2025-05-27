import { placeHolderPhrases } from "@/app/utils/constants";
import { PromptInput } from "./promptinput";
import axios from "axios";

export const Generate = () => {

  return (
    <div className="flex justify-center items-center h-screen font-sans mx-3 ">
      <div className="w-[700px]">
        <div className="text-4xl md:text-5xl font-semibold mb-1  p-3 text-center">
          Speak the Idea, <span className="text-[#F44900]">Get the Site</span>
        </div>
        <div className="textg-xs md:text-lg text-muted-foreground text-center  mb-10">
          Describe your business, and our AI builds a complete website for you.
        </div>
        <div>
          <PromptInput placeHolderPhrases={placeHolderPhrases} rows={5} />
        </div>
      </div>
    </div>
  );
};
