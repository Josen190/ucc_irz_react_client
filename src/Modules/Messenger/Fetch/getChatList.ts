import { url_get_chats } from "Constatnts/url";

import Chat from "../Helper/Chat";
import { IFetchParamsChat } from "../Type/IChat";
import fetch from "Fetch/Fetch";

async function getChatList(PageIndex: number, PageSize = 10) {
    const result = await fetch.get(url_get_chats, { params: { PageIndex, PageSize } })
        .then((response) => {
            const data = response.data as IFetchParamsChat[];
            return Promise.resolve(data.map(ParamChat => new Chat(ParamChat)))
        })
        .catch((error) => Promise.reject(error.response.data));
    return result;
}
export default getChatList;