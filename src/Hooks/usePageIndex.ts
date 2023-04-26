import { useState } from "react";

export default function usePageIndex(): [number, () => void]{
    const [pageIndex, setPageIndex] = useState(1);
    const nextPage = () => {
        setPageIndex(pageIndex + 1);
    }
    return [pageIndex, nextPage];
}