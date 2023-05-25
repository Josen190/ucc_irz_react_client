import Image from "Helpers/Image";
import fetch from "Fetch/Fetch";
import {url_post_messenger_messages} from "../../../Constatnts/url";

async function postMessages(userId: string, myId: string, text: string, image: Image | null) {
    const data = new FormData();
    data.append("UserId", userId);
    data.append("Text", text);
    if (image) {
        const file = new File([image.blob], image.name, { type: image.file?.type })
        data.append('Image', file);
    }
    return fetch.post(url_post_messenger_messages, data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
}

export default postMessages;