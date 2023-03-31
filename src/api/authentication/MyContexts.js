import { getAuthContext } from "./authController";
export function getContext() {
    var _a = getAuthContext(), authData = _a.authData, setAuthData = _a.setAuthData;
    console.log(typeof authData);
    console.log(typeof setAuthData);
    var returnContext = {};
    return returnContext;
}
