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
import {FormNewEvent, OpenEvent} from "Modules/Calendar";
import {CreateTidings} from "Modules/News";
import {FormEditInfoUser, FormEditRole, FormEditUserPosition, FormNewUser, UserCard} from "Modules/AdimnsrateUser";
import UserPositionAll from "./Components/UserPositionAll/UserPositionAll";
import {TablesPosition} from "Modules/AdimnsratePosition";



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "account/:userId",
          element: <Account />,
          children: [
            {
              path: "new_news",
              element:  <CreateTidings />,
            },
            {
              path: "positions",
              element:  <UserPositionAll />,
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
              path: "chat/:chatId",
              element: <Chat />,
            },
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
          children: [
            {
              path: "./",
              element: <p>Тест ыроларывоаолывраолы</p>
            },
            {
              path: ":userId",
              element: <UserCard />,
              children: [
                {
                  path: "edit_info",
                  element: <FormEditInfoUser />
                },
                {
                  path: "edit_role",
                  element: <FormEditRole />
                },
                {
                  path: "edit_position",
                  element: <FormEditUserPosition />
                },
                {
                  path: "positions",
                  element:  <UserPositionAll />,
                }
              ]
            },{
            path: "new_staff",
              element: <FormNewUser />
            }
          ]
        },
        {
          path: "positions",
          element: <TablesPosition />,
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
