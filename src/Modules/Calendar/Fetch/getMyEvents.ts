import { url_get_events_listenning, url_get_events_my } from "Constatnts/url";
import fetch from "Fetch/Fetch";
import PropsEvent from "Fetch/Interface/IEvent";
import Event from "Helpers/Event";
import MyDate from "Helpers/MyDate";

async function getMyEvents(
    start: MyDate,
    end: MyDate
): Promise<Event[]> {
    const result: PropsEvent[] | undefined = await fetch
        .get(url_get_events_listenning, {
            params: {
                Start: start.toISOString(),
                End: end.toISOString(),
            },
        })
        .then((response) => response.data)
        .catch(() => undefined);

    if (!result) {
        return Promise.reject(null);
    }

    const events: Event[] = [];
    result.forEach((_event) => {
        events.push(new Event(_event));
    });

    return Promise.resolve(events);
}

export default getMyEvents;