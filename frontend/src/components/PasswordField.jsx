import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const PasswordField = ({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
  required,
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={cn("w-full mb-4", className)}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-brand-dark mb-1.5">
          {label} {required && <span className="text-brand-accent">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={cn(
            "w-full pl-4 pr-10 py-2.5 rounded-md border text-sm transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-brand-200",
            error 
              ? "border-red-500 focus:border-red-500" 
              : "border-brand-200 focus:border-brand-accent bg-white hover:border-brand-300"
          )}
          {...props}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-brand-500 hover:text-brand-dark focus:outline-none"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Eye className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default PasswordField;
