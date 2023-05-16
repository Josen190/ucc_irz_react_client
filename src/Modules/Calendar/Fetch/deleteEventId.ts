import {url_delete_events_id} from "Constatnts/url";
import fetch from "Fetch/Fetch";

async function deleteEventId(id: string) {
    return await fetch
      .delete(url_delete_events_id(id), {
          params: {
              id: id
          }
      })
      .then(() => Promise.resolve(null))
      .catch(() => Promise.reject(null));
}

export default deleteEventId;