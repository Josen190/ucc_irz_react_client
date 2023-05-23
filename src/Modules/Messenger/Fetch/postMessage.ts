import Image from "Helpers/Image";
import fetch from "Fetch/Fetch";
import {url_post_messenger_messages} from "../../../Constatnts/url";

async function postMessages(userId: string, myId: string, text: string, image: Image | null) {
    const data = {
        userId,
        text,
        Image: image ? image.formData : null,
    }

    return fetch.post(url_post_messenger_messages, data);
}

export default postMessages;