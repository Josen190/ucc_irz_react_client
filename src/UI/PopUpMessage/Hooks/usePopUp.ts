import {useAppSelector} from "../../../Hooks";
import useSetPopUp from "./useSetPopUp";

function usePopUp(message: string) {
    const {isSelect} = useAppSelector(s => s.popUp);
    useSetPopUp(message);
    return isSelect;
}

export default usePopUp;