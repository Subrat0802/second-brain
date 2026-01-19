import React from "react";

export interface TextAreaProps {
  id: string;
  placeholder: string;
  rows: number;
  htmlFor: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // FIX
  value?: string; // add this so controlled component works
  name?: string;  // for form binding
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, placeholder, rows, label, htmlFor, onChange, value, name }, ref) => {
    return (
      <div className="flex flex-col mb-2">
        <label htmlFor={htmlFor} className="mb-2 text-sm font-medium text-black dark:text-gray-300 ml-1">{label}:</label>
        <textarea
          id={id}
          placeholder={placeholder}
          rows={rows}
          className={`
            bg-gray-200/60
            dark:bg-[#0F151D]
            dark:text-white
            text-black
            placeholder:text-gray-500
            p-3
            border
            dark:border-[#1E293B]
            rounded-xl
            resize-none
            focus:outline-none
            focus:border-[#3B82F6]
            focus:ring-2
            focus:ring-[#3B82F6]/30
            transition-all
            duration-200
          `}

          ref={ref}
          onChange={onChange}
          value={value}
          name={name}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
