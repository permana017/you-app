import React, { ChangeEvent } from "react";

interface InputFieldProps {
  value: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  name?: string;
  err?: string;
  textRight?: boolean;
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  name = "",
  err,
  textRight,
  disabled,
}) => {
  return (
    <div className="w-full flex flex-col mb-3 gap-1">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        autoComplete="off"
        disabled={disabled}
        className={
          "text-white text-base bg-[#FFFFFF0F] p-3  rounded-lg w-full outline-none focus:ring-2 " +
          (err && value ? "ring-red-400 " : "") +
          (textRight ? "text-right" : "") +
          (disabled ? " !text-gray-500" : "")
        }
      />
      {err && value && <p className="text-sm text-red-400">{err}</p>}
    </div>
  );
};

export default InputField;
