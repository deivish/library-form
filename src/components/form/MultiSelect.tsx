import React from "react";
import Select, { MultiValue, ActionMeta } from "react-select";

type Option = {
  value: string;
  label: string;
};

type MultiSelectProps = {
  options: Option[];
  onChange: (newValue: MultiValue<Option>, actionMeta: ActionMeta<Option>) => void;
  value: MultiValue<Option>;
};

const MultiSelect: React.FC<MultiSelectProps> = ({ options, onChange, value }) => {
  return (
    <Select
      isMulti
      options={options}
      onChange={onChange}
      value={value}
      classNamePrefix="react-select"
      styles={{
        control: (provided) => ({
          ...provided,
            minHeight: "auto",
            height: "38px",               
            borderRadius: "0.5rem",         
            borderColor: "#D1D5DB",
            border: '1px solid #D1D5DB', 
            boxShadow: 'none',
            fontFamily: "inherit",
            padding: '0',
            lineHeight: 'inherit',
            '&:hover': {
                border: '2px solid #3B82F6', 
            },
        }),
        valueContainer: (provided: any) => ({
            ...provided,
            padding: "0",                   
          }),
          input: (provided: any) => ({
            ...provided,
            margin: "0",                   
            padding: "0",         
            fontSize: '1rem',
          lineHeight: 'inherit',
          }),
        multiValue: (provided) => ({
          ...provided,
          color: 'white',
          backgroundColor: "#F4F6F8",
        }),
        multiValueLabel: (provided) => ({
          ...provided,
          color: 'black',
        }),
        multiValueRemove: (provided) => ({
          ...provided,
          color: 'black',
          ':hover': {
            backgroundColor: '#EF4444', 
            color: 'white',
          },
        }),
      }}      
    />
  );
};

export default MultiSelect;