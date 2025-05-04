import React, { useState } from "react";
import { Input } from "./Input";

export const InputPassword = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative">
      <Input
        {...props}
        type={visible ? "text" : "password"}
        className="pr-10"
      />
      <button
        type="button"
        onClick={() => setVisible(!visible)}
        className="absolute inset-y-0 right-3 text-sm text-blue-600"
      >
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
};