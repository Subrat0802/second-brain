
export interface SectionProps {
    Icon: React.ElementType,
    title: string,
    description: string
}

const SectionThreeCard = ({Icon, title, description}:SectionProps ) => {
  return (
    <div className="flex items-center gap-5 py-7 px-2 md:px-0 md:py-7 md:pr- ">
        <p className="text-[#ececec] bg-[#0d121d]  font-bold w-fit p-3 rounded-xl "><Icon   size={24} className="text-primary" /></p>
        <div>
            <p className="text-xl font-medium dark:text-[#7F7F7F] text-[#172135]">{title}</p>
            <p className="text-gray-700 text-[16px]">{description}</p>
        </div>
    </div>
  )
}

export default SectionThreeCard