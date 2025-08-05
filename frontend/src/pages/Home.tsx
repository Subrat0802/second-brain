import SectionFour from "../components/homeComponents/SectionFour"
import SectionOne from "../components/homeComponents/SectionOne"
import SectionThree from "../components/homeComponents/SectionThree"
import SectionTwo from "../components/homeComponents/SectionTwo"

const Home = () => {
  return (
    <div className=" min-h-[91vh]  bg-[#F6F7F9] dark:bg-[#080C13]">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
    </div>
  )
}

export default Home