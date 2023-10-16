import React from "react";
import { useAppSelector } from "../store/hooks";
import CartItemCard from "../components/cart/CartItemCard";
import Button from "../components/shared/Button";
import { cartTotal } from "../store/cartSlice/selectors";

const Cart: React.FC = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const orderTotal = useAppSelector(cartTotal);

  return (
    <div className="py-5">
      <h1 className="mb-3 font-bold text-3xl">Your cart</h1>

      {cartItems.map((item, key) => (
        <CartItemCard key={key} item={item} className="mb-3" />
      ))}

      <div className="font-bold text-xl">Total: R{orderTotal}</div>

      <Button>Proceed with order</Button>
    </div>
  );
};

export default Cart;
