import User from "Helpers/User";
import getUserMe from "Fetch/getUserMe";
import {typeError} from "Types/types";
import fetch from "Fetch/Fetch";
import getImage from "Fetch/getImage";


const url_post_authenticate = `/api/authentication/authenticate`;

export default async function fetchAuthentication(email: string, password: string,
) {
    const data = { email, password }

    return await fetch.post(url_post_authenticate, data)
        .then(async (response) => {
            if (typeof response.data.jwt !== "string" ||
                typeof response.data.refreshToken !== "string"
            ) return Promise.reject("что-то пошло не так");

            const _data: { jwt: string, refreshToken: string, user: User | null } = {
                jwt: response.data.jwt,
                refreshToken: response.data.refreshToken,
                user: null,
            };

            fetch.setRefresh(_data.jwt, _data.refreshToken);

            _data.user = await getUserMe()
                .then((user) => user)
                .catch(() => null);

            if (_data.user === null)
                return Promise.reject("что-то пошло не так");

            if (!_data.user.image.isConst){
                const image = await getImage(_data.user.image.id);
                if (image)
                    _data.user.setImage(image);
            }

            return Promise.resolve({..._data, user: _data.user});
        })
        .catch((error) => {
            return Promise.reject(error.response.data[0].description as typeError);
        });
}
