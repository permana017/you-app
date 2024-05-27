import React, { useState } from "react";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  options: Option[];
  value: string | undefined;
  onChange: (value: string) => void;
};

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <select
      className="text-white text-base bg-[#FFFFFF0F] p-3  rounded-lg w-full outline-none focus:ring-2 text-right mb-3"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className=" bg-gray-700 text-sm"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
