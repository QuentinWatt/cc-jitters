import React from "react";
import MenuIcon from "../icons/MenuIcon";
import CartIcon from "../icons/CartIcon";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { openMenu } from "../../store/menuSlice/menu";
import { Link } from "react-router-dom";
import { cartCount } from "../../store/cartSlice/selectors";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const itemsInCart = useAppSelector(cartCount);

  return (
    <header className="flex justify-between items-center px-5 py-3 h-16 border-b bg-dark-brown-500 text-white">
      <MenuIcon onClick={() => dispatch(openMenu())} />
      <Link to="/" className="font-bold text-2xl">
        CC Jitters
      </Link>
      <Link to="/cart" className="relative">
        <span className="absolute -right-3 -top-2 rounded-full bg-red-500 w-6 h-6 font-bold flex justify-center items-center">
          {itemsInCart}
        </span>
        <CartIcon />
      </Link>
    </header>
  );
};

export default Header;
