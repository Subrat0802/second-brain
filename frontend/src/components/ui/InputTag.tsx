import React from "react";

export interface propItems {
  labelText?: string;
  placeText: string;
  id: string;
  type?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classStyle?: string;
  value?: string;
}

const InputTag = React.forwardRef<HTMLInputElement, propItems>(
  (
    { labelText, placeText, id, type, onChange, classStyle, value, name },
    ref,
  ) => {
    return (
      <div className="flex flex-col mb-2">
        {labelText && <label htmlFor={id} className="mb-2 text-sm font-medium text-black dark:text-gray-300 ml-1" >{labelText}</label>}
        <input
          ref={ref}
          placeholder={placeText}
          id={id}
          className={`
      bg-gray-200/60
      dark:bg-[#0F151D]
      label-
      dark:text-white
      text-black
      placeholder:text-gray-500
      p-3
      border
      border-gray-600/20
      shadow-sm
      dark:border-[#1E293B]
      rounded-xl
      focus:outline-none
      focus:border-[#3B82F6]
      focus:ring-2
      focus:ring-[#3B82F6]/30
      transition-all
      duration-200
      ${classStyle ?? ""}
    `}
          type={type}
          onChange={onChange}
          {...(type !== "file" ? { value } : {})}
          name={name}
        />
      </div>
    );
  },
);

InputTag.displayName = "InputTag";

export default InputTag;
