
import { Card } from "@/components/ui/card"; 
import * as AiIcons from "react-icons/ai";


export const FeatureCard = ({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon: string
}) => {
  
  const IconComponent = AiIcons[icon as keyof typeof AiIcons]
  return (
    <Card classname="!bg-background text-white !p-6  flex flex-col justify-evenly border rounded-lg hover:border hover:border-green-500">
        {IconComponent && <IconComponent className="text-green-500 text-3xl" />}
        <div className="text-2xl font-bold my-4">{title}</div>
        <div className="text-md text-gray-400 font-medium">{description}</div>
    </Card>
  );
};
