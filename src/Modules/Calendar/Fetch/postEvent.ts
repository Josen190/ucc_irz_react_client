import {url_post_events} from "Constatnts/url";
import fetch from "Fetch/Fetch";
import MyDate from "Helpers/MyDate";

async function postEvent(data: {
    title: string;
    description: string;
    start: MyDate | null;
    end: MyDate | null;
    isPublic: boolean;
    cabinetId: string | null;
    listenersIds: string[] | null;
}) {
    return await fetch
        .post(url_post_events, data)
        .then((response) => Promise.resolve(response.data as string))
        .catch(() => Promise.reject(null));
}

export default postEvent;