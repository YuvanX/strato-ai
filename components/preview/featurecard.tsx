import { RiThunderstormsLine } from "react-icons/ri";
import { Card } from "../card";
import { FaCode } from "react-icons/fa6";


export const FeatureCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  
  return (
    <Card classname="!bg-background text-white !p-6  flex flex-col justify-evenly border rounded-lg hover:border hover:border-green-500">
        <div className="text-green-500 text-3xl"><FaCode /></div>
        <div className="text-2xl font-bold my-4">{title}</div>
        <div className="text-md text-gray-400 font-medium">{description}</div>
    </Card>
  );
};
