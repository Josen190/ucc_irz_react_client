import fetch from "Fetch/Fetch";
import {url_delete_positions_id} from "../../../Constatnts/url";
import {typeError} from "../../../Types/types";

async function deletePosition(positionId: string) {
    return await fetch.delete(url_delete_positions_id(positionId))
        .catch((error) => error.response.data as typeError);
}

export default deletePosition;