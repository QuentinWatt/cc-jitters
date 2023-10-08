import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  children: string;
  className?: string;
  onClick?: MouseEventHandler;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
