import fetch from "Fetch/Fetch";
import {url_post_positions} from "../../../Constatnts/url";
import Position from "Helpers/Positions";
import IFetchPositions from "Fetch/Interface/IFetchPositions";

async function postPosition(name: string) {
    return await fetch.post(url_post_positions, {name})
        .then((response) => {
            const data = response.data as IFetchPositions;
            return new Position(data);
        })
}
export default postPosition;