import fetch from "Fetch/Fetch";
import {url_post_send_reset_password_url} from "../../../Constatnts/url";

async function postResetPasswordUrl(email: string) {
    return await fetch.post(url_post_send_reset_password_url, {email}).then(response => response.data);
}

export default postResetPasswordUrl;