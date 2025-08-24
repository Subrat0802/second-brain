import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";
// import SidebarProfile from "../components/ui/SidebarProfile";
import Dialog from "../components/ui/Dialog";
// import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../main";
// import { useEffect } from "react";
// import { getUser } from "../services/operations/auth";
// import { setUserContent } from "../redux/slices/commonStates";
import { useSelector } from "react-redux";
import SidebarProfile from "../components/ui/SidebarProfile";
import useGetUser from "../services/getUserHook";



const Dashboard = () => {
   useGetUser();
  // window.location.reload();
  const stateDialog = useSelector((state: RootState) => state.commonState.dialogState);
  
  return (
    <div className=" font-inter relative flex ">

      {
        stateDialog && <Dialog />
      }
      
  
      <Sidebar />

      
      <div className="md:ml-[192px] ml-[45px] md:mr-[270px] w-full h-[91vh] mt-[9vh]  ">
        <Outlet />
      </div>

      <SidebarProfile />
      
    </div>
  );
};

export default Dashboard;
