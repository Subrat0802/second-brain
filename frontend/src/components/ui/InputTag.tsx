import React from "react";

export interface propItems {
  labelText?: string;
  placeText: string;
  id: string;
  type: string;
  onChange?:() => void,
  classStyle?: string
}

const InputTag = React.forwardRef<HTMLInputElement, propItems>(
  ({ labelText, placeText, id, type, onChange, classStyle }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id}>{labelText}</label>
        <input
          ref={ref}
          placeholder={placeText}
          id={id}
          className={`dark:bg-[#1F2937] p-2 border border-black dark:border-[#374151] ${classStyle ? classStyle : "rounded-lg"}`}
          type={type}
          onChange={onChange}
        />
      </div>
    );
  }
);

InputTag.displayName = "InputTag"; // Prevents React warning in dev mode

export default InputTag;
