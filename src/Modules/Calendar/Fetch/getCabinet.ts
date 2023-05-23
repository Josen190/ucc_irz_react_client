import {url_get_cabinets} from "Constatnts/url";

import fetch from "Fetch/Fetch";
import PropsCabinet from "Fetch/Interface/ICabinet";
import Cabinet from "Helpers/Cabinet";
import MyDate from "Helpers/MyDate";

interface IParams{
    // FreeOnly: boolean,
    Start?: MyDate,
    End?: MyDate,
    SearchString?: string,
    PageIndex: number,
    PageSize?: number,
}

async function getCabinet({Start, End, PageIndex, SearchString, PageSize = 10 }: IParams) {
    const params: {[keys: string]: string | number | boolean} = {
        PageIndex,
        PageSize, 
    }
    // if (typeof FreeOnly !== 'undefined') params.FreeOnly = FreeOnly;
    if (SearchString) params.SearchString = SearchString;
    if (Start) params.Start = Start.toISOString();
    if (End) params.End = End.toISOString();

    return fetch.get(url_get_cabinets, {params}).then((response) => {
        const _arrCabinet: Cabinet[] = [];
        response.data.forEach((cabinet: PropsCabinet) => {
            _arrCabinet.push(new Cabinet(cabinet))
        });

        return Promise.resolve(_arrCabinet);
    }).catch(() => Promise.reject());
}

export default getCabinet;