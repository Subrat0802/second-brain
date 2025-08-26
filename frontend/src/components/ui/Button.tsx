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
    "flex items-center justify-center font-medium rounded-lg border transition-all duration-200 py-1 px-2 md:p-2 md:px-4 bg-[#1F2937] text-white border-[#7F7F7F] dark:bg-[#080C13] dark:text-[#7F7F7F] hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-[#090e16] dark:hover:border-[#c5c5c5] dark:hover:text-[#c5c5c5]",

  secondary:
    "flex items-center justify-center font-medium rounded-lg border transition-all duration-200 py-1 px-2 md:p-3 md:px-9 bg-[#1F2937] text-white border-[#7F7F7F] dark:bg-[#080C13] dark:text-[#7F7F7F] hover:bg-gray-900 hover:text-gray-300 dark:hover:bg-[#090e16] dark:hover:border-[#c5c5c5] dark:hover:text-[#c5c5c5]",

  tertiary:
    "flex items-center justify-center font-medium rounded-lg border transition-all duration-200 py-1 px-2 md:p-3 md:px-9 border-gray-300 text-[#080C13] dark:text-[#7F7F7F] dark:border-[#7F7F7F] hover:bg-gray-100 dark:hover:bg-[#090e16] dark:hover:border-[#c5c5c5] dark:hover:text-[#c5c5c5]",
  fourth: "border dark:border-white/30 rounded-full p-1 px-2 text-sm "
  };


const sizeStyle = {
  sm: "w-fit min-h-[32px]",
  md: "min-w-44 min-h-[40px]",
  lg: "min-w-56 min-h-[48px]",
  xs: ""
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
        (startIcon || endIcon) && "gap-x-2"
      )}
    >
      {startIcon}
      {text && <span>{text}</span>}
      {endIcon}
    </button>
  );
};

export default Button;
