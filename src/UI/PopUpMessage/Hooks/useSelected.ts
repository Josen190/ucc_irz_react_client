import {useAppDispatch} from "../../../Hooks";
import {useEffect} from "react";
import {select} from "../Reduser/PopUpStore";

function useSelected(isSelect: boolean) {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(select({isSelect}))
    }, []);
}

export default useSelected;