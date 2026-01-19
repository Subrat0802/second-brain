
import Button from "../ui/Button"
import { FaRocket } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";
import { sectionOneData } from "../../data/homeSectionOneData";
import SectionOneCard from "../ui/SectionOneCard";
import { Link } from "react-router-dom";


const SectionOne = () => {
  return (
    <div className="min-h-[91dvh] flex flex-col justify-center items-center font-inter mb-10 pt-20 md:mb-0 px-4">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-14  mb-4 font-[500] ">Your Digital <span className="text-[#4B5563] ">Second Brain</span></p>
        <p className="text-center text-sm sm:text-md md:text-lg lg:text-xl mb-10 text-[#4B5563] font-semibold px-4">Save, organize, and rediscover your most important social media <br className="hidden md:block"/>  posts, links, and content in one beautiful place.</p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-14">
            <Link to={"/dashboard"}><Button startIcon={<FaRocket />} text="Start Saving Now" variant="secondary" size="sm"/></Link>
            <Button startIcon={<FaPlay />} text="Watch Demo" variant="tertiary" size="sm"/>
        </div>

        <div className="px-1 md:px-0 max-w-7xl w-full flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-14 justify-center ">
            {sectionOneData.map((el) => (
                <SectionOneCard key={el.id} icon={el.icon} title={el.title} description={el.description}/>
            ))}
        </div>

    </div>
  )
}

export default SectionOne