import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import Home from "../pages/Home";
import Orders from "../pages/Orders";
import Products from "../pages/Products";

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
    ],
  },
]);

export default router;
