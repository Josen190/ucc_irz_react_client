import { useContext } from "react";
import { createContext } from "react";
import { authData } from "./authController";



export interface ReturnContext {
  authData?: authData;
  setAuthData?: Function;
}

const authContext = createContext<ReturnContext>({});
export default authContext;