import { url_put_change_password } from "Constatnts/url";
import fetch from "Fetch/Fetch";

async function putChangePassword(
    currentPassword: string,
    newPassword: string
): Promise<void | any> {
    return await fetch.put(url_put_change_password, {
        currentPassword: currentPassword,
        newPassword: newPassword,
    })
        .then(() => Promise.resolve())
        .catch((error) => Promise.reject(error.response.data));
}

export default putChangePassword;