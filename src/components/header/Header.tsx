import React from "react";
import MenuIcon from "../icons/MenuIcon";
import CartIcon from "../icons/CartIcon";
import { useAppDispatch } from "../../store/hooks";
import { openMenu } from "../../store/menuSlice/menu";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <header className="flex justify-between items-center px-5 py-3 border-b">
      <MenuIcon onClick={() => dispatch(openMenu())} />
      <Link to="/" className="font-bold text-2xl">
        CC Jitters
      </Link>
      <CartIcon onClick={() => {}} />
    </header>
  );
};

export default Header;
