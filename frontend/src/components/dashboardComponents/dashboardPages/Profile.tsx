/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector } from "react-redux"
import type { RootState } from "../../../main"
import { Trash, Crown } from "lucide-react";

const Profile = () => {
  const userDetails = useSelector((state: RootState) => state.commonState.userContent);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Your Profile</h2>

      {/* Profile Card */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl p-6 flex flex-col items-center">
        <img
          className="border-4 border-gray-700 w-24 h-24 rounded-full shadow-md"
          src={"https://api.dicebear.com/9.x/lorelei/svg?beardProbability=0"}
          alt="User Avatar"
        />
        <h3 className="text-xl mt-3 font-medium capitalize">{userDetails?.username ?? "Anonymous"}</h3>
        <p className="text-sm text-gray-400">{userDetails?.email ?? "Anonymous"}</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 w-full mt-6 text-center">
          <div className="bg-gray-800/60 rounded-lg p-3">
            <p className="text-lg font-bold text-white">
              {
                //@ts-ignore
                userDetails?.content?.length ?? 0
              }
            </p>
            <p className="text-xs text-gray-400">Contents</p>
          </div>
          <div className="bg-gray-800/60 rounded-lg p-3">
            <p className="text-lg font-bold text-white">
              {
                //@ts-ignore
                userDetails?.savedItem?.length ?? 0
              }
            </p>
            <p className="text-xs text-gray-400">Saved</p>
          </div>
          <div className="bg-gray-800/60 rounded-lg p-3">
            <p className="text-lg font-bold text-white">
              {
                //@ts-ignore
                userDetails?.collections?.length ?? 0
              }
            </p>
            <p className="text-xs text-gray-400">Collections</p>
          </div>
        </div>

        {/* Plan */}
        <div className="w-full mt-6 bg-gray-800/50 p-3 rounded-lg flex items-center justify-between">
          <p className="text-sm">Your current plan: <span className="font-medium">Free</span></p>
          <Crown className="text-yellow-400" width={18} />
        </div>

        {/* Delete */}
        <button className="flex items-center gap-2 mt-6 px-4 py-2 bg-red-600 hover:bg-red-700 transition-all rounded-lg text-white font-medium shadow">
          <Trash width={18} /> Delete Account
        </button>
      </div>
    </div>
  )
}

export default Profile
