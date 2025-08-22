/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Plus } from "lucide-react"
import Button from "../../ui/Button"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../../main";
import { setDialogState } from "../../../redux/slices/commonStates";
import LinkCard from "../dashBoardComponents/LinkCard";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const dialogState = useSelector((state: RootState) => state.commonState.dialogState);
  const userContent = useSelector((state: RootState) => state.commonState.userContent);

  const handleClickAddItem = () => {
    dispatch(setDialogState(!dialogState));
  }
  return (
    <div className="p-4 min-h-[91vh] dark:bg-[#080C13] md:pr-10">  
      <div className=" flex justify-between items-center">
        <p className="text-2xl">Hello User</p>
        <div>
          <Button text={"Add Item"}  size={"sm"} variant="primary" startIcon={<Plus />} onClick={handleClickAddItem}/>
        </div>
      </div>

      <div className="mt-14">
        <p>Recent Added Social Media Links</p>
      </div>

      {/* all posts  */}
      <div className="md:columns-3 columns-1 gap-6  w-full ">
      {
        //@ts-ignore
        !userContent ? <p>Loading..</p> : userContent.map((el) => (
          <div key={el._id} className="mb-9 break-inside-avoid  rounded-xl w-[]">
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