import { FaInstagram } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";
export const Footer = ({ name }: { name: string }) => {
  return (
    <div className="flex px-10 items-center my-10">
      <div className="w-full">
        <div className="text-xl md:text-4xl text-green-500 font-medium">{name}</div>
        <div className="text-gray-500 text-xs md:text-sm my-2">
          © 2025 {name}. All rights reserved.
        </div>
      </div>
      <div className="flex gap-4">
      <div className="text-xl md:text-2xl"><FaInstagram  /></div>
      <div className="text-xl md:text-2xl"><IoMailOutline /></div>
      </div>
    </div>
  );
};
