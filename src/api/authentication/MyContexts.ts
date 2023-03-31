import { useContext } from "react";
import { authContext } from "./authController";

interface authData {
  jwt: string | null;
  refreshToken: string | null;
  myID: string | null;
  role: string | null;
}

interface BigObject<T> {
  obj: T | null;
}

export interface ReturnContext {
  authData?: authData;
  setAuthData?: Function;
}

export function getContext() {
  const context = useContext(authContext);
  let returnContext: ReturnContext = {};
  if (typeof context === "object") {
    returnContext = context;
  }

  return returnContext;
}
