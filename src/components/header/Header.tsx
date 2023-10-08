import React from "react";
import MenuIcon from "../icons/MenuIcon";
import CartIcon from "../icons/CartIcon";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-5 py-3 border-b">
      <MenuIcon onClick={() => {}} />
      <span className="font-bold text-2xl">CC Jitters</span>
      <CartIcon onClick={() => {}} />
    </header>
  );
};

export default Header;
