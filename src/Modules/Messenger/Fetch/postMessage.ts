import { url_post_messages } from "Constatnts/url";

import { IFetchParamsMessage } from "../Type/IMessage";
import Message from "../Helper/Message";
import Image from "Helpers/Image";
import MyDate from "Helpers/MyDate";
import fetch from "Fetch/Fetch";

async function postMessages(userId: string, myId: string, text: string, image: Image | null) {
    const data = {
        userId,
        text,
        image: image ? image.getParamsToSend() : null,
    }
    const result = fetch.post(url_post_messages, data).then((response) => {
        const id = response.data as string;
        return Promise.resolve(new Message({
            id, text, image: null,
            dateTime: new MyDate().toISOString(),
            senderId: myId,
        }))
    }).catch(error => Promise.reject(error.response.data))

    return result;
}

export default postMessages;