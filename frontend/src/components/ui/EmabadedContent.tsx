/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Bookmark, Send, Trash } from "lucide-react";
import { useEffect } from "react";
import { getYoutubeEmbedUrl } from "../../services/youtubeEmabaded";
import { setSaveContent } from "../../redux/slices/commonStates";
import { useDispatch } from "react-redux";


export interface ContentProps {
  contentType: string;
  title: string;
  description: string;
  type: string;
  createdAt: string;
  link: string;
  image?: string;
  id: string;
}

const EmbeddedContent = ({contentType, title, description, type, createdAt, link, image, id}: ContentProps) => {
  useEffect(() => {
    //@ts-ignore
    if (window.instgrm) {
      //@ts-ignore
      window.instgrm.Embeds.process();
    }
    if ((window as any).twttr?.widgets) {
      (window as any).twttr.widgets.load();
    }
  }, [link]);

  const dispatch = useDispatch();

  const renderContentByType = () => {
    switch (type) {
      case "Youtube":
        return (
          <div className="relative w-full h-[200px]">
            <iframe
              src={getYoutubeEmbedUrl(link)}
              title={title}
              className="w-full h-full rounded-t-2xl"
              allowFullScreen
            />
          </div>
        );

      case "X":
        return (
          <div className="p-3 bg-[#15202B]">
            <blockquote className="twitter-tweet" data-theme="dark">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
          </div>
        );

      case "Instagram":
        return (
          <div className="bg-[#1B2028] text-white/60 flex justify-center items-center ">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={link.replace("reels", "reel")}
              data-instgrm-version="14"
              style={{ margin: "0 auto", width: "100%" }}
            ></blockquote>
          </div>
        );

      case "Other":
        return (
          <div className="relative w-full h-[200px] p-2 overflow-hidden">
            <iframe
              src={link}
              title={title}
              className="w-full h-full rounded-t-2xl"
            />
          </div>
        );

      default:
        return (
          image && (
            <img
              src={image}
              alt={title}
              className="w-full h-[200px] object-cover rounded-t-2xl"
            />
          )
        );
    }
  };

  return (
    <div
      className="w-full bg-[#0F141B]  rounded-2xl overflow-hidden mt-10
     shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      {contentType === "Link" && (
        <div>
          {renderContentByType()}

          <div className="p-3 space-y-1">
            <p className="text-sm font-medium text-white">{title}</p>
            <p className="text-xs text-gray-400">{description}</p>
            <p className="text-xs text-gray-500">
              Created At: {new Date(createdAt).toLocaleString()}
            </p>


            <div className="flex justify-between items-center pt-2">
              <div>
                <button onClick={() => dispatch(setSaveContent(id))} 
                  aria-label="Bookmark"
                  className="p-1 hover:text-white transition-colors"
                >
                  <Bookmark size={18} />
                </button>
                <button
                  aria-label="Send"
                  className="p-1 hover:text-white transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>

              <button
                aria-label="Delete"
                className="p-1 hover:text-white transition-colors"
              >
                <Trash size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmbeddedContent;
