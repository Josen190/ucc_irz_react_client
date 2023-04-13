import { useContext } from "react";
import API from "../../../Fetch/Api";
import authContext from "../../AuthController/Constants/MyContext/MyContexts";
import { IAuthContext } from "../../AuthController/Constants/MyContext/MyContexts";
import { notifyError } from "../../../Components/Notifications/Notifications";


export default async function fetchAuthentication(email: string, password: string) {
    const { setAuthData } = useContext(authContext) as IAuthContext;
    const api = new API()
    const userId = api.authentication(email, password)
    .then((data) => {
        setAuthData(data.jwt, data.refreshToken, data.user);
        
        return data.user? data.user.id : false
    })
    .catch(() => {
        notifyError("Ошибка авторизации");
        return false;
    });
    
    return userId;
};
