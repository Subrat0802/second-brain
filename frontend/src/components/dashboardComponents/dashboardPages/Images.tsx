/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector } from "react-redux";
import type { RootState } from "../../../main";
import GridContent from "../../ui/GridContent";

const Images = () => {

  const linksContent = useSelector((state:RootState) => state.commonState.userContent?.content) ?? [];
  return (
    <div className="p-3 font-inter dark:bg-[#080C13]">
      <p className="text-xl py-4 pb-10">All Images</p>

      <div className="grid grid-cols-3 gap-5 ">
        {
          //@ts-ignore
          linksContent.filter((el) => el.contentType === "Image").map((el) => (
            <div key={el._id} className="">
              <GridContent contentType={el?.contentType} title={el.title} description={el.description} 
              type={""} createdAt={el.createdAt} link={""} image={el.image} contentShowType={"grid"} id={el._id}/>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Images