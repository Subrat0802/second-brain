import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";
import SidebarProfile from "../components/ui/SidebarProfile";

const Dashboard = () => {
  return (
    <div className="min-h-[100dvh] font-inter relative flex">
  
      <Sidebar />

      
      <div className="md:ml-[192px] ml-[45px] w-full md:mr-[300px] h-[91vh] mt-[9vh]">
        <Outlet />
      </div>

      <SidebarProfile />
      
    </div>
  );
};

export default Dashboard;
