import { placeHolderPhrases } from "@/app/utils/constants";
import { PromptInput } from "./promptinput";
import axios from "axios";

export const Generate = () => {

  return (
    <div className="flex justify-center items-center h-screen font-sans mx-3">
      <div className="w-[700px]">
        <div className="text-4xl md:text-6xl font-semibold mb-1  p-3   text-center">
          Create Your Landing Page with AI
        </div>
        <div className="textg-xs md:text-lg text-muted-foreground text-center  mb-10">
          Describe your business and let our AI design a landing page for you
        </div>
        <div>
          <PromptInput placeHolderPhrases={placeHolderPhrases} rows={5} />
        </div>
      </div>
    </div>
  );
};
