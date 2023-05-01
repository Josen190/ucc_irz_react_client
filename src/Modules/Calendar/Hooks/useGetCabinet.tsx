import useEndOfPage from "Hooks/useEndOfPage";
import usePageIndex from "Hooks/usePageIndex";
import React, { useEffect, useState } from "react";
import getCabinet from "../Fetch/getCabinet";
import MyDate from "Helpers/MyDate";
import Cabinet from "Helpers/Cabinet";
import RowCabinetInForm from "../Components/RowCabinetInForm/RowCabinetInForm";

export default function useGetCabinet(
    freeOnly: boolean,
    start: MyDate,
    end: MyDate,
    searchString: string | undefined,
    coolbac?: () => void,
) {
    const { pageIndex, nextPage } = usePageIndex();
    const [JSXCabinets, setJSXCabinets] = useState<JSX.Element[]>([]);
    const [curentCabinet, setCurentCabinet] = useState<Cabinet | null>(null);

    useEndOfPage(nextPage);
    useEffect(() => {

        const params = {
            FreeOnly: freeOnly,
            Start: start,
            End: end,
            SearchString: searchString,
            PageIndex: pageIndex,
        }

        getCabinet(params).then((arrCabinet) => {
            const _JSXCabinets = [...JSXCabinets];
            arrCabinet.forEach(cabinet => {
                _JSXCabinets.push(<RowCabinetInForm key={cabinet.id} cabinet={cabinet} setCabinet={setCurentCabinet} coolbac={coolbac} />);
            })
            setJSXCabinets(_JSXCabinets);
        })

    }, [pageIndex]);

    return {JSXCabinets, curentCabinet};
}