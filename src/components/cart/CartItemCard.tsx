import React from "react";
import Product from "../../models/Product";
import Button from "../shared/Button";
import { useAppDispatch } from "../../store/hooks";
import { removeFromCart } from "../../store/cartSlice/cart";

interface Props {
  item: Product;
  className?: string;
}

const CartItemCard: React.FC<Props> = ({ item, className }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={`card ${className}`}>
      <h3>{item.title}</h3>
      <div>R{item.price}</div>

      <Button onClick={() => dispatch(removeFromCart(item))}>Remove</Button>
    </div>
  );
};

export default CartItemCard;
