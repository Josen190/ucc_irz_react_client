import { url_get_cabinets } from "Constatnts/url";
import API from "Fetch/Api";
import PropsCabinet from "Fetch/Interface/ICabinet";
import Cabinet from "Helpers/Cabinet";
import MyDate from "Helpers/MyDate";

interface IParams{
    FreeOnly: boolean,
    Start: MyDate,
    End: MyDate,
    SearchString: string | undefined,
    PageIndex: number,
    PageSize?: number,
}

async function getCabinet({FreeOnly, Start, End, PageIndex, SearchString, PageSize = 10 }: IParams) {
    const params: {[keys: string]: string | number | boolean} = {
        FreeOnly, 
        Start: Start.toISOString(), 
        End: End.toISOString(), 
        PageIndex,
        PageSize, 
    }
    if (SearchString) params.SearchString = SearchString;

    const result =  API.get(url_get_cabinets, {params}).then((response) => {
        const _arrCabinet: Cabinet[] = [];
        response.data.forEach((cabinet:PropsCabinet)=> {
            _arrCabinet.push(new Cabinet(cabinet))
        });

        return Promise.resolve(_arrCabinet);
    }).catch(() => Promise.reject())

    return result;
}

export default getCabinet;