import React from "react";
import { useAppSelector } from "../store/hooks";

const Cart: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.products);
  return (
    <div>
      {cartItems.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  );
};

export default Cart;
