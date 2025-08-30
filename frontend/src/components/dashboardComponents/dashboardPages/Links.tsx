/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector } from "react-redux"
import type { RootState } from "../../../main"
import GridContent from "../../ui/GridContent";

const Links = () => {

  const linksContent = useSelector((state:RootState) => state.commonState.userContent?.content) ?? [];

  return (
    <div className="p-4 font-inter bg-[#080C13]">
      <p className="text-xl py-4 pb-10">All your social media content and links</p>

      <div>
        {
          //@ts-ignore
          linksContent.filter((el) => el.contentType === "Link").map((el) => (
            <div key={el._id} className="mb-4">
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