// import { getYoutubeEmbedUrl } from "../../services/youtubeEmabaded"
// import { Bookmark, Instagram, Send, Trash } from "lucide-react"
import { Bookmark, BookmarkCheck, Instagram, Link, NotebookTabs, Send, Trash, Twitter, Youtube } from "lucide-react";
import { saveContet } from "../../services/operations/content";
import useGetUser from "../../services/getUserHook";
import { useSelector } from "react-redux";
import type { RootState } from "../../main";
// import { useDispatch } from "react-redux";
// import { setSaveContent } from "../../redux/slices/commonStates";
// import { saveContet } from "../../services/operations/content";

export interface contentProps {
  contentType: string;
  title: string;
  description: string;
  type: string;
  createdAt: string;
  link: string;
  image:string;
  contentShowType:string;
  id: string;
}
const GridContent = ({contentType, title, description, type, createdAt, link, image, contentShowType, id}: contentProps) => {
    const {refreshUser} = useGetUser();
    const savedItem = useSelector((state:RootState) => state.commonState.userContent?.savedItem) || [];

    const handleSaveContent = (id: string) => {
      saveContet(id);
      refreshUser();
    }
  return (
    <div className={`border-gray-900 rounded-lg  ${contentShowType === "rows" ? "flex gap-2 border" : "flex flex-col border"}`}>
      {contentType === "Link" && type === "Instagram" && <div className={`${contentShowType === "rows" ? " w-[20%]" : "w-full"}  h-32  flex justify-center items-center bg-[#1F2937] shadow-lg`}>
        <Instagram />  
      </div>}
      {contentType === "Link" && type === "Youtube" && <div className={`${contentShowType === "rows" ? " w-[20%]" : "w-full"}  h-32  flex justify-center items-center bg-[#1F2937] shadow-lg`}>
        <Youtube />  
      </div>}
      {contentType === "Link" && type === "X" && <div className={`${contentShowType === "rows" ? " w-[20%]" : "w-full"}  h-32  flex justify-center items-center bg-[#1F2937] shadow-lg`}>
        <Twitter />  
      </div>}
      {contentType === "Link" && type === "Other" && <div className={`${contentShowType === "rows" ? " w-[20%]" : "w-full"}  h-32  flex justify-center items-center bg-[#1F2937] shadow-lg`}>
        <Link />  
      </div>}
      {contentType === "Image" && <div className={`${contentShowType === "rows" ? " w-[20%]" : "w-full"}  h-32  flex justify-center items-center bg-[#1F2937] shadow-lg`}>
        <img className="object-cover h-[100%] w-full" src={image} />  
      </div>}
      {contentType === "Notes" && <div className={`${contentShowType === "rows" ? " w-[20%]" : "w-full"}  h-32  flex justify-center items-center bg-[#1F2937] shadow-lg`}>
        <NotebookTabs />  
      </div>}

      <div className="p-3 space-y-1 w-full">
            <p className="text-sm font-medium dark:text-white">{title}</p>
            <p className="text-xs text-gray-400">{description}</p>
            <p className="text-xs text-gray-400">
              Created At: {new Date(createdAt).toLocaleString()}
            </p>

            {/* Actions */}
            <div className="flex justify-between w-[100%] items-center pt-2">
              <div>
                <button onClick={() => handleSaveContent(id)} className="p-1 hover:text-white transition-colors">
                  {
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
            </div>
          </div>
        </div>

  )
}

export default GridContent

// {/* <div BookmarkCheck 
//       className="w-[100%] bg-[#0F141B]  border  border-white rounded-2xl overflow-hidden mt-10
//      shadow-md 
//     hover:shadow-lg transition-shadow duration-300"
//     >
//       {contentType === "Link" && (
//         <div className="">
//           {type === "Youtube" && (
//             <div className="relative w-full h-[200px] bg-gradient-to-r ">
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src={getYoutubeEmbedUrl(link)}
//                 title="YouTube video player"
//                 className="w-full h-full rounded-t-2xl"
//               ></iframe>
//             </div>
//           )}

//           {type === "X" && (
//             <div className="p-3 bg-[#15202B]">
//               <blockquote className="twitter-tweet" data-theme="dark">
//                 <a href={link.replace("x.com", "twitter.com")}></a>
//               </blockquote>
//             </div>
//           )}

//           {type === "Instagram" && (
//             <div className="bg-[#1B2028] text-white/60  bg-gradient-to-t flex justify-center p-14 py-[88px] items-center">
//               {/* <blockquote
//                 className="instagram-media"
//                 data-instgrm-permalink={link.replace("reels", "reel")}
//                 data-instgrm-version="14"
//                 style={{ margin: "0 auto", width:"100%" }}
//               ></blockquote> */}
//               <Instagram />
//             </div>
//           )}

//           {type === "Other" && (
//             <div className="relative w-full h-[200px] p-2 overflow-hidden">
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src={link}
//                 title="YouTube video player"
//                 className="w-full h-full rounded-t-2xl overflow-hidden"
//               ></iframe>
//             </div>
//           )}

//           {

//           }

//           {/* Content Info */}
//           <div className="p-3 space-y-1">
//             <p className="text-sm font-medium text-white">{title}</p>
//             <p className="text-xs text-gray-400">{description}</p>
//             <p className="text-xs text-gray-500">
//               Created At: {new Date(createdAt).toLocaleString()}
//             </p>

//             {/* Actions */}
//             <div className="flex justify-between items-center pt-2">
//               <div>
//                 <button className="p-1 hover:text-white transition-colors">
//                   <Bookmark size={18} />
//                 </button>
//                 <button className="p-1 hover:text-white transition-colors">
//                   <Send size={18} />
//                 </button>
//               </div>

//               <button className="p-1 hover:text-white transition-colors">
//                 <Trash size={18} />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {
//         contentType === "Image" && <div>
//           <img src={image}/>  
//           <div className="p-3 space-y-1">
//             <p className="text-sm font-medium text-white">{title}</p>
//             <p className="text-xs text-gray-400">{description}</p>
//             <p className="text-xs text-gray-500">
//               Created At: {new Date(createdAt).toLocaleString()}
//             </p>

//             {/* Actions */}
//             <div className="flex justify-between items-center pt-2">
//               <div>
//                 <button className="p-1 hover:text-white transition-colors">
//                   <Bookmark size={18} />
//                 </button>
//                 <button className="p-1 hover:text-white transition-colors">
//                   <Send size={18} />
//                 </button>
//               </div>

//               <button className="p-1 hover:text-white transition-colors">
//                 <Trash size={18} />
//               </button>
//             </div>
//           </div>
//         </div>
//       }

//       {
//         contentType === "Notes" && <div className="p-2">
//          <div className="p-3 space-y-1">
//             <p className="text-sm font-medium text-white">{title}</p>
//             <p className="text-xs text-gray-400">{description}</p>
//             <p className="text-xs text-gray-500">
//               Created At: {new Date(createdAt).toLocaleString()}
//             </p>

//             {/* Actions */}
//             <div className="flex justify-between items-center pt-2">
//               <div>
//                 <button className="p-1 hover:text-white transition-colors">
//                   <Bookmark size={18} />
//                 </button>
//                 <button className="p-1 hover:text-white transition-colors">
//                   <Send size={18} />
//                 </button>
//               </div>

//               <button className="p-1 hover:text-white transition-colors">
//                 <Trash size={18} />
//               </button>
//             </div>
//           </div> 
//         </div>
//       }
//     </div> */}
