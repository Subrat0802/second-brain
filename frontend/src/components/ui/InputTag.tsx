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
  ({ labelText, placeText, id, type, onChange, classStyle, value, name }, ref) => {
    return (
      <div className="flex flex-col">
        {labelText && <label htmlFor={id}>{labelText}</label>}
        <input
          ref={ref}
          placeholder={placeText}
          id={id}
          className={`dark:bg-[#1F2937] p-2 border border-black dark:border-[#374151] ${
            classStyle ? classStyle : "rounded-lg"
          }`}
          type={type}
          onChange={onChange}
          {...(type !== "file" ? { value } : {})} 
          name={name}
        />
      </div>
    );
  }
);

InputTag.displayName = "InputTag";

export default InputTag;
