import React from "react";

export interface TextAreaProps {
  id: string;
  placeholder: string;
  rows: number;
  htmlFor: string;
  label: string;
  onChange?:() => void
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, placeholder, rows, label, htmlFor, onChange }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={htmlFor}>{label}:</label>
        <textarea
          id={id}
          placeholder={placeholder}
          rows={rows}
          className="bg-white border dark:border-none border-black dark:bg-[#374151] rounded-xl p-2"
          ref={ref}
          onChange={onChange}
        />
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
