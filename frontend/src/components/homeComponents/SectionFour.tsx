
import { Calendar } from "lucide-react";
import Button from "../ui/Button"
import { FaRocket } from "react-icons/fa";

const SectionFour = () => {
  return (
    <div className="w-full font-inter flex flex-col justify-center items-center py-14 border-[#ebe7e7] dark:border-[#111624] border-t border-b ">
        <p className="text-[24px] text-center md:text-[42px]">Ready to Build Your Second Brain?</p>
        <p className="text-[#4B5563] text-sm text-center mt-2 md:mt-0 md:text-lg font-medium mb-10">Join thousands of users who are already organizing their digital lives with SecondBrain</p>
        <div className="flex gap-4">
            <Button text="Get Started Free" startIcon={<FaRocket />} variant="secondary" size="sm"/>
            <Button text="Schedule Demo" startIcon={<Calendar />} variant="tertiary" size="sm"/>
        </div>
    </div>
  )
}

export default SectionFour