import React, { useEffect, useRef, useState } from "react";

type Option = {
  value: string;
  label: string;
};

type MultiSelectProps = {
  options: Option[];
  selected: Option[];
  onChange: (selected: Option[]) => void;
};

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selected,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Detectar clics fuera del componente
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOption = (option: Option) => {
    if (selected.some((s) => s.value === option.value)) {
      onChange(selected.filter((s) => s.value !== option.value));
    } else {
      onChange([...selected, option]);
    }
  };

  const removeOption = (value: string) => {
    onChange(selected.filter((s) => s.value !== value));
  };

  return (
    <div className="w-full relative" ref={wrapperRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border border-gray-300 rounded-lg px-2 py-2 min-h-[42px] flex flex-wrap gap-2 items-center cursor-pointer focus:ring-2 focus:ring-blue-500 hover:border-2 hover:border-blue-500"
      >
        {selected.map((opt) => (
          <div
            key={opt.value}
            className="bg-gray-100 text-sm px-2 py-1 rounded flex items-center"
          >
            {opt.label}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeOption(opt.value);
              }}
              className="ml-1 text-gray-500 hover:text-red-500 "
            >
              ×
            </button>
          </div>
        ))}
        <span className="text-gray-400 text-sm">
          {selected.length === 0 && "Select options..."}
        </span>
      </div>

      {isOpen && (
        <div className="mt-1 border border-gray-300 rounded-lg max-h-40 overflow-y-auto bg-white z-10 shadow absolute">
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => toggleOption(opt)}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-100 ${
                selected.some((s) => s.value === opt.value)
                  ? "bg-blue-50"
                  : ""
              }`}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
