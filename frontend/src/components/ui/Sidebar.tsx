import { useState } from "react";
import { sideBarData } from "../../data/SideBarElementData";
import SidebarElement from "./SidebarElement";

const Sidebar = () => {
  const [clikedPage, setClickedPage] = useState("Home");

  console.log("clicked page", clikedPage);

  function onClickHandle(e: React.MouseEvent<HTMLDivElement>) {
    const text = e.currentTarget.querySelector("p")?.innerText;
    setClickedPage(text ?? "");
  }
  return (
    <div className="dark:bg-[#080C13] fixed text-[#4B5563] dark:text-[#7F7F7F] border-r-2  dark:border-r-2 dark:border-[#111827] h-screen flex pt-[10dvh]">
      <div className="h-full flex flex-col gap-3 md:p-3 ">

        {
          sideBarData.map((el) => (
            <SidebarElement title={el.title} Icon={el.Icon} link={el.link} clikedPage={clikedPage} onClick={(e) => onClickHandle(e)}/>
          ))
        }
      </div>
    </div>
  );
};

export default Sidebar;
