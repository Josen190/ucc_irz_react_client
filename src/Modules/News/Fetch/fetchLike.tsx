
import ILikeStatus from "../Types/TypeLike";
import React from 'react';
import fetch from "Fetch/Fetch";
import { url_post_likes_like_news_entry, url_post_likes_unlike_news_entry } from "Constatnts/url";


export default async function switchLike(
    newsID: string,
    likeStatus: ILikeStatus,
    like_off: JSX.Element,
    like_on: JSX.Element): Promise<ILikeStatus> {
    const _isLiked = !likeStatus.isLiked;
    let result;

    const params = {
        newsEntryId: newsID,
    };

    if (_isLiked) {
        result = await fetch
            .post(url_post_likes_like_news_entry, undefined, { params })
            .then(() => {
                return {
                    isLiked: _isLiked,
                    likesCount: likeStatus.likesCount + 1,
                    like_use: like_off,
                } as ILikeStatus;
            })
    } else {
        result = await fetch.post(url_post_likes_unlike_news_entry, undefined, { params })
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
