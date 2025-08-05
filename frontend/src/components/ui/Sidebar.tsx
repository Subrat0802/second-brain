import {
  Home,
  Compass,
  Bookmark,
  Link,
  Image ,
  Folder,
  User,
} from "lucide-react";

// import { Sidebar } from "lucide-react"
const Sidebar = () => {
  return (
    <div className="fixed text-[#4B5563] dark:text-[#7F7F7F] px-1 md:px-0 md:pl-3 border-r-2  dark:border-r-2 dark:border-[#111827] md:pr-10 h-screen flex pt-[10dvh]">
      <div className="  p-2 h-full flex flex-col gap-7">
        <div className="flex gap-2 text-md justify-start items-center">
          <Home width={20} height={20} />
          <p className="hidden md:block">Home</p>
        </div>
        <div className="flex gap-2 text-md justify-start items-center">
          <Compass width={20} height={20} />
          <p className="hidden md:block">Discover</p>
        </div>
        <div className="flex gap-2 text-md justify-start items-center">
          <Bookmark width={20} height={20} />

          <p className="hidden md:block">Bookmark</p>
        </div>
        <div className="flex gap-2 text-md justify-start items-center">
          <Link width={20} height={20} />

          <p className="hidden md:block">Link</p>
        </div>
        <div className="flex gap-2 text-md justify-start items-center">
          <Image  width={20} height={20} />

          <p className="hidden md:block">Images</p>
        </div>
        <div className="flex gap-2 text-md justify-start items-center">
          <Folder width={20} height={20} />

          <p className="hidden md:block">Collections</p>
        </div>
        <div className="flex gap-2 text-md justify-start items-center">
          <User width={20} height={20} />
          <p className="hidden md:block">Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
