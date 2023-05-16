import User from "Helpers/User";
import PropsUser from "./Interface/IUser";
import fetch from "./Fetch";

const url_get_users_me = `/api/users/me`;

async function getUserMe(): Promise<User> {
    return await fetch.get(url_get_users_me)
        .then((response) => Promise.resolve(new User(response.data as PropsUser)))
        .catch((error) => Promise.reject(error));
}

export default getUserMe;