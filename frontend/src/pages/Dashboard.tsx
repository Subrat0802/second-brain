import Sidebar from "../components/ui/Sidebar";

const Dashboard = () => {
  return (
    <div className="min-h-[100dvh] font-inter relative">
  
      <Sidebar />

      
      <div className="md:ml-[180px] ml-[47px]  h-[100vh] border-b-4 border-red-700 pt-[10dvh]">
        <div className="border-green-700 border w-full h-full">
            
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
