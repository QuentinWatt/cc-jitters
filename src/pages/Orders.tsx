import React, { useEffect, useState } from "react";
import { firebase } from "../firebase";
import {
  getDatabase,
  ref,
  onValue,
} from "firebase/database";
import Order from "../models/Order";

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const db = getDatabase(firebase);
    const ordersRef = ref(db, "orders");

    onValue(ordersRef, (snapshot) => {
      if (snapshot.val()) {
        const ordersArray = Object.keys(snapshot.val()).map(
          (key) => {
            console.log({
              id: key,
              items: snapshot.val()[key].items,
              total: snapshot.val()[key].total,
            });

            return {
              id: key,
              items: snapshot.val()[key].items,
              total: snapshot.val()[key].total,
            };
          }
        );
        setOrders(ordersArray);
      }
    });
  }, []);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Orders</h1>

      {orders.map((order) => (
        <div key={order.id}>
          Items: {order.items.length}, Total: R{order.total}
        </div>
      ))}
    </div>
  );
};

export default Orders;
