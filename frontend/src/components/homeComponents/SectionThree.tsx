import { sectionThreeData } from "../../data/homeSectionThreeData"
import SectionThreeCard from "../ui/SectionThreeCard"
import geminiImage from "../../../public/gemini3.png"


const SectionThree = () => {
  return (
    <div className="min-h-[50dvh] bg-white dark:bg-[#080C13] w-full font-inter md:py-16 md:pb-10">
        <div className=" md:p-0 max-w-7xl mx-auto py-14 ">
            <div className="mx-auto w-fit text-center md:mb-7 ">
                <p className="text-[24px] md:text-[42px]">Powerful Featues</p>
                <p className="text-[#4B5563] text-sm md:text-lg font-medium ">Everything you need to build your digital scored brain</p>
            </div>

            <div className="  p-2 md:p-0 flex flex-col md:flex-row gap-4 ">
                <div className=" md:py-7 w-[100%] md:w-[50%] flex flex-col justify-center">
                    {
                        sectionThreeData.map((el) => (
                            <SectionThreeCard key={el.id} title={el.title} Icon={el.Icon} description={el.description}/>
                        ))
                    }
                </div>
                <div className=" p-2 md:w-[50%]  ">
                    <img className="w-[100%] md:h-96 rounded-xl shadow-md border-r border-white/20" src={geminiImage}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionThree