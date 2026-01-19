import { sectionThreeData } from "../../data/homeSectionThreeData"
import SectionThreeCard from "../ui/SectionThreeCard"
import { sectionThreeDataTwo } from "../../data/sectionThreeDatatwo"
// import geminiImage from "../../../public/gemini3.png"÷


const SectionThree = () => {
  return (
    <div className="min-h-[50dvh] bg-white dark:bg-[#080C13] w-full font-inter py-8 md:py-16 md:pb-10 px-4">
        <div className=" md:p-0 max-w-7xl mx-auto py-8 md:py-14 ">
            <div className="mx-auto w-fit text-center mb-6 md:mb-7 ">
                <p className="text-[20px] sm:text-[24px] md:text-[36px] lg:text-[42px]">Powerful Featues</p>
                <p className="text-[#4B5563] text-xs sm:text-sm md:text-base lg:text-lg font-medium px-4">Everything you need to build your digital scored brain</p>
            </div>

            <div className="  p-2 md:p-0 flex flex-col lg:flex-row gap-4 md:gap-6 ">
                <div className=" md:py-7 w-[100%] lg:w-[50%] flex flex-col justify-center">
                    {
                        sectionThreeData.map((el) => (
                            <SectionThreeCard key={el.id} title={el.title} Icon={el.Icon} description={el.description}/>
                        ))
                    }
                </div>
                <div className=" md:py-7 w-[100%] lg:w-[50%] flex flex-col justify-center">
                    {
                        sectionThreeDataTwo.map((el) => (
                            <SectionThreeCard key={el.id} title={el.title} Icon={el.Icon} description={el.description}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionThree