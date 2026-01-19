/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector } from "react-redux";
import type { RootState } from "../../../main";
import CollectionCard from "../../ui/CollectionCard";


const Collections = () => {
  const savedItem = useSelector((state: RootState) => state.commonState.userContent?.collections) || [];
  return (
    <div className="p-2 sm:p-4 min-h-[91vh] dark:bg-[#080C13]">
      <p className="py-3 sm:py-5 text-lg sm:text-xl">Collections</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7">
      {
        //@ts-ignore
        savedItem.map((el) => {
          return <div key={el._id} className="mb-3 sm:mb-5">
            <CollectionCard collectionName={el.collectionName} description={el.description} createdAt={el.createdAt}
             username={el.createdBy.username} />
          </div>  
        })
      } 
      </div>
    </div>
  )
}

export default Collections