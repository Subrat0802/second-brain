import type { LucideIcon } from "lucide-react"

export interface SectionProps {
    icon: LucideIcon,
    title: string,
    description: string
}

const SectionOneCard = ({icon: Icon, title, description}: SectionProps) => {
  return (
    <div className="w-full md:w-[48%] lg:w-[22%] bg-white dark:bg-transparent border rounded-xl py-6 md:py-10 px-3 flex shadow-md flex-col gap-3 font-inter border-[#ebe7e7] dark:border-[#161b2d] ">
        <p className="bg-[#ececec] dark:bg-[#0d121d] text-[#4B5563] font-bold w-fit p-2 md:p-3 rounded-xl"><Icon size={20} className="md:w-6 md:h-6 text-primary" /></p>
        <div className="text-center mt-3 px-1">
            <p className="text-lg md:text-xl font-medium mb-2 dark:text-[#7F7F7F] text-[#172135]">{title}</p>
            <p className="text-sm md:text-base text-gray-700">{description}</p>
        </div>
        
    </div>
  )
}

export default SectionOneCard