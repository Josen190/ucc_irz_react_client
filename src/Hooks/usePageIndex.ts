import React, { useState } from "react";
import useEndOfPage from "./useEndOfPage";

export default function usePageIndex(componentRef?: React.RefObject<HTMLElement>) {
    const [pageIndex, setPageIndex] = useState(1);
    const [isEnd, setIsEnd] = useState(false)
    const nextPage = () => {
        setPageIndex(pageIndex + 1);
    }
    const restart = () => {
        setPageIndex(1);
    }

    useEndOfPage(nextPage, componentRef, isEnd);

    return { pageIndex, restart, setIsEnd};
}