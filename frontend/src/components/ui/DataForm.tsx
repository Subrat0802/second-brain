import React, { useState } from "react";
import LinkForm from "../dashboardComponents/dashBoardComponents/LinkForm";
import ImageForm from "../dashboardComponents/dashBoardComponents/ImageForm";
import NotesForm from "../dashboardComponents/dashBoardComponents/NotesForm";

const DataForm = () => {
  const [selectedTag, setSelectedTag] = useState("Link");

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = e.currentTarget.querySelector("p")?.innerText ?? "";
    setSelectedTag(text);
  }
  return (
    <div
      className="mx-auto p-6 rounded-xl w-[35%] font-inter dark:bg-[#252A31] bg-white text-[#FFFFFF]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center text-black dark:text-[#FFFFFF]">
        <p className="text-2xl ">Add New Items</p>
        <p>x</p>
      </div>
      <div className="flex my-3 justify-between items-center mb-6 rounded-xl p-1 bg-[#0F151D]">
        <div className={`text-center w-full p-2 ${selectedTag === "Link" && "bg-[#24282e]"} rounded-xl cursor-pointer`} onClick={(e) => clickHandler(e)}>
          <p>Link</p>
        </div>
        <div className={`text-center w-full p-2 ${selectedTag === "Images" && "bg-[#24282e]"} rounded-xl cursor-pointer`} onClick={(e) => clickHandler(e)}>
          <p>Images</p>
        </div>
        <div  className={`text-center w-full p-2 ${selectedTag === "Notes" && "bg-[#24282e]"} rounded-xl cursor-pointer`} onClick={(e) => clickHandler(e)}>
          <p>Notes</p>
        </div>
      </div>
      {
        selectedTag === "Link" && <LinkForm />
      }
      {
        selectedTag === "Images" && <ImageForm />
      }
      {
        selectedTag === "Notes" && <NotesForm />
      }
      
    </div>
  );
};

export default DataForm;
