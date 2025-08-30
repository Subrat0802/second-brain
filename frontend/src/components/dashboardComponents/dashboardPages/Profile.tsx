/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector } from "react-redux"
import type { RootState } from "../../../main"
import { Trash } from "lucide-react";

const Profile = () => {
  const userDetails = useSelector((state: RootState) => state.commonState.userContent);

  return (
    <div className="p-4">
      <p className="text-xl">Your Profile</p>
      <div>
        <div>
          <div className="flex flex-col  mt-3 justify-center items-center">
            <img
            className="border border-gray-500 dark:border-white/10 w-20 rounded-full h-fit mb-1"
            src={"https://api.dicebear.com/9.x/lorelei/svg?beardProbability=0"}
            alt="User Avatar"
            />
            <p className="text-xl first-letter:capitalize">
              {userDetails?.username ?? "Anonymous"}
            </p>
            <p className="text-xs first-letter:capitalize">
              {userDetails?.email ?? "Anonymous"}
            </p>
          </div>
          <div className="w-full flex flex-col rounded-lg p-3 mt-3 border border-gray-900 ">
            
            <p>Total colntents: {userDetails?.
            //@ts-ignore
            content?.length}</p>
            <p>Total saved items: {userDetails?.
            //@ts-ignore
            savedItem?.length}</p>
            <p>Total collections: {userDetails?.
            //@ts-ignore
            collections?.length}</p>
          </div>
          <div className="mt-3 border border-gray-900 p-3 rounded-lg">
            <p>Your current plan: Free</p>
          </div>
          <button className="flex gap-2 p-3 mt-3 bg-gray-950 rounded-lg hover:text-pink-800 transition-all duration-200 ">Delete Acount <Trash width={18}/></button>
        </div>
      </div>
    </div>
  )
}

export default Profile