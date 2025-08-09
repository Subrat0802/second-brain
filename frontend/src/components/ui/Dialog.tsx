import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../main";
import { setDialogState } from "../../redux/slices/commonStates";

const Dialog = () => {

    const dispatch = useDispatch();
    const dialogState = useSelector((state: RootState) => state.commonState.dialogState);

    const setDialogHandle = () => {
        dispatch(setDialogState(!dialogState))
    }
  return (
    <div className="fixed w-[100dvw] h-[100dvh] z-40">
      {/* Semi-transparent overlay */}
      <div className="relative bg-black/50">
        <div
          className="w-full h-[100dvh] flex justify-center items-center"
          onClick={setDialogHandle}
        >
          <div className="mx-auto border p-3 w-[35%] bg-[#1F2937]">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
