import fetch from "Fetch/Fetch";
import {url_put_users_management_id_activate, url_put_users_management_id_deactivate} from "../../../Constatnts/url";

async function putActiveAccount(userId: string, isActive: boolean) {
    const url = isActive ? url_put_users_management_id_activate(userId) : url_put_users_management_id_deactivate(userId);
    return await fetch.post(url);
}

export default putActiveAccount;