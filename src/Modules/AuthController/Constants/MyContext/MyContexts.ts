import { createContext } from "react";
import { authData } from "../../Components/AuthController/authController";
import User from "../../../../Helpers/User";



export interface IAuthContext{
  authData: authData;
  setAuthData: (
    jwt: string | null,
    refreshToken: string | null,
    user: User | null
  ) => void;
}

const authContext = createContext<IAuthContext | undefined>(undefined);
export default authContext;
