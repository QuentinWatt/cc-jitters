import React from "react";
import CartItem from "../../models/CartItem";

interface Props {
  item: CartItem;
  className?: string;
}

const CartItemCard: React.FC<Props> = ({ item, className }) => {
  return (
    <div className={`card flex justify-between ${className}`}>
      <div>
        <h3>{item.product.title}</h3>
        <div>R{item.product.price}</div>
      </div>
      <div className="text-right">{item.quantity}</div>
    </div>
  );
};

export default CartItemCard;
