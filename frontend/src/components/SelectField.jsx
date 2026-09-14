import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SelectField = ({
  label,
  id,
  name,
  value,
  onChange,
  error,
  required,
  options = [],
  className,
  ...props
}) => {
  return (
    <div className={cn("w-full mb-4", className)}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-brand-dark mb-1.5">
          {label} {required && <span className="text-brand-accent">*</span>}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full px-4 py-2.5 rounded-md border text-sm transition-colors duration-200 bg-white",
          "focus:outline-none focus:ring-2 focus:ring-brand-200",
          error 
            ? "border-red-500 focus:border-red-500" 
            : "border-brand-200 focus:border-brand-accent hover:border-brand-300"
        )}
        {...props}
      >
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default SelectField;
