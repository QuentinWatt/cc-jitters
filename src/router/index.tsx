import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Products />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default router;
