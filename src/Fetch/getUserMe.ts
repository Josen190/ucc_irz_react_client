import User from "Helpers/User";
import PropsUser from "./Interface/IUser";
import fetch from "./Fetch";
import {url_get_users_me} from "../Constatnts/url";


async function getUserMe(): Promise<User> {
    return await fetch.get(url_get_users_me)
        .then((response) => {
            if (!response.data) return Promise.reject()
            const data = response.data as PropsUser;
            const user = new User(data)
            return Promise.resolve(user);
        })

        .catch((error) => Promise.reject(error));
}

export default getUserMe;