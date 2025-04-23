import { LuQuote } from "react-icons/lu";
import { Card } from "@/components/ui/card"; 

export const TestimonialCard = ({
  name,
  designation,
  description,
}: {
  name: string;
  designation: string;
  description: string;
}) => {
  return (
    <Card classname="!bg-background flex flex-col justify-between text-white cursor-pointer min-h-60  border rounded-xl hover:border-green-500 hover:border transition-all">
      <div>
        <div className="text-green-500 my-4 text-2xl"><LuQuote /></div>
        <i className=" font-medium text-lg">
          "This product completely transformed how our team collaborates. The
          intuitive interface made adoption painless across departments."
        </i>
      </div>
      <div>
        <div className="text-green-500 font-bold text-xl">Sarah Johnson</div>
        <div className="text-gray-400 text-sm">Product Manager at TechSolutions Inc.</div>
      </div>
    </Card>
  );
};
