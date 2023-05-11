import { createBrowserRouter } from "react-router-dom";

import React from "react";
import App from "App";
import News from "Pages/News/News";
import EditInfo from "Modules/EditInfo";
import Account from "Pages/Account/Account";
import Admin from "Pages/Admin/Admin";
import Auth from "Pages/Auth/Auth";
import Calendar from "Pages/Calendar/Calendar";
import Edit from "Pages/Edit/Edit";
import Messenger from "Pages/Messenger/Messenger";
import Setting from "Modules/Setting";
import Staff from "Pages/Staff/Staff";
import { Chat } from "Modules/Messenger";
import { NewChat } from "Modules/Messenger";
import {FormNewEvent, OpenEvent} from "Modules/Calendar";
import {CreateTidings} from "Modules/News";



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      //   loader: appLoader,
      children: [
        {
          path: "account/:userId",
          element: <Account />,
          children: [
            {
              path: "new_news",
              element:  <CreateTidings />,
            }
          ]
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
              element: <Setting />,
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
          children: [
            {
              path: "chat/:id",
              element: <Chat />,
            },
            {
              path: "new_chat/:id",
              element: <NewChat />,
            }

          ]
        },
        {
          path: "calendar",
          element: <Calendar />,
          children: [
            {
              path: "new_event",
              element: <FormNewEvent />,
            },
            {
              path: "event/:eventId",
              element: <OpenEvent />,
            }
          ]
        },


      ],


    },
    {
      path: "admin",
      element: <Admin />,
      children: [
        {
          path: "staff",
          element: <Staff />,
        },
        {
          path: "role",
          element: <div />,
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
