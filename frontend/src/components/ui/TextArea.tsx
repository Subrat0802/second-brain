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
      <div className="flex flex-col">
        <label htmlFor={htmlFor}>{label}:</label>
        <textarea
          id={id}
          placeholder={placeholder}
          rows={rows}
          className="dark:bg-[#0f151d] p-2 rounded-lg border focus:border-white  border-[#b8c6db] dark:border-[#0f151d]  focus:outline-none 
            focus:ring-2"
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
