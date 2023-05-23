import fetch from "Fetch/Fetch";
import {url_delete_positions_id} from "../../../Constatnts/url";
import {typeError} from "../../../Types/types";

async function deleteCabinet(cabinetId: string) {
    return await fetch.delete(url_delete_positions_id(cabinetId))
        .catch((error) => error.response.data as typeError);
}

export default deleteCabinet;