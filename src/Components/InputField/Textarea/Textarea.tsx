import React, { Component, createRef, FunctionComponent } from "react";

interface TextareaProps {
  className?: string;
  name?: string;
  cols?: number;
  rows?: number;
  placeholder?: string;
  value?: string;
  autoComplete?: string;
  maxlength?: number;
  minlength?: number;
  isresize?: boolean | string;
  onInput?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
}

function fixTextareaSize(textarea: HTMLTextAreaElement): void {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + 2 + "px";
}

const Textarea: FunctionComponent<TextareaProps> = ({
  className,
  name,
  cols,
  rows,
  placeholder,
  value,
  autoComplete,
  maxlength,
  minlength,
  isresize,
  onInput,
}) => {
  const textareaRef = createRef<HTMLTextAreaElement>();

  React.useEffect(() => {
    if (textareaRef.current && isresize === true) {
      fixTextareaSize(textareaRef.current);
    }
  }, [value, isresize]);

  return (
    <textarea
      className={className}
      name={name}
      cols={cols}
      rows={rows}
      placeholder={placeholder}
      defaultValue={value}
      autoComplete={autoComplete}
      maxLength={maxlength}
      minLength={minlength}
      ref={textareaRef}
      onInput={(e) => {
        if (isresize === true) {
          fixTextareaSize(e.currentTarget);
        }
        onInput && onInput(e);
      }}
    />
  );
};

export default Textarea;
