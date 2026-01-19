
export interface SectionProps {
    Icon: React.ElementType,
    title: string,
    description: string
}

const SectionThreeCard = ({Icon, title, description}:SectionProps ) => {
  return (
    <div className="flex items-center gap-3 md:gap-5 py-4 md:py-7 px-2 md:px-0">
        <p className="text-[#ececec] bg-[#0d121d]  font-bold w-fit p-2 md:p-3 rounded-xl "><Icon   size={20} className="md:w-6 md:h-6 text-primary" /></p>
        <div>
            <p className="text-lg md:text-xl font-medium dark:text-[#7F7F7F] text-[#172135]">{title}</p>
            <p className="text-gray-700 text-sm md:text-base">{description}</p>
        </div>
    </div>
  )
}

export default SectionThreeCard