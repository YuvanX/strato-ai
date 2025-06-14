import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { redirect } from "next/navigation";

import { RiArrowDropDownLine } from "react-icons/ri";

export const DropDown = ({user}: any) => {
    const { theme ,setTheme } = useTheme()
   
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="border px-2 text-sm flex outline-none gap-1 items-center rounded-md py-1">
            <div>{user}</div>
            <RiArrowDropDownLine/>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem onClick={() => redirect('/dashboard')}>DashBoard</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator/>
          <DropdownMenuItem onClick={() => signOut({callbackUrl: '/'})}>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
