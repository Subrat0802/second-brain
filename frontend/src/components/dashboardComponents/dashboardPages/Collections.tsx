/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector } from "react-redux";
import type { RootState } from "../../../main";
import CollectionCard from "../../ui/CollectionCard";


const Collections = () => {
  const savedItem = useSelector((state: RootState) => state.commonState.userContent?.collections) || [];
  return (
    <div className="p-4 min-h-[91vh] dark:bg-[#080C13]">
      <p className="py-5 text-xl">Collections</p>
      <div className="grid grid-cols-3 gap-7">
      {
        //@ts-ignore
        savedItem.map((el) => {
          return <div key={el._id} className="mb-5">
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