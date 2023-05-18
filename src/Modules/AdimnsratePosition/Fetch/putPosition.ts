import fetch from "Fetch/Fetch";
import {url_put_positions_id} from "../../../Constatnts/url";

async function putPosition(positionId: string, name: string) {
    return await fetch.put(url_put_positions_id(positionId), {name});
}

export default putPosition;