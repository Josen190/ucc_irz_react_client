import { getAuthContext } from "./authController";

interface authData {
    jwt: string | null;
    refreshToken: string | null;
    myID: string | null;
    role: string | null;
}


interface ReturnContext {
    authData?: authData;
    setAuthData?: Function;
}

export function getContext() {
    const { authData, setAuthData } = getAuthContext();
    console.log(typeof authData);
    console.log(typeof setAuthData);
    const returnContext: ReturnContext = {};
    return returnContext;
}