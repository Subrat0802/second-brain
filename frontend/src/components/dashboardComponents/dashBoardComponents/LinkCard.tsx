// /* eslint-disable @typescript-eslint/ban-ts-comment */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect } from "react";
// import GridContent from "../../ui/GridContent";
// import { useSelector } from "react-redux";
// import type { RootState } from "../../../main";

// export interface contentProps {
//   contentType: string;
//   title: string;
//   description: string;
//   type: string;
//   createdAt: string;
//   link: string;
//   image: string;
// }

// const LinkCard = ({contentType, title, description, type, createdAt, link, image, }: contentProps) => {
//   useEffect(() => {
//     //@ts-ignore
//     if (window.instgrm) {
//       //@ts-ignore
//       window.instgrm.Embeds.process();
//     }
//     if ((window as any).twttr?.widgets) {
//       (window as any).twttr.widgets.load();
//     }
//   }, [link]);


//   const contentShowType = useSelector((state: RootState) => state.commonState.showContent);
//   console.log("CONTENTSHOWWW", contentShowType);
//   return (
//     <div>
//       {contentShowType === "grid" && <GridContent
//         contentType={contentType}
//         title={title}
//         description={description}
//         type={type}
//         createdAt={createdAt}
//         link={link}
//         image={image}
//       />}
//     </div>
//   );
// };

// export default LinkCard;
