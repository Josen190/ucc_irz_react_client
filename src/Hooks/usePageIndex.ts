import React, { useState } from "react";
import useEndOfPage from "./useEndOfPage";

export default function usePageIndex(componentRef?: React.RefObject<HTMLElement>) {
    const startIndex = 0;
    const [PageIndex, setPageIndex] = useState(startIndex);
    const [isEnd, setIsEnd] = useState(false)
    const nextPage = () => {
        setPageIndex(PageIndex + 1);
    }
    const restart = () => {
        setPageIndex(startIndex);
        setIsEnd(false);
    }

    const onEnd = () => {
        setIsEnd(true);
    }

    useEndOfPage(nextPage, componentRef, isEnd);

    return { PageIndex, restart, setIsEnd, onEnd};
}