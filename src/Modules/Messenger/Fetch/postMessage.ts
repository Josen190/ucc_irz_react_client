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
        Image: image ? image.getParamsToSend() : null,
    }
    const result = fetch.sendHub('SendMessageAsync', data).then((response) => {
        console.log("сообщение отправлено");

        const id = response.data as string;
        return Promise.resolve(new Message({
            id, text, imageId: image,
            dateTime: new MyDate().toISOString(),
            senderId: myId,
        }))
    }).catch(error => {
        console.log(error);

        return Promise.reject(error)
    }
    )

    return result;
}

export default postMessages;