/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Grid2x2, History, Plus, Rows, ScanEye } from "lucide-react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../main";
import {setDialogState, setFilterAndSearchText, setShowContent} from "../../../redux/slices/commonStates";
import LinkCard from "../dashBoardComponents/LinkCard";
import type { Key } from "react";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const dialogState = useSelector((state: RootState) => state.commonState.dialogState);

  //@ts-ignore
  const userContent = useSelector((state: RootState) => state.commonState.userContent?.content) ?? [];

  const searchAndFilterText = useSelector((state: RootState) => state.commonState.filterAndSearchText) ?? "";

  const handleClickAddItem = () => {
    dispatch(setDialogState(!dialogState));
  };

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
          <Button text="Create Collection" />
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


      <div className="md:columns-2 columns-1 gap-6  w-full overflow-x-hidden mt-10">
       
          {
            //@ts-ignore
            userContent.length === 0 ? (
              <p>Loading..</p>
            ) : (
              userContent
                //@ts-ignore
                .filter(
                  (el: { type?: string;
                    title?: string;
                    description?: string;
                  }) => {
                    if (!searchAndFilterText) return true; 
                    const type = el.type?.toLowerCase() ?? "";
                    const title = el.title?.toLowerCase() ?? "";
                    const desc = el.description?.toLowerCase() ?? "";

                    return (
                      type.includes(searchAndFilterText.toLowerCase()) ||
                      title.includes(searchAndFilterText.toLowerCase()) ||
                      desc.includes(searchAndFilterText.toLowerCase())
                    );
                  }
                )
                .map(
                  (el: {
                    _id: Key | null | undefined;
                    contentType: string;
                    title: string;
                    description: string;
                    type: string;
                    link: string;
                    createdAt: string;
                    image: string;
                  }) => (
                    <div
                      key={el._id}
                      className="mb-9 break-inside-avoid rounded-xl w-[100%] "
                    >
                      <LinkCard
                        contentType={el.contentType}
                        title={el.title}
                        description={el.description}
                        type={el.type}
                        link={el.link}
                        createdAt={el.createdAt}
                        image={el.image}
                      />
                    </div>
                  )
                )
            )
          }

      </div>
    </div>
  );
};

export default DashboardHome;
