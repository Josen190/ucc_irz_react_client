import User from "Helpers/User";

import PropsUser from "./Interface/IUser";
import Queue from "Helpers/Queue";
import {url_get_users_id} from "Constatnts/url";
import fetch from "./Fetch";

const hashUsers = new Queue<string, User>(10);

async function getUserFromId(id: string) {
    const user = hashUsers.getValueByKey(id)
    if (user) return Promise.resolve(user);

    return await fetch.get(url_get_users_id(id))
        .then((response) => {
            const user = new User(response.data as PropsUser)
            hashUsers.push(user.id, user);
            return Promise.resolve(user);
        })
        .catch(() => Promise.reject());
}
export default getUserFromId;
