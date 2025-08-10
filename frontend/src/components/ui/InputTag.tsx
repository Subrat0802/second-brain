import React from "react";

export interface propItems {
  labelText: string;
  placeText: string;
  id: string;
  type: string;
  onChange?:() => void
}

const InputTag = React.forwardRef<HTMLInputElement, propItems>(
  ({ labelText, placeText, id, type, onChange }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id}>{labelText}</label>
        <input
          ref={ref}
          placeholder={placeText}
          id={id}
          className="bg-[#374151] rounded-lg p-2"
          type={type}
          onChange={onChange}
        />
      </div>
    );
  }
);

InputTag.displayName = "InputTag"; // Prevents React warning in dev mode

export default InputTag;
