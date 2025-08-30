 
// import { Bookmark, BookmarkCheck, Send, Trash } from "lucide-react"

interface collectionProp {
    collectionName:string;
    description: string;
    createdAt: string;
    username: string;
}

const CollectionCard = ({collectionName, description, createdAt, username}:collectionProp) => {
  return (
    <div className="h-[30dvh]  border-gray-800 rounded-lg bg-gray-950">
        <div className="h-[50%] w-full flex justify-center items-center bg-gray-800 rounded-t-lg p-3"><p>{collectionName}</p></div>
        <div className="h-[50%] border-t border-gray-800 w-full ">

            <div className="p-2 flex flex-col gap-2">
                
                <p>{description}</p>
                <p className="text-xs text-gray-400">Created by: {username}</p> 
                <p className="text-xs text-gray-400">
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
        </div>
    </div>
  )
}

export default CollectionCard