/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bookmark, Instagram, Send, Trash } from "lucide-react";
import { useEffect } from "react";
import { getYoutubeEmbedUrl } from "../../../services/youtubeEmabaded";

export interface contentProps {
  contentType: string;
  title: string;
  description: string;
  type: string;
  createdAt: string;
  link: string;
  image:string
}

const LinkCard = ({
  contentType,
  title,
  description,
  type,
  createdAt,
  link,
  image
}: contentProps) => {
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
  return (
    <div
      className="w-[100%] bg-[#0F141B]  border border-gray-800 rounded-2xl overflow-hidden
     shadow-md 
    hover:shadow-lg transition-shadow duration-300"
    >
      {contentType === "Link" && (
        <div className="">
          {type === "Youtube" && (
            <div className="relative w-full h-[200px] bg-gradient-to-r ">
              <iframe
                width="100%"
                height="100%"
                src={getYoutubeEmbedUrl(link)}
                title="YouTube video player"
                className="w-full h-full rounded-t-2xl"
              ></iframe>
            </div>
          )}

          {type === "X" && (
            <div className="p-3 bg-[#15202B]">
              <blockquote className="twitter-tweet" data-theme="dark">
                <a href={link.replace("x.com", "twitter.com")}></a>
              </blockquote>
            </div>
          )}

          {type === "Instagram" && (
            <div className="bg-[#1B2028] text-white/60  bg-gradient-to-t flex justify-center p-14 py-[88px] items-center">
              {/* <blockquote
                className="instagram-media"
                data-instgrm-permalink={link.replace("reels", "reel")}
                data-instgrm-version="14"
                style={{ margin: "0 auto", width:"100%" }}
              ></blockquote> */}
              <Instagram />
            </div>
          )}

          {type === "Other" && (
            <div className="relative w-full h-[200px] p-2 overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={link}
                title="YouTube video player"
                className="w-full h-full rounded-t-2xl overflow-hidden"
              ></iframe>
            </div>
          )}

          {

          }

          {/* Content Info */}
          <div className="p-3 space-y-1">
            <p className="text-sm font-medium text-white">{title}</p>
            <p className="text-xs text-gray-400">{description}</p>
            <p className="text-xs text-gray-500">
              Created At: {new Date(createdAt).toLocaleString()}
            </p>

            {/* Actions */}
            <div className="flex justify-between items-center pt-2">
              <div>
                <button className="p-1 hover:text-white transition-colors">
                  <Bookmark size={18} />
                </button>
                <button className="p-1 hover:text-white transition-colors">
                  <Send size={18} />
                </button>
              </div>

              <button className="p-1 hover:text-white transition-colors">
                <Trash size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {
        contentType === "Image" && <div>
          <img src={image}/>  
          <div className="p-3 space-y-1">
            <p className="text-sm font-medium text-white">{title}</p>
            <p className="text-xs text-gray-400">{description}</p>
            <p className="text-xs text-gray-500">
              Created At: {new Date(createdAt).toLocaleString()}
            </p>

            {/* Actions */}
            <div className="flex justify-between items-center pt-2">
              <div>
                <button className="p-1 hover:text-white transition-colors">
                  <Bookmark size={18} />
                </button>
                <button className="p-1 hover:text-white transition-colors">
                  <Send size={18} />
                </button>
              </div>

              <button className="p-1 hover:text-white transition-colors">
                <Trash size={18} />
              </button>
            </div>
          </div>
        </div>
      }

      {
        contentType === "Notes" && <div className="p-2">
         <div className="p-3 space-y-1">
            <p className="text-sm font-medium text-white">{title}</p>
            <p className="text-xs text-gray-400">{description}</p>
            <p className="text-xs text-gray-500">
              Created At: {new Date(createdAt).toLocaleString()}
            </p>

            {/* Actions */}
            <div className="flex justify-between items-center pt-2">
              <div>
                <button className="p-1 hover:text-white transition-colors">
                  <Bookmark size={18} />
                </button>
                <button className="p-1 hover:text-white transition-colors">
                  <Send size={18} />
                </button>
              </div>

              <button className="p-1 hover:text-white transition-colors">
                <Trash size={18} />
              </button>
            </div>
          </div> 
        </div>
      }
    </div>
  );
};

export default LinkCard;

{
  /* <div className=" grid grid-cols-3 mt-8 gap-4">
        <div>
          {
            //@ts-ignore
            !userContent || userContent.length === 0 ? (
              <p>Loading..</p>
            ) : (
              //@ts-ignore
              userContent?.filter((el: { type: string; }) => el.type === "Instagram")
                .map((el: { _id: Key | null | undefined; contentType: string; title: string; description: string; type: string; link: string; createdAt: string; }) => (
                  <LinkCard
                    key={el._id}
                    contentType={el.contentType}
                    title={el.title}
                    description={el.description}
                    type={el.type}
                    link={el.link}
                    createdAt={el.createdAt}
                  />
                ))
            )
          }
        </div>
        <div>
          {
            //@ts-ignore
            !userContent ? (
              <p>Loading..</p>
            ) : (
              //@ts-ignore
              userContent.filter((el) => el.type === "Youtube")
                .map((el: { _id: Key | null | undefined; contentType: string; title: string; description: string; type: string; link: string; createdAt: string; }) => (
                  <LinkCard
                    key={el._id}
                    contentType={el.contentType}
                    title={el.title}
                    description={el.description}
                    type={el.type}
                    link={el.link}
                    createdAt={el.createdAt}
                  />
                ))
            )
          }
        </div>
        <div>
          {
            //@ts-ignore
            !userContent ? (
              <p>Loading..</p>
            ) : (
              //@ts-ignore
              userContent.filter((el) => el.type === "X")
                .map((el: { _id: Key | null | undefined; contentType: string; title: string; description: string; type: string; link: string; createdAt: string; }) => (
                  <LinkCard
                    key={el._id}
                    contentType={el.contentType}
                    title={el.title}
                    description={el.description}
                    type={el.type}
                    link={el.link}
                    createdAt={el.createdAt}
                  />
                ))
            )
          }
        </div>
      </div> */
}
