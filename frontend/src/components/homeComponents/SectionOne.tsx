
import Button from "../ui/Button"
import { FaRocket } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { sectionOneData } from "../../data/homeSectionOneData";
import SectionOneCard from "../ui/SectionOneCard";


const SectionOne = () => {
  return (
    <div className="min-h-[91dvh] flex flex-col justify-center items-center font-inter mb-10 md:mb-0">
        <p className="text-6xl text-center mt-14  mb-4 font-[500] ">Your Digital <span className="text-[#4B5563] ">Second Brain</span></p>
        <p className="text-center text-md md:text-xl mb-10 text-[#4B5563] font-semibold">Save, organize, and rediscover your most important social media <br className="hidden md:block"/>  posts, links, and content in one beautiful place.</p>

        <div className="flex gap-4 mb-14">
            <Button startIcon={<FaRocket />} text="Start Saving Now" varient="secondary" size="sm"/>
            <Button startIcon={<FaPlay />} text="Watch Demo" varient="tertiary" size="sm"/>
        </div>

        <div className="px-1 md:px-0 max-w-7xl w-full flex flex-col md:flex-row gap-6 md:gap-14 justify-center ">
            {sectionOneData.map((el) => (
                <SectionOneCard key={el.id} icon={el.icon} title={el.title} description={el.description}/>
            ))}
        </div>

    </div>
  )
}

export default SectionOne