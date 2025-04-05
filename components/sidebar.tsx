import { GoSignOut } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { RiDashboardLine, RiFilePaper2Line } from "react-icons/ri";

export const SideBar = ({ username, email }: { username: string, email: string}) => {
  return (
    <div className="flex flex-col justify-between border-slate-800  border-r h-screen w-64 ">
      <div>
        <div className="text-xl font-semibold p-6 border-slate-800 border-b">
          Strato.ai
        </div>

        <div className="flex gap-3 px-2 py-2 my-2 mx-2 rounded hover:bg-[#27272a] items-center cursor-pointer">
          <div>
            <RiDashboardLine size={24} />
          </div>
          <div className="text-lg font-normal">Home</div>
        </div>
        <div className="flex gap-3 px-2 py-2 m-2 rounded hover:bg-[#27272a] items-center cursor-pointer">
          <div>
            <RiFilePaper2Line size={24}/>
          </div>
          <div className="text-lg font-normal">My pages</div>
        </div>
        <div className="flex gap-3 px-2 py-2 m-2 rounded hover:bg-[#27272a] items-center cursor-pointer">
          <div>
            <IoSettingsOutline size={24}/>
          </div>
          <div className="text-lg font-normal">Settings</div>
        </div>
      </div>
      <div className="border-slate-800 border-t">
            <div className="flex items-center gap-2 px-2 py-2 m-2">
                <div className="w-10 h-10 bg-[#27272a] rounded-full flex justify-center items-center">
                    {username[0]}
                </div>
                <div >
                   <div className="font-bold">{username}</div>
                   <div className="text-xs">{email}</div>
                </div>
            </div>

            <div className="flex items-center gap-3 px-2 py-2 m-2 mb-3 hover:bg-[#27272a] rounded ">
                <div>
                <GoSignOut />
                </div>
                <button>
                    Sign out
                </button>
            </div>
      </div>
    </div>
  );
};
