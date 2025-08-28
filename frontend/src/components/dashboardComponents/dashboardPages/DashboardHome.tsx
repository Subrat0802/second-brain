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

   console.log("collectionState", collectionState);

  return (
    <div className="p-4 min-h-[91vh] dark:bg-[#080C13] ">
      <div className=" flex justify-between items-center">
        <p className="text-xl flex gap-1 justify-center items-center">
          <History width={18} /> Recent Activity{" "}
        </p>
        <div className="flex gap-3">
          <Button
            text={"Add Item"}
            size={"sm"}
            variant="primary"
            startIcon={<Plus />}
            onClick={handleClickAddItem}
          />
          {
            collectionState ? <Button text="Create" onClick={() => dispatch(setCreateCollectionState(!collectionState))}/> : 
            <Button text="Create Collection" onClick={() => dispatch(setCreateCollectionState(!collectionState))}/>
          }
        </div>
      </div>

      <div className=" w-full mt-10 flex gap-2 justify-between items-center ">
        <div className="flex gap-2 flex-wrap">
          <Button
            text="All"
            variant="fourth"
            size="xs"
            onClick={() => dispatch(setFilterAndSearchText(""))}
          />
          {/* <Button
            text="Last 24 hours"
            variant="fourth"
            size="xs"
            onClick={() => dispatch(setFilterAndSearchText("Last 24 hours"))}
          /> */}
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

        <div className="flex  border border-gray-800 p-2 gap-4 rounded-lg justify-center items-center">
          <button onClick={() => dispatch(setShowContent("rows"))}><Rows width={20} /></button>
          <button onClick={() => dispatch(setShowContent("grid"))}><Grid2x2 width={20}/></button>
          <button onClick={() => dispatch(setShowContent("eye"))}><ScanEye width={20}/></button>
        </div>
      </div>

      <ContentCard />
    </div>
  );
};

export default DashboardHome;
