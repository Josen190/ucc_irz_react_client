import {useAppDispatch} from "../../../Hooks";
import {setPopUp} from "../Reduser/PopUpStore";
import {useEffect} from "react";

function useSetPopUp(message: string) {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setPopUp({message}))
    }, []);
}

export default useSetPopUp;