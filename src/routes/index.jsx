import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Contact from "../pages/conatct/contect";
import MainLAaout from "../componenets/main-layout";
import PrivateRoute from "./private-route";
import Login from "../pages/login/login";
import ProductInfo from "../pages/product-info";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        path: "/",
        element: <MainLAaout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/product/:id",
            element: <ProductInfo />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "*",
    element: <h1>sdgsfg</h1>,
  },
]);

export { router };
