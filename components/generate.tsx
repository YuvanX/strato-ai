import { PromptInput } from "./promptinput";

export const Generate = () => {
  return (
    <div className="flex justify-center items-center h-screen font-sans mx-3">
      <div className="w-[700px]">
        <div className="text-4xl md:text-6xl font-semibold mb-1  p-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 opacity-90 transition  duration-200  text-center">
          Create Your Landing Page with AI
        </div>
        <div className="textg-xs md:text-lg text-slate-600 text-center  mb-10">
          Describe your business and let our AI design a landing page for you
        </div>
        <div>
          <PromptInput />
        </div>
      </div>
    </div>
  );
};
