import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { loader as appLoader } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Routes, Route, createRoutesFromElements } from "react-router";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
  Navigate,
} from "react-router-dom";
import Start from "./Pages/Start";
import Account from "./Pages/Account";
import News from "./Pages/News";
import Messenger from "./Pages/Messenger";
import Calendar from "./Pages/Calendar";
import Edit from "./Pages/Edit";
import Admin from "./Pages/Admin";
import Auth from "./Pages/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: appLoader,
  },
  {
    path: "/account",
    element: <Account />,
    children: [
      {
        path: "edit",
        element: <Edit />,
      },
    ],
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/messenger",
    element: <Messenger />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },

  {
    path: "/admin",
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
  {
    path: "/login",
    element: <Auth />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
