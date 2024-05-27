"use client";
import React, { ChangeEvent, useState } from "react";
import eyeOutline from "../../../public/eye-outline.svg";
import eyeOutlineOff from "../../../public/eye-off-outline.svg";
import Image from "next/image";

interface InputFieldProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  err?: string;
}

const InputPassword: React.FC<InputFieldProps> = ({
  value,
  onChange,
  placeholder = "",
  name = "",
  err,
}) => {
  const [type, setType] = useState("password");
  const handleSetType = () => {
    if (type == "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <div className="w-full flex flex-col mb-3 gap-1">
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          autoComplete="off"
          className={
            "text-white text-base bg-[#FFFFFF0F] p-3  rounded-lg w-full outline-none focus:ring-2 pr-14 " +
            (err && value ? "ring-red-400" : "")
          }
        />
        <div className="absolute top-0 right-0 w-12 h-full flex items-center pl-2">
          <Image
            onClick={handleSetType}
            src={type == "text" ? eyeOutline : eyeOutlineOff}
            alt="eye"
            className="cursor-pointer"
          />
        </div>
      </div>
      {err && value && <p className="text-sm text-red-400">{err}</p>}
    </div>
  );
};

export default InputPassword;
