import CartItem from "./CartItem";

interface Order {
  id: string;
  items: CartItem[];
  total: number;
}

export default Order;
