/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Grid2x2, History, Plus, Rows, ScanEye } from "lucide-react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../main";
import {setCreateCollectionState, setDialogState, setFilterAndSearchText, setShowContent} from "../../../redux/slices/commonStates";
import { ContentCard } from "../dashBoardComponents/ContentCard";
// import LinkCard from "../dashBoardComponents/LinkCard";
// import type { Key } from "react";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const dialogState = useSelector((state: RootState) => state.commonState.dialogState);

  //@ts-ignore
  // const userContent = useSelector((state: RootState) => state.commonState.userContent?.content) ?? [];

  // const searchAndFilterText = useSelector((state: RootState) => state.commonState.filterAndSearchText) ?? "";

  const handleClickAddItem = () => {
    dispatch(setDialogState(!dialogState));
  };

   const collectionState = useSelector((state: RootState) => state.commonState.createCollectionState);

  //  console.log("collectionState", collectionState);

  return (
    <div className="p-2 sm:p-4 min-h-[91vh] dark:bg-[#080C13] ">
      <div className=" flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
        <p className="text-lg sm:text-xl flex gap-1 justify-center items-center">
          <History width={16} className="sm:w-[18px]" /> Recent Activity{" "}
        </p>
        <div className="flex gap-2 sm:gap-3 flex-wrap">
          <Button
            text={"Add Item"}
            size={"sm"}
            variant="secondary"
            startIcon={<Plus />}
            onClick={handleClickAddItem}
          />
          {
            collectionState ? <Button text="Create" onClick={() => dispatch(setCreateCollectionState(!collectionState))}/> : 
            <Button text="Create Collection" onClick={() => dispatch(setCreateCollectionState(!collectionState))}/>
          }
        </div>
      </div>

      <div className=" w-full mt-6 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-2 justify-between items-start sm:items-center ">
        <div className="flex gap-2 flex-wrap">
          <Button
            text="All"
            variant="fourth"
            size="xs"
            onClick={() => dispatch(setFilterAndSearchText(""))}
          />
          <Button
            text="Instagram"
            variant="fourth"
            size="xs"
            onClick={() => dispatch(setFilterAndSearchText("Instagram"))}
          />
          <Button
            text="Youtube"
            variant="fourth"
            size="xs"
            onClick={() => dispatch(setFilterAndSearchText("Youtube"))}
          />
          <Button
            text="Twitter"
            variant="fourth"
            size="xs"
            onClick={() => dispatch(setFilterAndSearchText("X"))}
          />
          <Button
            text="Other"
            variant="fourth"
            size="xs"
            onClick={() => dispatch(setFilterAndSearchText("Other"))}
          />
        </div>

        <div className="flex  border dark:border-gray-800 p-1.5 sm:p-2 gap-2 sm:gap-4 rounded-lg justify-center items-center">
          <button onClick={() => dispatch(setShowContent("rows"))}><Rows width={18} className="sm:w-5" /></button>
          <button onClick={() => dispatch(setShowContent("grid"))}><Grid2x2 width={18} className="sm:w-5"/></button>
          <button onClick={() => dispatch(setShowContent("eye"))}><ScanEye width={18} className="sm:w-5"/></button>
        </div>
      </div>

      <ContentCard />
    </div>
  );
};

export default DashboardHome;
