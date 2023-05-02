import { url_put_users_me_update_photo } from "Constatnts/url";
import fetch from "Fetch/Fetch";
import Image from "Helpers/Image";

async function putUpdetePhoto(
    name: string, extension: string, data: string
) {
    return await fetch
        .put(url_put_users_me_update_photo, {
            name, extension, data
        })
        .then((response) => {
            const id = response.data as string
            return Promise.resolve(new Image({ id, name, extension, data }))
        })
        .catch(() => Promise.reject(null));
}

export default putUpdetePhoto;