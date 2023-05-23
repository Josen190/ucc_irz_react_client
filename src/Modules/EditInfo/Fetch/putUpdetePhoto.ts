import { url_put_users_me_update_photo } from "Constatnts/url";
import fetch from "Fetch/Fetch";
import Image from "Helpers/Image";

async function putUpdetePhoto(
    image: Image
) {
    return await fetch
        .put(url_put_users_me_update_photo, image.formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then((response) => {
            const id = response.data as string
            image.setId(id);
            return Promise.resolve(image)
        })
        .catch(() => Promise.reject(null));
}

export default putUpdetePhoto;