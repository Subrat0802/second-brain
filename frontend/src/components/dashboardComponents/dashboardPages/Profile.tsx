/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector } from "react-redux"
import type { RootState } from "../../../main"
import { Trash, Crown } from "lucide-react";

const Profile = () => {
  const userDetails = useSelector((state: RootState) => state.commonState.userContent);

  return (
    <div className="p-3 sm:p-4 md:p-6 max-w-3xl mx-auto">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-center">Your Profile</h2>

      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl p-4 sm:p-6 flex flex-col items-center">
        <img
          className="border-4 border-gray-700 w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-md"
          src={"https://api.dicebear.com/9.x/lorelei/svg?beardProbability=0"}
          alt="User Avatar"
        />
        <h3 className="text-lg sm:text-xl mt-3 font-medium capitalize">{userDetails?.username ?? "Anonymous"}</h3>
        <p className="text-xs sm:text-sm text-gray-400">{userDetails?.email ?? "Anonymous"}</p>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full mt-4 sm:mt-6 text-center">
          <div className="bg-gray-800/60 rounded-lg p-2 sm:p-3">
            <p className="text-base sm:text-lg font-bold text-white">
              {
                //@ts-ignore
                userDetails?.content?.length ?? 0
              }
            </p>
            <p className="text-xs text-gray-400">Contents</p>
          </div>
          <div className="bg-gray-800/60 rounded-lg p-2 sm:p-3">
            <p className="text-base sm:text-lg font-bold text-white">
              {
                //@ts-ignore
                userDetails?.savedItem?.length ?? 0
              }
            </p>
            <p className="text-xs text-gray-400">Saved</p>
          </div>
          <div className="bg-gray-800/60 rounded-lg p-2 sm:p-3">
            <p className="text-base sm:text-lg font-bold text-white">
              {
                //@ts-ignore
                userDetails?.collections?.length ?? 0
              }
            </p>
            <p className="text-xs text-gray-400">Collections</p>
          </div>
        </div>

        <div className="w-full mt-4 sm:mt-6 bg-gray-800/50 p-2 sm:p-3 rounded-lg flex items-center justify-between">
          <p className="text-xs sm:text-sm">Your current plan: <span className="font-medium">Free</span></p>
          <Crown className="text-yellow-400 w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </div>

        <button className="flex items-center gap-2 mt-4 sm:mt-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-700 transition-all rounded-lg text-sm sm:text-base text-white font-medium shadow">
          <Trash width={16} className="sm:w-[18px]" /> Delete Account
        </button>
      </div>
    </div>
  )
}

export default Profile
