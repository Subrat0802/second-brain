import type { LucideIcon } from "lucide-react"

export interface SectionProps {
    title: string,
    description: string,
    icon: LucideIcon,
    tag: string,
    time: string,
    icontwo: LucideIcon
}

const SectionTwoCard = ({icon:Icon ,title, description, tag, time, icontwo: IconTwo}:SectionProps ) => {
  return (
    <div className="w-full md:w-[48%] lg:w-[33%] border rounded-xl bg-white dark:bg-transparent pt-6 md:pt-10 pb-5 px-3 flex shadow-md flex-col gap-3 font-inter border-[#ebe7e7] dark:border-[#111624] ">
        <div className="flex justify-between items-center text-[#4B5563]">
            <p className="bg-[#ececec] dark:bg-[#0d121d]  font-bold w-fit p-2 md:p-3 rounded-xl"><Icon   size={20} className="md:w-6 md:h-6 text-primary" /></p>
            <p className="text-xs md:text-sm">{time}</p>
        </div>
        
        <div className=" my-3 md:my-5 px-1">
            <p className="text-lg md:text-xl font-medium mb-3 md:mb-5 dark:text-[#7F7F7F] text-[#172135]">{title}</p>
            <p className="text-sm md:text-base text-gray-700">{description}</p>
        </div>
        <div className="flex justify-between items-center text-[#4B5563] dark:text-gray-800">
            <p className="text-xs md:text-sm">{tag}</p>
            <IconTwo className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        
    </div>
  )
}

export default SectionTwoCard