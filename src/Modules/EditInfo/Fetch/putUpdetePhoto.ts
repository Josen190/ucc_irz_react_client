import { url_put_users_me_update_photo } from "Constatnts/url";
import fetch from "Fetch/Fetch";
import Image from "Helpers/Image";

async function putUpdetePhoto(
    image: Image
) {
    if (!image.blob) return Promise.reject();

    const formData = new FormData();
    const file = new File([image.blob], image.name ?? '')
    formData.append("Image", file);

    return await fetch
        .put(url_put_users_me_update_photo, formData, {
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