import fetch from "Fetch/Fetch";
import {url_post_cabinets} from "../../../Constatnts/url";
import IFetchPositions from "Fetch/Interface/IFetchPositions";
import Cabinet from "Helpers/Cabinet";

async function postCabinet(name: string) {
    return await fetch.post(url_post_cabinets, {name})
        .then((response) => {
            const data = response.data as IFetchPositions;
            return new Cabinet(data);
        })
}
export default postCabinet;