import React from "react";

type Option = {
  value: string;
  label: string;
};

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: Option[];
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, className, ...props }, ref) => {
    return (
      <select
        {...props}
        ref={ref}
        className={`w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      >
        <option value="">-- Select --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }
);
Select.displayName = "Select";