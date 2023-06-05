import {createAction, createSlice} from '@reduxjs/toolkit'
import message from "../../../Modules/Messenger/Helper/Message";
import popUpMessage from "../Components/PopUpMessage";

interface IPopUpState {
    isActive: boolean;
    isSelect: boolean | null;
    message: string | null;
}

const initialState: IPopUpState = {
    isActive: false,
    isSelect: null,
    message: null,
}

const PopUpReducer = createSlice({
    name: 'PopUpState',
    initialState,
    reducers: {
        setPopUp(_state, {payload}: {
                     type: string;
                     payload: {
                         message: string;
                     }
                 }
        ) {
            return {isActive: true, message: payload.message, isSelect: _state.isSelect};
        },

        select(_state, {payload}: {
            type: string;
            payload: {
                isSelect: boolean;
            }
        }){
            return {isActive: false, message: null, isSelect: payload.isSelect}
        }
    }

}
)

const test = createAction("SET_POP_UP", function prepare(message: string) {
    return {
        payload: {
            message
        }
    }
})

export const {
    setPopUp,
    select,
} = PopUpReducer.actions
export default PopUpReducer.reducer