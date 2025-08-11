import type { ReactElement } from "react"

export interface ButtonProps {
    text: string,
    startIcon?: ReactElement,
    endIcon?: ReactElement
    varient: "primary" | "secondary" | "tertiary",
    size: "sm" | "lg" | "md",
    onClick?: () => void,
}

const varientSize = {
    "primary": "p-1 px-2 md:p-2 md:px-4 flex justify-center items-center gap-x-2 font-medium rounded-lg bg-[#080C13] text-white/80 dark:text-[#7F7F7F] border border-[#7F7F7F] flex hover:bg-[#020305] hover:text-gray-100 transition-all duration-200 dark:hover:bg-[#090e16] dark:hover:border-[#c5c5c5] dark:hover:text-[#c5c5c5] transition-all duration-200",

    "secondary": "p-2 md:p-3 md:px-9 flex justify-center items-center  gap-x-2 font-medium rounded-lg bg-[#080C13] text-white/80 dark:text-[#7F7F7F] text-md md:text-lg border  dark:border-[#7F7F7F] flex hover:bg-[#020305] hover:text-gray-300 transition-all duration-200 dark:hover:bg-[#090e16] dark:hover:border-[#c5c5c5] dark:hover:text-[#c5c5c5] transition-all duration-200",

    "tertiary": "p-2 md:p-3  md:px-9 flex justify-center text-md md:text-lg items-center gap-x-2 font-medium rounded-lg text- border border-gray-300 text-[#080C13] dark:text-[#7F7F7F] dark:border-[#7F7F7F] flex dark:hover:bg-[#090e16] dark:hover:border-[#c5c5c5] dark:hover:text-[#c5c5c5] transition-all duration-200"
}

const sizeStyle = {
    "sm" : "w-fit",
    "lg" : "min-w-56",
    "md" : "min-w-44"
}

const Button = ({text, startIcon, endIcon, size, varient, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick} className={` ${varientSize[varient]} ${sizeStyle[size]}`} >
        {startIcon}{text}{endIcon}
    </button>
  )
}

export default Button