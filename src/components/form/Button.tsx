import React from "react";
import classNames from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  className?: string;
};

export const Button = ({
  children,
  variant = "primary",
  isLoading = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames(
        "px-4 py-2 rounded-lg font-medium",
        variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",
        variant === "secondary" && "bg-gray-200 text-gray-800 hover:bg-gray-300",
        props.disabled && "opacity-50 cursor-not-allowed"
      )}
      aria-busy={isLoading}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};