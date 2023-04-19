import API from "Fetch/Api";
import { notifyError } from "../../../Components/Notifications/Notifications";
import User from "Helpers/User";


export default async function fetchAuthentication(email: string, password: string, 
    collbac: (jwt: string | null, refreshToken: string | null, user: User | null) => void) {
    const userId = API.authentication(email, password)
        .then((data) => {
            collbac(data.jwt, data.refreshToken, data.user);
            return data.user ? data.user.id : false
        })
        .catch(() => {
            notifyError("Ошибка авторизации");
            return false;
        });

    return userId;
}
