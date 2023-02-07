import "./App.css";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Account from "./Pages/Account";
import News from "./Pages/News";
import Messenger from "./Pages/Messenger";
import Calendar from "./Pages/Calendar";
import Start from "./Pages/Start";
import Auth from "./Pages/Auth";
import Edit from "./Pages/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/edit" element={<Edit />} />
          <Route path="/news" element={<News />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
