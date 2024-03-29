import {url_get_events_id} from "Constatnts/url";
import fetch from "Fetch/Fetch";
import Event from "Helpers/Event";

async function getEventId(id: string) {
    return await fetch
        .get(url_get_events_id(id), {
            params: {
                id: id
            }
        })
        .then((response) => Promise.resolve(new Event(response.data)))
        .catch(() => Promise.reject(null));
}

export default getEventId;