import React from "react";
import CartItem from "../../models/CartItem";
import Button from "../shared/Button";
import { useAppDispatch } from "../../store/hooks";
import { decreaseQuantity, increaseQuantity } from "../../store/cartSlice/cart";

interface Props {
  item: CartItem;
  className?: string;
}

const CartItemCard: React.FC<Props> = ({ item, className }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={`card flex justify-between ${className}`}>
      <div>
        <h3 className="font-bold text-2xl">{item.product.title}</h3>
        <div className="font-bold text-xl">
          R{item.product.price} <span className="font-normal">(each)</span>
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold text-xl mb-3">
          <div>Quantity:</div>
          {item.quantity}
        </div>
        <Button
          className="mr-2"
          onClick={() => dispatch(decreaseQuantity(item.product))}
        >
          -
        </Button>
        <Button onClick={() => dispatch(increaseQuantity(item.product))}>
          +
        </Button>
      </div>
    </div>
  );
};

export default CartItemCard;
