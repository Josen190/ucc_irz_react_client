import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import router from "./AppRouter";
import { RouterProvider } from "react-router-dom";

import AuthController from "./Modules/AuthController/Components/AuthController/authController";
import { Provider } from "react-redux";
import store from "Store";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthController>
        <RouterProvider router={router} />
      </AuthController>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
