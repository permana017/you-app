"use client";
import React, { ChangeEvent, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

interface MultipleInputProps {
  values: string[];
  placeholder?: string;
  type?: string;
  name?: string;
  addItem: (data: string) => void;
  deleteItem: (data: string) => any;
}

const MultipleInput: React.FC<MultipleInputProps> = ({
  values,
  placeholder = "Input Interest",
  type = "text",
  name = "",
  addItem,
  deleteItem,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(true);
  const [inputErr, setInputErr] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(true);
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      let isExist = values.find((el) => el == inputValue);
      if (inputValue == "") {
        setInputErr("interest can't be empty");
      } else if (isExist) {
        setInputErr("interest is exist");
      } else {
        addItem(inputValue);
        setInputValue("");
        setInputErr("");
      }
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="w-full flex flex-col mb-3 gap-1">
      <div className="p-3 px-4 min-h-12 bg-[#D9D9D9] bg-opacity-5 flex flex-wrap gap-2 rounded-xl mb-2">
        {values.map((item, i) => (
          <div
            key={i}
            className="p-1 px-2 rounded bg-white bg-opacity-10 flex items-center gap-1"
          >
            <p>{item}</p>
            <div>
              <IoCloseOutline
                size={22}
                className="cursor-pointer -mr-1"
                onClick={() => deleteItem(item)}
              />
            </div>
          </div>
        ))}
        {/* {!inputItems.length && (
          <p className="text-gray-500">Click to add interest</p>
        )} */}
      </div>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleEnter}
        id="multipleInput"
        type={type}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
        autoComplete="off"
        className={
          "text-white text-base bg-[#FFFFFF0F] p-3  rounded-lg w-full outline-none focus:ring-2" +
          (isFocused ? " block" : " hidden")
        }
      />
      {inputErr && <p className="text-sm text-red-400">{inputErr}</p>}
    </div>
  );
};

export default MultipleInput;
