import React from "react";

type Props = {
  id?: string;
  children: React.ReactNode;
  state?: "default" | "error";
};

export const HelperText = ({ id, children, state = "default" }: Props) => (
  <p
    id={id}
    className={
      state === "error" ? "text-red-500 text-sm" : "text-gray-500 text-sm"
    }
  >
    {children}
  </p>
);