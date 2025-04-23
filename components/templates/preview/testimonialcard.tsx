import { LuQuote } from "react-icons/lu";
import { Card } from "@/components/ui/card"; 

export const TestimonialCard = ({
  name,
  designation,
  testimonial,
}: {
  name: string;
  designation: string;
  testimonial: string;
}) => {
  return (
    <Card classname="!bg-background flex flex-col justify-between text-white cursor-pointer min-h-60  border rounded-xl hover:border-green-500 hover:border transition-all">
      <div>
        <div className="text-green-500 my-4 text-2xl"><LuQuote /></div>
        <i className=" font-medium text-lg">
          {`"${testimonial}"`}
        </i>
      </div>
      <div>
        <div className="text-green-500 font-bold text-xl">{name}</div>
        <div className="text-gray-400 text-sm">{designation}.</div>
      </div>
    </Card>
  );
};
