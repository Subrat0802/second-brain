import { CircleEllipsis, Filter, Grid2x2 } from "lucide-react";
import { sectionTwoData } from "../../data/HomeSectionTwoData";
import SectionTwoCard from "../ui/SectionTwoCard";

const SectionTwo = () => {
  return (
    <div className="min-h-[50dvh] w-full  bg-white dark:bg-[#080C13] flex flex-col py-14 items-center font-inter">
      <div className="text-center ">
        <p className="text-[42px] ">Your Personal Content Library</p>
        <p className="text-[#4B5563] text-lg font-medium">
          Organize your saved content with collections, tags, and smart tilters
        </p>
      </div>

      <div className="border mt-10 border-[#ecebeb] p-4 w-full max-w-7xl pb-5 bg-[#F6F7F9] dark:bg-[#080C13] dark:border-[#111624] rounded-xl shadow-md">
        <div className="w-full mb-7 max-w-7xl  flex justify-between gap-5 items-center">
          <div className="flex items-center gap-4">
            <p className="text-2xl ">My Collections</p>
            <p className="text-sm text-[#4B5563] bg-[#ececec] dark:bg-[#080C13] dark:border dark:border-[#111624] px-4 py-1 rounded-full">
              247
            </p>
          </div>
          <div className="flex gap-2 text-[#4B5563] items-center ">
            <Grid2x2 width={18}/>
            <Filter width={18}/>
            <CircleEllipsis width={18}/>
          </div>
        </div>

        {/* cards */}
        <div className="flex justify-between gap-8">

        {
          sectionTwoData.map((el) => {
            return <SectionTwoCard key={el.id} icon={el.icon} title={el.title} description={el.description} icontwo={el.icontwo} tag={el.tag} time={el.time}/>
          })
        }
        
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
