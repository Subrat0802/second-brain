import type { ReactNode } from "react";
import clsx from "clsx";

export interface ButtonProps {
  text?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "fourth";
  size?: "sm" | "md" | "lg" | "xs";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

const variantStyle = {
  primary:
    "flex items-center justify-center font-medium rounded-xl border transition-all duration-200 py-1 px-2 md:p-2 md:px-4 bg-[#111827] text-white border-[#374151] dark:bg-[#020617] dark:text-white dark:border-[#334155] hover:bg-[#1F2937] hover:border-[#60A5FA] dark:hover:bg-[#020617] dark:hover:border-[#60A5FA] focus:ring-2 focus:ring-[#60A5FA]/40",

  secondary:
    "flex items-center justify-center  font-medium rounded-xl border transition-all duration-300 hover-scale-95 py-1 px-2 md:p-3 md:px-9 bg-[#020617]text-gray-200 border-[#475569] dark:bg-[#020617] dark:text-gray-200 dark:border-[#475569] hover:bg-[#020617] hover:border-[#60A5FA] hover:text-white focus:ring-2 focus:ring-[#60A5FA]/40",

  tertiary:
    "flex items-center justify-center font-medium rounded-xl border transition-all duration-200 py-1 px-2 md:p-3 md:px-9 bg-transparent text-gray-800 border-gray-300  dark:text-gray-300 dark:border-[#475569] hover:bg-gray-100 dark:hover:bg-[#020617] hover:border-[#60A5FA] dark:hover:border-[#60A5FA]",

  fourth:
    "border border-[#475569]/40 flex justify-center justify-center items-center  dark:border-[#475569]/70 rounded-full p-1 px-4 text-sm text-black/80 dark:text-gray-300/60 hover:border-[#60A5FA] hover-dark:text-white transition-all",
};


const sizeStyle = {
  sm: "w-fit min-h-[32px]",
  md: "min-w-44 min-h-[40px]",
  lg: "min-w-56 min-h-[48px]",
  xs: "",
};

const Button = ({
  text,
  startIcon,
  endIcon,
  size = "md",
  variant = "primary",
  onClick,
  disabled = false,
  type = "button",
  ariaLabel,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || text}
      className={clsx(
        variantStyle[variant],
        sizeStyle[size],
        disabled && "opacity-50 cursor-not-allowed",
        (startIcon || endIcon) && "gap-x-2",
      )}
    >
      {startIcon}
      {text && <span>{text}</span>}
      {endIcon}
    </button>
  );
};

export default Button;
