import { Chat } from "@/components/ui/chat";
import { Preview } from "@/components/ui/preview";


export default function() {
   
  return (
    <div className="grid grid-cols-12 pt-18 pb-5 px-5 h-screen">
      <div className="col-span-4 h-full">
        <Chat />
      </div>
      <div className="col-span-8">
        <Preview />
      </div>
    </div>
  );
}
