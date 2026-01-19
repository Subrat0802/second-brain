/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Badge,
  BadgeCheck,
  Bookmark,
  BookmarkCheck,
  Instagram,
  Link,
  NotebookTabs,
  Send,
  Trash,
  Twitter,
  Youtube,
} from "lucide-react";
import { saveContet } from "../../services/operations/content";
import useGetUser from "../../services/getUserHook";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../main";
import { setCollections, setSaveContent } from "../../redux/slices/commonStates";
import { toast } from "sonner";
// import { useDispatch } from "react-redux";
// import { setSaveContent } from "../../redux/slices/commonStates";
// import { saveContet } from "../../services/operations/content";
interface SavedContent {
  _id: string;
}

export interface contentProps {
  contentType: string;
  title: string;
  description: string;
  type: string;
  createdAt: string;
  link: string;
  image: string;
  contentShowType: string;
  id: string;
  saved?:boolean
}
const GridContent = ({
  contentType,
  title,
  description,
  type,
  createdAt,
  link,
  image,
  contentShowType,
  id,
  saved
}: contentProps) => {
  const dispatch = useDispatch();
  
  const { refreshUser } = useGetUser();

  const savedItem = useSelector(
    (state: RootState) =>
      (state.commonState.userContent?.savedItem ?? []) as SavedContent[]
  );

  const isSaved = savedItem.some(item => item._id === id);


  const collectionState = useSelector(
    (state: RootState) => state.commonState.createCollectionState
  );
  const collections = useSelector(
    (state: RootState) => state.commonState.collections
  );

  const handleSaveContent = async (id: string) => {
    dispatch(setSaveContent(id));
    await saveContet(id);
    await refreshUser();
  };

  const handleSelectCollection = (id: string) => {
    if (!collectionState) {
      return;
    } else if (collections.length > 9) {
      return;
    } else if (collections.includes(id)) {
      toast.success("Collection already selected");
      return;
    } else {
      dispatch(setCollections(id));
    }
  };

  return (
    <div
      onClick={() => handleSelectCollection(id)}
      className={`relative dark:bg-[#0F141B] bg-[#ebeff7]/40 shadow-md  border dark:border-none  rounded-lg ${
        collectionState && "cursor-pointer"
      }   ${contentShowType === "rows" ? "flex gap-4 " : "flex flex-col"}`}
    >
      <div className="absolute top-[2px] left-1 text-white cursor-pointer ">
        {collectionState && collections.includes(id) ? (
          <BadgeCheck width={15} />
        ) : (
          collectionState && <Badge width={15} />
        )}
      </div>
      {/* <div className="absolute top-[2px] left-1  cursor-pointer text-green-800 rounded-full ">
        {
          
        }
      </div> */}
      {contentType === "Link" && type === "Instagram" && (
        <div
          className={`${
            contentShowType === "rows"
              ? " w-[30%] sm:w-[25%] md:w-[20%] rounded-l-lg"
              : "w-full rounded-t-lg "
          }  h-24 sm:h-28 md:h-32  flex justify-center items-center bg-[#1F2937]/70 dark:dark:bg-[#252A31] text-white/70 `}
        >
          <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      )}
      {contentType === "Link" && type === "Youtube" && (
        <div
          className={`${
            contentShowType === "rows"
              ? " w-[30%] sm:w-[25%] md:w-[20%] rounded-l-lg"
              : "w-full rounded-t-lg"
          }  h-24 sm:h-28 md:h-32  flex justify-center items-center bg-[#1F2937]/70 dark:bg-[#252A31]  text-white/70`}
        >
          <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      )}
      {contentType === "Link" && type === "X" && (
        <div
          className={`${
            contentShowType === "rows"
              ? " w-[30%] sm:w-[25%] md:w-[20%] rounded-l-lg"
              : "w-full rounded-t-lg"
          }  h-24 sm:h-28 md:h-32  flex justify-center items-center bg-[#1F2937]/70 text-white/70 dark:bg-[#252A31]`}
        >
          <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      )}
      {contentType === "Link" && type === "Other" && (
        <div
          className={`${
            contentShowType === "rows"
              ? " w-[30%] sm:w-[25%] md:w-[20%]  rounded-l-lg"
              : "w-full rounded-t-lg"
          }  h-24 sm:h-28 md:h-32  flex justify-center items-center bg-[#1F2937]/70 dark:bg-[#252A31] text-white/70`}
        >
          <Link className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      )}
      {contentType === "Image" && (
        <div
          className={`${
            contentShowType === "rows"
              ? " w-[30%] sm:w-[25%] md:w-[20%] rounded-l-lg"
              : "w-full rounded-t-lg"
          }  h-24 sm:h-28 md:h-32  flex justify-center items-center dark:bg-[#252A31]/70 bg-[#1F2937] text-white/70`}
        >
          <img
            className="object-cover h-[100%] w-full rounded-l-lg"
            src={image}
          />
        </div>
      )}
      {contentType === "Notes" && (
        <div
          className={`${
            contentShowType === "rows"
              ? " w-[30%] sm:w-[25%] md:w-[20%] rounded-l-lg"
              : "w-full rounded-t-lg"
          }  h-24 sm:h-28 md:h-32  flex justify-center items-center dark:bg-[#252A31] bg-[#1F2937] text-white/70`}
        >
          <NotebookTabs className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      )}

      <div className="p-2 sm:p-3 space-y-1 w-full">
        <p className="text-xs sm:text-sm font-medium dark:text-white">{title}</p>
        <p className="text-xs text-gray-500 line-clamp-2">{description}</p>
        <p className="text-xs text-gray-500">
          Created At: {new Date(createdAt).toLocaleString()}
        </p>

        <div className="flex justify-between w-[100%] items-center pt-2">
          <div>
            <button
              onClick={() => handleSaveContent(id)}
              className="p-1 hover:text-white transition-colors"
            >
            
              {isSaved || saved ? (
                <BookmarkCheck size={16} className="sm:w-[18px] sm:h-[18px]" />
              ) : (
                <Bookmark size={16} className="sm:w-[18px] sm:h-[18px]" />
              )}
            </button>
            <button className="p-1 hover:text-white transition-colors">
              <a href={link || image} target="_blank">
                <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </button>
          </div>

          <button className="p-1 hover:text-white transition-colors">
            <Trash size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridContent;
