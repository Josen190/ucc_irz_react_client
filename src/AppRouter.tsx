import { createBrowserRouter } from "react-router-dom";

import React from "react";
import App from "./App";
import EditInfo from "./Components/Edit/EditInfo/EditInfo";
import Settin from "./Components/Edit/Setting/Setting";
import Account, { accountLoader } from "./Pages/Account/Account";
import Admin from "./Pages/Admin/Admin";
import Auth from "./Pages/Auth/Auth";
import Calendar from "./Pages/Calendar/Calendar";
import Edit from "./Pages/Edit/Edit";
import Messenger from "./Pages/Messenger/Messenger";
import News from "./Pages/News/News";

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
              path: "info",
              element: <EditInfo />,
            },
            {
              path: "setting",
              element: <Settin />,
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
      path: "login",
      element: <Auth />,
    },
  ],
  { basename: "/" }
);

export default router;

// старая версия
