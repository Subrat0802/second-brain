import { Plus } from "lucide-react"
import Button from "../../ui/Button"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../../main";
import { setDialogState } from "../../../redux/slices/commonStates";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const dialogState = useSelector((state: RootState) => state.commonState.dialogState);
  const handleClickAddItem = () => {
    dispatch(setDialogState(!dialogState));
  }
  return (
    <div className="p-4 min-h-[91vh]">  
    
      <div className=" flex justify-between items-center">
        <p className="text-2xl">Hello User</p>
        <div>
          <Button text={"Add Item"}  size={"sm"} varient="primary" startIcon={<Plus />} onClick={handleClickAddItem}/>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome