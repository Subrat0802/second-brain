/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector } from "react-redux";
import type { RootState } from "../../../main";
import GridContent from "../../ui/GridContent";

const Images = () => {

  const linksContent = useSelector((state:RootState) => state.commonState.userContent?.content) ?? [];
  return (
    <div className="p-2 sm:p-3 font-inter dark:bg-[#080C13]">
      <p className="text-lg sm:text-xl py-3 sm:py-4 pb-6 sm:pb-10">All Images</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 ">
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