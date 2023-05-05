import { url_delete_events_id } from "Constatnts/url";
import fetch from "Fetch/Fetch";

async function deleteEventId(id: string) {
  const result = await fetch
    .delete(url_delete_events_id(id), {
      params: {
        id: id
      }
    })
    .then(() => Promise.resolve(null))
    .catch(() => Promise.reject(null));

  return result;
}

export default deleteEventId;