import { Brain, Plus } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <div className="h-[9vh] dark:border-b-2 dark:border-[#111827] ">
      <div className="max-w-7xl  h-full mx-auto flex justify-between items-center font-inter  text-[#111827] dark:text-[#7F7F7F] py-2 ">
        <div className="flex justify-center gap-2 items-center ">
          <div className="bg-[#1F2937] block p-3 rounded-xl">
            <Brain className="w-6 h-6 text-white dark:text-[#7F7F7F]" />
          </div>
          <p className="text-3xl font-medium tracking-tight">SecondBrain</p>
        </div>
        <div className="flex gap-6 justify-center items-center font-medium text-lg text-[#4B5563] dark:text-[#7F7F7F]">
          <p>Dashboard</p>
          <p>Collections</p>
          <p>Explore</p>
        </div>
        <div className="flex gap-4 justify-center items-center ">
          <button className="p-2 px-4 font-medium rounded-lg bg-[#080C13] text-white/60 dark:text-[#7F7F7F] dark:border border-[#7F7F7F] flex justify-center items-center gap-1">
            <Plus /> Add Link
          </button>
          <button className="p-2 px-4 font-medium rounded-lg bg-[#080C13] text-white/60 dark:text-[#7F7F7F] dark:border border-[#7F7F7F] flex ">
            Signup
          </button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
