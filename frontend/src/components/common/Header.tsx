import { Brain } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Button from "../ui/Button";

const Header = () => {
  return (
    <div className="h-[9vh] dark:border-b-2 dark:border-[#111827] ">
      <div className="max-w-7xl  h-full mx-auto flex justify-between items-center font-inter  text-[#111827] dark:text-[#7F7F7F] py-2 ">
        <div className="flex justify-center gap-2 items-center ">
          <div className="bg-[#1F2937] block p-3 rounded-xl">
            <Brain className="w-6 h-6 text-white dark:text-[#7F7F7F]" />
          </div>
          <p className="text-3xl font-medium  tracking-tight">SecondBrain</p>
        </div>
        <div className="flex gap-6 justify-center items-center font-medium text-lg text-[#4B5563] dark:text-[#7F7F7F]">
          <p>Dashboard</p>
          <p>Collections</p>
          <p>Explore</p>
        </div>
        <div className="flex gap-4 justify-center items-center ">
          {/* <Button text="Add Link" startIcon={<Plus />} varient="primary" size="sm"/> */}
          <Button text="Sign up" varient="primary" size="sm"/>
          <Button text="Sign in" varient="primary" size="sm"/>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
