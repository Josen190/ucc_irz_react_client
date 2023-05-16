import fetch from "Fetch/Fetch";
import {url_delete_messenger_messages_id} from "../../../Constatnts/url";

async function deleteMessage(messageId: string) {
    return fetch.delete(url_delete_messenger_messages_id(messageId))
}
export default deleteMessage;