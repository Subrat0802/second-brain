// import { Bookmark, BookmarkCheck, Send, Trash } from "lucide-react"

import { useState } from "react";

interface collectionProp {
  collectionName: string;
  description: string;
  createdAt: string;
  username: string;
}

const CollectionCard = ({
  collectionName,
  description,
  createdAt,
  username,
}: collectionProp) => {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <div className="rounded-lg bg-[#E7EAF0] dark:bg-[#0F141B]">
      <div className="w-full flex justify-center items-center dark:bg-[#252A31] text-white/60 bg-[#1F2937] rounded-t-lg p-2 sm:p-3 py-6 sm:py-10">
        <p className="text-sm sm:text-base">{collectionName}</p>
      </div>
      <div className="h-[50%]  rounded-b-lg border-t border-gray-800 w-full ">
        <div className="p-2 flex flex-col gap-1 sm:gap-2">
          <p className="text-xs sm:text-sm">{description}</p>
          <p className="text-xs text-gray-500">Created by: {username}</p>
          <p className="text-xs text-gray-500">
            Created At: {new Date(createdAt).toLocaleString()}
          </p>
        </div>
        {/* <div className="flex justify-between w-[100%] items-center pt-2">
              <div>
                <button onClick={() => handleSaveContent(id)} className="p-1 hover:text-white transition-colors">
                  {
                    //@ts-ignore
                    savedItem.includes(id) ? <BookmarkCheck size={18}/> : <Bookmark size={18} /> 
                  }
                  
                </button>
                <button className="p-1 hover:text-white transition-colors">
                  <a href={link || image} target="_blank"><Send size={18} /></a>
                </button>
              </div>

              <button className="p-1 hover:text-white transition-colors">
                <Trash size={18} />
              </button>
            </div> */}
        <div className=" p-2">
          <div className="flex items-center space-x-3">
            <div
              onClick={toggleHandler}
              className={`w-8 h-4 flex items-center rounded-full   cursor-pointer transition-colors ${
                isOn ? "bg-green-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                  isOn ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </div>
   


   
            <span className="text-sm">{isOn ? "public" : "Private"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
