/* eslint-disable @typescript-eslint/ban-ts-comment */
import { History, Plus } from "lucide-react"
import Button from "../../ui/Button"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../../main";
import { setDialogState } from "../../../redux/slices/commonStates";
import LinkCard from "../dashBoardComponents/LinkCard";
// import InputTag from "../../ui/InputTag";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const dialogState = useSelector((state: RootState) => state.commonState.dialogState);
  //@ts-ignore
  const userContent = useSelector((state: RootState) => state.commonState.userContent?.content) ?? null;

  const handleClickAddItem = () => {
    dispatch(setDialogState(!dialogState));
  }
  return (
    <div className="p-4 min-h-[91vh] dark:bg-[#080C13] ">  
      <div className=" flex justify-between items-center">
        <p className="text-xl flex gap-1 justify-center items-center"><History width={18} /> Recent Activity </p>
        <div className="flex gap-3">
          <Button text={"Add Item"}  size={"sm"} variant="primary" startIcon={<Plus />} 
            onClick={handleClickAddItem}/>
          <Button text="Create Collection"/>
        </div>
      </div>

      <div className=" w-full mt-10 flex gap-2">
        {/* <InputTag placeText="Search your content here..." labelText={""} id={""} type={""}/> */}
        {/* <div className="flex gap-2 flex-wrap">
          <Button text="Last 24 hours" variant="primary"/>
          <Button text="Instagram" variant="primary"/>
          <Button text="Youtube" variant="primary"/>
          <Button text="Twitter" variant="primary"/>
          <div className="">

          </div>
        </div> */}
      </div>

      {/* all posts  */}
      <div className="md:columns-2 columns-1 gap-6  w-full overflow-x-hidden mt-10">
      {
        //@ts-ignore
        !userContent ? <p>Loading..</p> : userContent.map((el) => (
          <div key={el._id} className="mb-9 break-inside-avoid  rounded-xl w-[100%]">
            <LinkCard
            key={el._id}
            contentType={el.contentType}
            title={el.title}
            description={el.description}
            type={el.type}
            link={el.link}
            createdAt={el.createdAt}
          />  

          </div>

          
        ))
      }
      </div>
    </div>
  )
}

export default DashboardHome