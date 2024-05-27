import React, { Children } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = "",
  isLoading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-3 bg-gradient-btn text-white rounded w-full flex justify-center gap-2 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {isLoading && (
        <>
          <AiOutlineLoading3Quarters
            size={20}
            widths={10}
            className="animate-spin"
          />
          <p>Loading</p>
        </>
      )}
      {!isLoading && <div>{children}</div>}
    </button>
  );
};

export default Button;
