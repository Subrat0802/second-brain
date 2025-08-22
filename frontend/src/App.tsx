import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./components/dashboardComponents/dashboardPages/DashboardHome";
import Discover from "./components/dashboardComponents/dashboardPages/Discover";
import Saved from "./components/dashboardComponents/dashboardPages/Saved";
import Links from "./components/dashboardComponents/dashboardPages/Links";
import Images from "./components/dashboardComponents/dashboardPages/Images";
import Collections from "./components/dashboardComponents/dashboardPages/Collections";
import Profile from "./components/dashboardComponents/dashboardPages/Profile";
import Test from "./pages/Test";
import Auth from "./pages/Auth";
import Signup from "./components/authComponents/Signup";
import Signin from "./components/authComponents/Signin";
import ProtectedRoute from "./services/ProtectedRoute";
import useGetUser from "./services/getUserHook";

function App() {
  
  useGetUser();
  return (
    <div className="min-h-screen bg-white dark:bg-[#080C13] text-black dark:text-[#7F7F7F] ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}>
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="discover" element={<Discover />} />
            <Route path="saved" element={<Saved />} />
            <Route path="links" element={<Links />} />
            <Route path="images" element={<Images />} />
            <Route path="collections" element={<Collections />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
