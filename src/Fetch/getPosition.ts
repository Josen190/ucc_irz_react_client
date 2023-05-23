import fetch from "Fetch/Fetch";
import {url_get_positions} from "../Constatnts/url";
import Position from "Helpers/Positions";
import IFetchPositions from "Fetch/Interface/IFetchPositions";


async function getPosition(PageIndex: number, SearchString?: string, PageSize = 20) {
    return await fetch.get(url_get_positions, {params: {
            SearchString,
            PageIndex,
            PageSize
        }}).then((response) => {
        const data = response.data as IFetchPositions[];
        return data.map((position) => new Position(position))

    })
}

export default getPosition;