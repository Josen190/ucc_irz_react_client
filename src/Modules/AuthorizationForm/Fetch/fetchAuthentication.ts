
import { notifyError } from "../../../Components/Notifications/Notifications";
import User from "Helpers/User";
import getUserMe from "Fetch/getUserMe";
import { typeError } from "Types/types";
import fetch from "Fetch/Fetch";


const url_post_authenticate = `/api/authentication/authenticate`;

export default async function fetchAuthentication(email: string, password: string,
) {
    const data = { email, password }

    const result = await fetch.post(url_post_authenticate, data)
        .then(async (response) => {
            if (typeof response.data.jwt !== "string" ||
                typeof response.data.refreshToken !== "string"
            ) return Promise.reject("что-то пошло не так");

            const _data: { jwt: string, refreshToken: string, user: User | null } = {
                jwt: response.data.jwt,
                refreshToken: response.data.refreshToken,
                user: null,
            };

            fetch.setRefres(_data.jwt, _data.refreshToken);
            
            _data.user = await getUserMe()
                .then((user) => user)
                .catch(() => null);

            if (_data.user === null)
                return Promise.reject("что-то пошло не так");

            return Promise.resolve({ ..._data, user: _data.user});
        })
        .catch((error) => {
            notifyError("Ошибка авторизации");
            return Promise.reject(error.response.data[0].description as typeError);
        });

    return result;
}
