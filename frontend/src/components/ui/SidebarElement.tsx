import { type LucideIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

interface PropSection {
    title:string,
    Icon: LucideIcon,
    link: string
    onClick: (e:React.MouseEvent<HTMLDivElement>) => void,
    clikedPage:string
}

const SidebarElement = ({title, Icon, link, onClick, clikedPage}: PropSection) => {
    return (
    <NavLink to={link}>
          <div
            onClick={onClick}
            className={`p-2 px-3 md:px-3 md:pr-11 dark:hover:bg-[#090e16] hover:bg-[#eaebec] hover:text-[#090e16] dark:hover:text-[#7F7F7F]  transition-all duration-200 flex gap-2 text-md justify-start items-center rounded-lg ${title === clikedPage && "bg-[#0F141B]  text-white/70 dark:text-[#7F7F7F]"}`}
          >
            <Icon width={20} height={20} />
            <p className="hidden md:block">{title}</p>
          </div>
        </NavLink>
  )
}

export default SidebarElement