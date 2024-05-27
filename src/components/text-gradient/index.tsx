import React from "react";

function TextGradient({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <p
      onClick={onClick}
      className={
        "bg-text-gradient text-transparent bg-clip-text font-semibold " +
        className
      }
    >
      {children}
    </p>
  );
}

export default TextGradient;
