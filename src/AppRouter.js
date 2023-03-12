import { Routes, Route, createRoutesFromElements } from "react-router";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate,
} from "react-router-dom";

import Start from "./Pages/Visitor";
import Account, { accountLoader } from "./Pages/Account";
import News from "./Pages/News";
import Messenger from "./Pages/Messenger";
import Calendar from "./Pages/Calendar";
import Edit from "./Pages/Edit";
import Admin from "./Pages/Admin";
import Auth from "./Pages/Auth";
import AuthController from "./api/authentication/authController";
import App from "./App";
import EditInfo from "./Components/Edit/EditInfo/EditInfo";
import Settin from "./Components/Edit/Setting/Setting";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      //   loader: appLoader,
      children: [
        {
          path: "account/:id",
          element: <Account />,
          loader: accountLoader,
        },
        {
          path: "edit",
          element: <Edit />,
          children: [
            {
              path:"info", 
              element: <EditInfo />
            },
            {
              path: "setting",
              element: <Settin />
            }
          ]
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
      path: "login",
      element: <Auth />,
    },
  ],
  { basename: "/" }
);

export default router;

// старая версия
