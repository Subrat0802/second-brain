import { useSelector } from "react-redux";
import type { RootState } from "../../main";
import Progressbar from "./Progressbar";
import { Plus } from "lucide-react";
import InputTag from "./InputTag";
import Button from "./Button";

const SidebarProfile = () => {
  const userData = useSelector(
    (state: RootState) => state.commonState.userContent
  );

  const createCollectionState = useSelector(
    (state: RootState) => state.commonState.createCollectionState
  );

  if (!userData) {
    return (
      <div className="w-[270px] fixed right-0 h-[100dvh] pt-[9dvh] border-l-2 hidden md:flex flex-col items-center justify-center bg-white dark:bg-[#080C13] dark:border-[#111827] border">
        <p className="text-gray-500 dark:text-gray-400">Loading...</p>
      </div>
    );
  }

  return (
    <div
      className="w-[270px] px-4 font-inter fixed right-0 h-[100dvh] pt-[9dvh] border-l-2 hidden md:flex flex-col dark:border-b-2 bg-white 
      dark:bg-[#080C13] dark:border-[#111827] border"
    >
      {!createCollectionState && (
        <div className="flex justify-center flex-col items-center pt-10">
          <img
            className="border border-gray-500 dark:border-white/10 w-20 rounded-full h-fit mb-1"
            src={"https://api.dicebear.com/9.x/lorelei/svg?beardProbability=0"}
            alt="User Avatar"
          />
          <p className="text-xl first-letter:capitalize">
            {userData?.username ?? "Anonymous"}
          </p>
          <div>
            <Progressbar />
          </div>
          <div className="flex gap-3 mt-5 text-sm text-white/50">
            <div className="p-3 rounded-md bg-[#0F141B] text-center w-28">
              30 <br /> Saved items
            </div>
            <div className="p-3 rounded-md bg-[#0F141B] text-center w-28">
              12 <br /> Collections
            </div>
          </div>
          <div className="flex justify-start  w-full gap-2 mt-8 flex-col text-sm ">
            <p>Quick Actions</p>
            <div className="flex text-white/50 bg-[#0F141B] p-2 rounded-lg justify-start items-center gap-1">
              <Plus width={15} /> Add New Items
            </div>
            <div className="flex text-white/50 bg-[#0F141B] p-2 rounded-lg justify-start items-center gap-1">
              <Plus width={15} /> Create Collections
            </div>
            <div className="flex text-white/50 bg-[#0F141B] p-2 rounded-lg justify-start items-center gap-1">
              <Plus width={15} /> Upload Files
            </div>
          </div>
        </div>
      )}
      {createCollectionState && (
        <div>
          <div className="px-auto">
            <InputTag placeText="Collection Name" id={"collectionName"}/>
          </div>
          <div>
            
          </div>

          <div className="flex items-center justify-center">
              <Button variant="primary" text="Collection Name" />
            </div>
        </div>
      )}
    </div>
  );
};

export default SidebarProfile;
