import fetch from "Fetch/Fetch";
import {url_put_cabinets_id} from "../../../Constatnts/url";

async function putCabinet(cabinetId: string, name: string) {
    return await fetch.put(url_put_cabinets_id(cabinetId), {name});
}

export default putCabinet;