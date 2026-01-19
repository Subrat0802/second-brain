/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector } from "react-redux"
import type { RootState } from "../../../main"
import GridContent from "../../ui/GridContent";

const Saved = () => {

  const savedItem = useSelector((state: RootState) => state.commonState.userContent?.savedItem) || [];
  return (
    <div className="p-2 sm:p-4 min-h-[91vh] dark:bg-[#080C13]">
      <p className="py-3 sm:py-5 text-lg sm:text-xl">Saved items</p>
      {
        //@ts-ignore
        savedItem.map((el) => {
          return <div key={el._id} className="mb-3 sm:mb-5">
            <GridContent  contentType={el.contentType} title={el.title} description={el.description} type={el.type} 
            createdAt={el.createdAt} link={el.link} image={el.image}  contentShowType={"rows"}id={el.id} saved={true}/>
          </div>  
        })
      } 
    </div>
  )
}

export default Saved