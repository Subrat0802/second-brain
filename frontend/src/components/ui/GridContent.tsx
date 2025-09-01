/* eslint-disable @typescript-eslint/ban-ts-comment */
// import { getYoutubeEmbedUrl } from "../../services/youtubeEmabaded"
// import { Bookmark, Instagram, Send, Trash } from "lucide-react"
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
}: contentProps) => {
  const dispatch = useDispatch();
  const { refreshUser } = useGetUser();
  const savedItem =
    useSelector(
      (state: RootState) => state.commonState.userContent?.savedItem
    ) || [];

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
      className={`relative dark:bg-[#0F141B] bg-[#ebeff7] shadow-md  border dark:border-none  rounded-lg ${
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
              ? " w-[20%] rounded-l-lg"
              : "w-full rounded-t-lg "
          }  h-32  flex justify-center items-center bg-[#1F2937] dark:bg-[#252A31] text-white/70 `}
        >
          <Instagram />
        </div>
      )}
      {contentType === "Link" && type === "Youtube" && (
        <div
          className={`${
            contentShowType === "rows"
              ? " w-[20%] rounded-l-lg"
              : "w-full rounded-t-lg"
          }  h-32  flex justify-center items-center dark:bg-[#252A31] bg-[#1F2937]  text-white/70`}
        >
          <Youtube />
        </div>
      )}
      {contentType === "Link" && type === "X" && (
        <div
          className={`${
            contentShowType === "rows"
              ? " w-[20%] rounded-l-lg"
              : "w-full rounded-t-lg"
          }  h-32  flex justify-center items-center dark:bg-[#252A31] text-white/70 bg-[#1F2937]`}
        >
          <Twitter />
        </div>
      )}
      {contentType === "Link" && type === "Other" && (
        <div
          className={`${
            contentShowType === "rows"
              ? " w-[20%]  rounded-l-lg"
              : "w-full rounded-t-lg"
          }  h-32  flex justify-center items-center dark:bg-[#252A31] bg-[#1F2937] text-white/70`}
        >
          <Link />
        </div>
      )}
      {contentType === "Image" && (
        <div
          className={`${
            contentShowType === "rows"
              ? " w-[20%] rounded-l-lg"
              : "w-full rounded-t-lg"
          }  h-32  flex justify-center items-center dark:bg-[#252A31] bg-[#1F2937] text-white/70`}
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
              ? " w-[20%] rounded-l-lg"
              : "w-full rounded-t-lg"
          }  h-32  flex justify-center items-center dark:bg-[#252A31] bg-[#1F2937] text-white/70`}
        >
          <NotebookTabs />
        </div>
      )}

      <div className="p-3 space-y-1 w-full">
        <p className="text-sm font-medium dark:text-white">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
        <p className="text-xs text-gray-500">
          Created At: {new Date(createdAt).toLocaleString()}
        </p>

        {/* Actions */}
        <div className="flex justify-between w-[100%] items-center pt-2">
          <div>
            <button
              onClick={() => handleSaveContent(id)}
              className="p-1 hover:text-white transition-colors"
            >
            
              {savedItem
              //@ts-ignore
              .includes(id) ? (
                <BookmarkCheck size={18} />
              ) : (
                <Bookmark size={18} />
              )}
            </button>
            <button className="p-1 hover:text-white transition-colors">
              <a href={link || image} target="_blank">
                <Send size={18} />
              </a>
            </button>
          </div>

          <button className="p-1 hover:text-white transition-colors">
            <Trash size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridContent;
