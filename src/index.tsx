import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import router from "./AppRouter";
import { RouterProvider } from "react-router-dom";

import AuthController from "./Modules/AuthController/Components/AuthController/authController";
import { Provider } from "react-redux";
import store from "Store";


import LogRocket from 'logrocket';
LogRocket.init('v1wt1j/ucc_irz_frontend');
LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
  name: 'Slava',
  email: 'ya.zaxaroff2013@gmail.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
});


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
