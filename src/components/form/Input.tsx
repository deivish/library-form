import React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, required, ...props }, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        required={required}
        aria-required={required ? "true" : undefined}
        className={`w-full text-gray-500 border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 hover:border-2 hover:border-blue-500 focus:ring-blue-500 ${className}`}
      />
    );
  }
);
Input.displayName = "Input";
