import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";
import SidebarProfile from "../components/ui/SidebarProfile";
import Dialog from "../components/ui/Dialog";
import { useSelector } from "react-redux";
import type { RootState } from "../main";



const Dashboard = () => {

  const stateDialog = useSelector((state: RootState) => state.commonState.dialogState);
  
  return (
    <div className="min-h-[200dvh] font-inter relative flex">

      {
        stateDialog && <Dialog />
      }
      
  
      <Sidebar />

      
      <div className="md:ml-[192px] ml-[45px] w-full md:mr-[300px] h-[91vh] mt-[9vh]">
        <Outlet />
      </div>

      <SidebarProfile />
      
    </div>
  );
};

export default Dashboard;
