import { url_get_chats } from "Constatnts/url";
import API from "Fetch/Api";
import Chat from "../Helper/Chat";
import { IFetchParamsChat } from "../Type/IChat";

async function getChatList(PageIndex: number, PageSize = 10) {
    const result = await API.get(url_get_chats, { params: { PageIndex, PageSize } })
        .then((response) => {
            const data = response.data as IFetchParamsChat[];
            return Promise.resolve(data.map(ParamChat => new Chat(ParamChat)))
        })
        .catch((error) => Promise.reject(error.response.data));
    return result;
}
export default getChatList;