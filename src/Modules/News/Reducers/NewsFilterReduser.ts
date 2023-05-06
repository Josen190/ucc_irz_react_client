import { createSlice } from '@reduxjs/toolkit'


export interface INewsFiler {
    AuthorId?: string;
    PublicOnly?: boolean;
    LikedOnly?: boolean;
    SearchString?: string;

}

interface filter_payload {
    type: string;
    payload: {
        AuthorId: string | undefined;
        PublicOnly: boolean | undefined;
        LikedOnly: boolean | undefined;
        SearchString: string | undefined;
    }
}

const initialState: INewsFiler = {
    AuthorId: undefined,
    PublicOnly: undefined,
    LikedOnly: undefined,
    SearchString: undefined,
}

const NewsFilterReducer = createSlice({
    name: 'NewsFilterState',
    initialState,
    reducers: {
        setFilter(_state, { payload }: filter_payload) {
            const _AuthorId = payload.AuthorId;
            const _PublicOnly = payload.PublicOnly;
            const _LikedOnly = payload.LikedOnly;
            const _SearchString = payload.SearchString;

            return {
                AuthorId: _AuthorId, 
                PublicOnly: _PublicOnly, 
                LikedOnly: _LikedOnly, 
                SearchString: _SearchString
            }
        },
    }
})



export const { setFilter } = NewsFilterReducer.actions
export default NewsFilterReducer.reducer
