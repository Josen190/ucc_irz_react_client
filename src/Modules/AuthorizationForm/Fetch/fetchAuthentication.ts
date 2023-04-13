import API from "../../../Fetch/Api";
import { notifyError } from "../../../Components/Notifications/Notifications";
import User from "Helpers/User";

export default async function fetchAuthentication(email: string, password: string, setAuthData: (
    jwt: string | null,
    refreshToken: string | null,
    user: User | null
) => void) {
    const api = new API()
    const userId = api.authentication(email, password)
        .then((data) => {
            setAuthData(data.jwt, data.refreshToken, data.user);

            return data.user ? data.user.id : false
        })
        .catch(() => {
            notifyError("Ошибка авторизации");
            return false;
        });

    return userId;
}
