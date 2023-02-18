import "./App.css";

import { redirect } from "react-router-dom";

import Start from "./Pages/Start";


export async function loader() {  
  const user = false;
  console.log("=+");
  if (!user) {
    return redirect("/news");
  } 
  return ;
};

function App() {
  console.log("+")
    return (<Start></Start>);
}

export default App;
