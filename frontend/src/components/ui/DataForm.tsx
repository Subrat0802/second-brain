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
      className="mx-auto p-6 rounded-xl w-[35%] bg-[#1F2937] text-[#FFFFFF]"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center">
        <p className="text-2xl ">Add New Items</p>
        <p>x</p>
      </div>
      <div className="flex my-3 justify-between items-center mb-6 rounded-xl p-1 bg-[#374151]">
        <div className={`text-center w-full p-2 ${selectedTag === "Link" && "bg-[#4B5563]"} rounded-xl cursor-pointer`} onClick={(e) => clickHandler(e)}>
          <p>Link</p>
        </div>
        <div className={`text-center w-full p-2 ${selectedTag === "Images" && "bg-[#4B5563]"} rounded-xl cursor-pointer`} onClick={(e) => clickHandler(e)}>
          <p>Images</p>
        </div>
        <div  className={`text-center w-full p-2 ${selectedTag === "Notes" && "bg-[#4B5563]"} rounded-xl cursor-pointer`} onClick={(e) => clickHandler(e)}>
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
