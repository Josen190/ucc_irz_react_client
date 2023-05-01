import { useState } from "react";

export default function usePageIndex() {
    const [pageIndex, setPageIndex] = useState(1);
    const nextPage = () => {
        setPageIndex(pageIndex + 1);
    }
    const restart = () => {
        setPageIndex(1);
    }
    return { pageIndex, nextPage, restart };
}