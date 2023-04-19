import API from "Fetch/Api";
import ILikeStatus from "../Types/TypeLike";
import React from 'react';


export default async function switchLike(
    newsID: string,
    likeStatus: ILikeStatus,
    like_off: JSX.Element,
    like_on: JSX.Element): Promise<ILikeStatus> 
{
    const _isLiked = !likeStatus.isLiked;
    let result;
    if (_isLiked) {
        result = await API.postLike(newsID)
            .then(() => {
                return {
                    isLiked: _isLiked,
                    likesCount: likeStatus.likesCount + 1,
                    like_use: like_off,
                } as ILikeStatus;
            })
    } else {
        result = await API.postUnlike(newsID)
            .then(() => {
                return {
                    isLiked: _isLiked,
                    likesCount: likeStatus.likesCount - 1,
                    like_use: like_on,
                }
            })
    }

    return result;
}
