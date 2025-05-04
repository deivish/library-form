import React from "react";

type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
};

export const Label = ({ htmlFor, children, required }: LabelProps) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
    {children} {required}
  </label>
);