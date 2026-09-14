import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const TextAreaField = ({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
  required,
  className,
  rows = 4,
  ...props
}) => {
  return (
    <div className={cn("w-full mb-4", className)}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-brand-dark mb-1.5">
          {label} {required && <span className="text-brand-accent">*</span>}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className={cn(
          "w-full px-4 py-2.5 rounded-md border text-sm transition-colors duration-200 resize-y",
          "focus:outline-none focus:ring-2 focus:ring-brand-200",
          error 
            ? "border-red-500 focus:border-red-500" 
            : "border-brand-200 focus:border-brand-accent bg-white hover:border-brand-300"
        )}
        {...props}
      />
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default TextAreaField;
