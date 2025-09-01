import { type LucideIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

interface PropSection {
    title:string,
    Icon: LucideIcon,
    link: string
    onClick: (e:React.MouseEvent<HTMLDivElement>) => void,
    clikedPage:string
}

const SidebarElement = ({ title, Icon, link, onClick, clikedPage }: PropSection) => {
  const isActive = title === clikedPage;

  return (
    <NavLink to={link}>
      <div
        onClick={onClick}
        className={`p-2 px-3 md:px-3 md:pr-11 transition-all duration-200 flex gap-2 text-md justify-start items-center md:rounded-lg font-semibold
           hover:text-[#090e16]
          dark:hover:text-white/70 
          ${isActive && "bg-[#1F2937] hover:text-white text-white dark:bg-[#0F141B] shadow-lg dark:text-[#7F7F7F] "}
        `}
      >
        <Icon width={20} height={20} />
        <p className="hidden md:block">{title}</p>
      </div>
    </NavLink>
  );
};


export default SidebarElement