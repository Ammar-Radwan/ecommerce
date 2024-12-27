import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Registration from '../pages/Registration'
import MustSignUp from '../pages/MustSignUp'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import NotFound from '../pages/NotFound'

const MainRouter = createBrowserRouter([
  {
    path: "/electronics-ecommerce",
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "must-sign-up",
        element: <MustSignUp />
      },
      {
        path: "registration",
        element: <Registration />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default MainRouter;
