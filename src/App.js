import "./App.css";

import { redirect } from "react-router-dom";

import Start from "./Pages/Visitor";
import { checLogin } from "./api/authentication/authController";
import router from "./AppRouter";

export async function loader() {
  if (checLogin()) {
    return redirect("/news");
  }
  return;
}

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
