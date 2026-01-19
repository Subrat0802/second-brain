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
      className="mx-auto p-4 sm:p-6 rounded-xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] font-inter dark:bg-[#1f252d] bg-white text-[#FFFFFF]/70"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-6 sm:mb-8 text-black dark:text-[#FFFFFF]">
        <p className="text-xl sm:text-2xl font-semibold font-poppins text-white/80">Add New Items</p>
        <p className="text-lg sm:text-xl">x</p>
      </div>
      <div className="flex my-3 justify-between items-center mb-4 sm:mb-6 rounded-xl p-1 bg-gray-400 dark:bg-[#0F151D]">
        <div className={`text-center w-full p-1.5 sm:p-2  ${selectedTag === "Link" && "bg-[#24282e] text-white "}  dark:text-white/80 rounded-xl text-black cursor-pointer text-sm sm:text-base`} onClick={(e) => clickHandler(e)}>
          <p className="">Link</p>
        </div>
        <div className={`text-center w-full p-1.5 sm:p-2  ${selectedTag === "Images" && "bg-[#24282e] text-white "} rounded-xl dark:text-white/80 text-black cursor-pointer text-sm sm:text-base`} onClick={(e) => clickHandler(e)}>
          <p>Images</p>
        </div>
        <div  className={`text-center w-full p-1.5 sm:p-2  ${selectedTag === "Notes" && "bg-[#24282e] text-white "}  dark:text-white/80 rounded-xl text-black cursor-pointer text-sm sm:text-base`} onClick={(e) => clickHandler(e)}>
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
