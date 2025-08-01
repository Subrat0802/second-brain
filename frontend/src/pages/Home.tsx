import SectionOne from "../components/homeComponents/SectionOne"
import SectionTwo from "../components/homeComponents/SectionTwo"

const Home = () => {
  return (
    <div className=" min-h-[91vh] bg-[#F6F7F9] dark:bg-[#080C13]">
        <SectionOne />
        <SectionTwo />
    </div>
  )
}

export default Home