import Employee from "Helpers/Employee";
import PropsUser from "./Interface/IUser";
import fetch from "./Fetch";

const url_get_users_me = `/api/users/me`;

async function getUserMe(): Promise<Employee> {
    const result = await fetch.get(url_get_users_me)
        .then((response) => Promise.resolve(new Employee(response.data as PropsUser)))
        .catch((error) => Promise.reject(error));

    return result;
}

export default getUserMe;