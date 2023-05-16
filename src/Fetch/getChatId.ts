import fetch from "Fetch/Fetch";
import {url_get_chats_by_participant} from "../Constatnts/url";



async function getChatId(participantId: string) {
    return await fetch.get(url_get_chats_by_participant, { params: {
            participantId
        }}).then(response => response.data as string);
}

export default getChatId;