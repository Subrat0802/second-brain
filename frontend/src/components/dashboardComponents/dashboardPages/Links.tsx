/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector } from "react-redux"
import type { RootState } from "../../../main"
import GridContent from "../../ui/GridContent";

const Links = () => {

  const linksContent = useSelector((state:RootState) => state.commonState.userContent?.content) ?? [];

  return (
    <div className="p-2 sm:p-4 font-inter dark:bg-[#080C13]">
      <p className="text-lg sm:text-xl py-3 sm:py-4 pb-6 sm:pb-10">All your social media content and links</p>

      <div>
        {
          //@ts-ignore
          linksContent.filter((el) => el.contentType === "Link").map((el) => (
            <div key={el._id} className="mb-3 sm:mb-4">
              <GridContent contentType={el?.contentType} title={el.title} description={el.description} 
              type={el.type} createdAt={el.createdAt} link={el.link} image={""} contentShowType={"rows"} 
              id={el._id}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Links