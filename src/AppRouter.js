import { Routes, Route, createRoutesFromElements } from "react-router";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate,
} from "react-router-dom";

import Start from "./Pages/Visitor";
import Account from "./Pages/Account";
import News from "./Pages/News";
import Messenger from "./Pages/Messenger";
import Calendar from "./Pages/Calendar";
import Edit from "./Pages/Edit";
import Admin from "./Pages/Admin";
import Auth from "./Pages/Auth";
import AuthController from "./api/authentication/authController";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthController />,
    //   loader: appLoader,
    children: [
      {
        path: "account",
        element: <Account />,
        children: [
          {
            path: "edit",
            element: <Edit />,
          },
        ],
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "messenger",
        element: <Messenger />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },

      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "staff",
            element: <div />,
          },
          {
            path: "role",
            element: <div />,
          },
        ],
      },
    ],
  },

  {
    path: "/login",
    element: <Auth />,
  },
]);
export default router;
