import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import LoginAndReg from "../pages/LoginAndReg";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
// const user = 'null'

 
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // {
      //   path: "/",
      //   element:!user?<h4 href="#">perspiciatis, iure impedit animi aspernatur eaque illo unde quaerat nisi commodi facere nam ullam.</h4> :<Home />,
      // },
      {
        path: "/",
        element:<Home />,
      },
      {
        path: "/login-reg",
        element: <LoginAndReg />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      }
    ],
  },
]);

export default router;
