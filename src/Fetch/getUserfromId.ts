import User from "Helpers/User";
import API from "./Api";
import PropsUser from "./Interface/IUser";
import Queue from "Helpers/Queue";

const hashUsers = new Queue<string, User>(10);

const url_get_users_id = (id: string) => {
    return `/api/users/${id}`;
};

async function getUserFromId(id: string) {
    const user = hashUsers.getValueByKey(id)
    if (user) return Promise.resolve(user);

    const result = await API.get(url_get_users_id(id))
        .then((response) => {
            const user = new User(response.data as PropsUser)
            hashUsers.push(user.id, user);
            return Promise.resolve(user);
        })
        .catch(() => Promise.reject());
    return result;
}
export default getUserFromId;
