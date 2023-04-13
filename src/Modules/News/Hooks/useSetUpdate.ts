import { useEffect } from "react";

export default function useSetUpdate(
    update: () => void,
    setUpdate: React.Dispatch<React.SetStateAction<(() => void) | undefined>>
) {
    useEffect(() => {
        setUpdate(update);
    }, [setUpdate]);
}