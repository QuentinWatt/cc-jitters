import React from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../store/hooks";
import CartItemCard from "../components/cart/CartItemCard";
import Button from "../components/shared/Button";
import { cartTotal } from "../store/cartSlice/selectors";
import { firebase } from "../firebase";
import { getDatabase, ref, push } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../store/cartSlice/cart";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useAppSelector(
    (state) => state.cart.items
  );
  const orderTotal = useAppSelector(cartTotal);

  const placeOrder = async () => {
    const database = getDatabase(firebase);
    const ordersRef = ref(database, "orders");
    await push(ordersRef, {
      items: cartItems,
      total: orderTotal,
    });
    dispatch(emptyCart());
    navigate("/orders");
  };

  return (
    <div className="py-5">
      <h1 className="mb-3 font-bold text-3xl">Your cart</h1>

      {cartItems.map((item, key) => (
        <CartItemCard
          key={key}
          item={item}
          className="mb-3"
        />
      ))}

      <div className="font-bold text-3xl text-right mb-3">
        Total: R{orderTotal}
      </div>

      <div className="flex justify-end">
        <Button onClick={() => placeOrder()}>
          Place order
        </Button>
      </div>
    </div>
  );
};

export default Cart;
