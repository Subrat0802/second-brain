/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";

export interface contentProps {
  contentType: string;
  title: string;
  description: string;
  type: string;
  createdAt: string;
  link: string;
}

const LinkCard = ({
  contentType,
  title,
  description,
  type,
  createdAt,
  link,
}: contentProps) => {

    useEffect(() => {
    // Re-run Instagram embeds
    //@ts-ignore
    if (window.instgrm) {
        //@ts-ignore
      window.instgrm.Embeds.process();
    }

    // Re-run Twitter (X) embeds
    if ((window as any).twttr?.widgets) {
      (window as any).twttr.widgets.load();
    }
  }, [link]);
  return (
    <div className="">
      {contentType === "Link" && (
        <div className=" w-fit">
          {type === "Youtube" && (
            <div>
              <iframe
                width="100%"
                height="200"
                src={link.replace("watch?v=", "embed/")}
                title="YouTube video player"
                className="rounded-xl"
              ></iframe>
            </div>
          )}

          {type === "X" && (
            <div>
              <blockquote className="twitter-tweet" data-theme="dark">
                <a href={link.replace("x.com", "twitter.com")}></a>
              </blockquote>
            </div>
          )}

          {type === "Instagram" && (
            <div className="">
              <blockquote
                className="instagram-media w-14"
                data-instgrm-permalink={link.replace("reels", "reel")}
                data-instgrm-version="14" 
                style={{
                  width: "100%",
                  minWidth: "200px",
                  maxWidth: "250px",
                  margin: "0 auto",
                  background: "#000",
                  backgroundColor:"#0f0f0f"
                }}
              ></blockquote>
              
            </div>
          )}
            <p>{title}</p>
              <p>{description}</p>
              <p>{createdAt}</p>
        </div>
      )}
    </div>
  );
};

export default LinkCard;
