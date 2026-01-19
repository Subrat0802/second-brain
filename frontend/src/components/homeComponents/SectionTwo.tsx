import { CircleEllipsis, Filter, Grid2x2 } from "lucide-react";
import SectionTwoCard from "../ui/SectionTwoCard";
import { sectionTwoDataa } from "../../data/homeSectionTwoDataa";

const SectionTwo = () => {
  return (
    <div className="min-h-[50dvh] w-full  bg-white dark:bg-[#080C13] flex flex-col py-8 md:py-14 items-center font-inter px-4">
      <div className="text-center ">
        <p className="text-[20px] sm:text-[24px] md:text-[36px] lg:text-[42px] ">Your Personal Content Library</p>
        <p className="text-[#4B5563] text-xs sm:text-sm md:text-base lg:text-lg font-medium px-4">
          Organize your saved content with collections, tags, and smart tilters
        </p>
      </div>

      <div className="md:border mt-6 md:mt-10 md:border-[#ecebeb] p-3 md:p-4 w-full max-w-7xl md:pb-5 md:bg-[#F6F7F9] dark:bg-[#080C13] md:dark:border-[#161b2d] md:rounded-xl md:shadow-md">
        <div className="w-full mb-4 md:mb-7 max-w-7xl md:mt-4 flex flex-col sm:flex-row justify-between gap-3 sm:gap-5  items-start sm:items-center">
          <div className="flex items-center gap-2 md:gap-4 ">
            <p className="text-lg md:text-xl lg:text-2xl ">My Collections</p>
            <p className="text-xs md:text-sm text-[#4B5563] bg-[#ececec] dark:bg-[#080C13] dark:border dark:border-[#161b2d] px-2 md:px-4 py-0.5 md:py-1 rounded-full">
              247
            </p>
          </div>
          <div className="flex gap-2 text-[#4B5563] items-center ">
            <Grid2x2 width={16} className="md:w-[18px]"/>
            <Filter width={16} className="md:w-[18px]"/>
            <CircleEllipsis width={16} className="md:w-[18px]"/>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 lg:gap-8">

        {
          sectionTwoDataa.map((el) => {
            return <SectionTwoCard key={el.id} icon={el.icon} title={el.title} description={el.description} icontwo={el.icontwo} tag={el.tag} time={el.time}/>
          })
        }
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
