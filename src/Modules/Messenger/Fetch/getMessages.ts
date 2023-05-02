import { url_get_messages } from "Constatnts/url";

import { IFetchParamsMessage } from "../Type/IMessage";
import Message from "../Helper/Message";
import fetch from "Fetch/Fetch";

async function getMessages(PageIndex: number, ChatId: string, SearchString?: string, PageSize = 20) {
    const result = fetch.get(url_get_messages, {params: {
        ChatId, 
        SearchString,
        PageIndex, 
        PageSize, 
    }}).then((response) => {
        const data = response.data as IFetchParamsMessage[];
        return Promise.resolve(data.map(paramMessage => new Message(paramMessage)))
    }).catch(error => Promise.reject(error.response.data))

    return result;
}

export default getMessages;