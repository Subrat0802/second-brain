import { Bell, Brain, Menu, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Button from "../ui/Button";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../main";
import { useEffect, useState, type ChangeEvent } from "react";
import InputTag from "../ui/InputTag";
import { setFilterAndSearchText } from "../../redux/slices/commonStates";


const Header = () => {
  const [token, setToken] = useState("");
  const [onHover, setOnHover] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split("/");
  const navigate = useNavigate();
  const t1 = useSelector((state: RootState) => state.authState.token);
  const dispatch = useDispatch();

  useEffect(() => {
    setToken(t1);
  }, [t1]);

  const handleOnMouseOver = () => {
    setOnHover(true)
  }
  const handleOnMouseLeave = () => {
    setOnHover(false)
  }

  const handleLogout = () => {
  document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

  console.log("Token cleared");
  navigate("/")
  window.location.reload(); 
};

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    dispatch(setFilterAndSearchText(e.target.value));
  }

  // const filterAndSearchText = useSelector((state: RootState) => state.commonState.filterAndSearchText);

   return (
    <div
      className={`h-[9vh] ${
        path[1] === "dashboard" && "border-b-2 "
      } dark:border-b-2 dark:border-[#111827] px-3 md:px-0 fixed w-full z-30 bg-white dark:bg-[#080C13] `}
    >
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center font-inter  text-[#111827] dark:text-[#7F7F7F] py-2 ">
        <NavLink to={"/"}>
          <div className="flex justify-center gap-2 items-center ">
            <div className="bg-[#1F2937] block p-2 md:p-3 rounded-xl">
              <Brain className="w-6 h-6 text-white dark:text-[#7F7F7F]" />
            </div>
            <p className="text-2xl md:text-3xl font-medium  tracking-tight">
              SecondBrain
            </p>
          </div>
        </NavLink>
        <div className={`md:flex gap-6 hidden  justify-center items-center font-medium text-lg text-[#4B5563] dark:text-[#7F7F7F] ${token ? "pl-24" : "pl-0"}`}>
          <p>Dashboard</p>
          <p>Collections</p>
          <p>Explore</p>
        </div>
        <div className="hidden md:flex gap-4 justify-center items-center">
          {/* <Button text="Add Link" startIcon={<Plus />} varient="primary" size="sm"/> */}

          {token ? (
            <div className="flex justify-center items-center gap-4 ">
              <div>
                <InputTag type="text" placeText="Search Your Content." classStyle="rounded-full" id="search" onChange={handleChange}/>
              </div>
              <Bell />
              <div className="relative cursor-pointer" onClick={handleOnMouseOver}  >
                <div className="" >
                  <User />
                </div>
                <div className={`absolute right-0 mt-1 p-2 rounded-lg text-md bg-[#0F141B] ${onHover ? "block": "hidden"}`}>
                  <ul className="flex px-3  flex-col gap-3 text-lg text-white/50" onMouseLeave={handleOnMouseLeave}>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <>
              <NavLink to={"/auth/signup"}>
                <Button text="Sign up" variant="primary" size="sm" />
              </NavLink>
              <NavLink to={"/auth/signin"}>
                <Button text="Sign in" variant="primary" size="sm" />
              </NavLink>
            </>
          )}

          <ThemeToggle />
        </div>
        <div className="text-2xl md:hidden flex justify-center gap-2 items-center">
          <Menu className="w-8 h-8" />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
