
export default function usePageIndex(componentRef?: React.RefObject<HTMLElement>) {
    const [PageIndex, setPageIndex] = useState(0);
    const [isEnd, setIsEnd] = useState(false)
    const nextPage = () => {
        setPageIndex(PageIndex + 1);
    }
    const restart = () => {
        setPageIndex(1);
        setIsEnd(false);
    }

    const onEnd = () => {
        setIsEnd(true);
    }

    useEndOfPage(nextPage, componentRef, isEnd);

    return { PageIndex, restart, setIsEnd, onEnd};
}