var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState } from "react";
import API, { url_post_likes_like_news_entry, url_post_likes_unlike_news_entry, } from "../../api/Api";
import SvgHeart from "../icons/Heart";
import SvgHeartOutline from "../icons/HeartOutline";
import { notifyError } from "../Notifications/Notifications";
var size = "25px";
var Like = function (_a) {
    var isLiked = _a.isLiked, likesCount = _a.likesCount, newsID = _a.newsID;
    var llke_off = React.createElement(SvgHeart, { size: size });
    var like_on = React.createElement(SvgHeartOutline, { size: size });
    var _b = useState({
        isLiked: isLiked,
        likesCount: likesCount,
        like_use: isLiked ? llke_off : like_on,
    }), like = _b[0], setLikeUse = _b[1];
    var disableBtnProps = {
        disabled: true
    };
    var switchLike = function () {
        disableBtnProps.disabled = false;
        var thisIsLiked = !like.isLiked;
        var thisLikesCount = like.likesCount;
        var params = {};
        if (typeof newsID === "string") {
            params.newsEntryId = newsID;
        }
        if (thisIsLiked) {
            API.post(url_post_likes_like_news_entry, undefined, {
                params: params,
            })
                .then(function () {
                thisLikesCount++;
                setLikeUse({
                    isLiked: thisIsLiked,
                    likesCount: thisLikesCount,
                    like_use: llke_off,
                });
                disableBtnProps.disabled = true;
            })
                .catch(function () {
                notifyError("Ошибка, попробуйте снова");
                disableBtnProps.disabled = true;
            });
        }
        else {
            API.post(url_post_likes_unlike_news_entry, undefined, {
                params: params,
            })
                .then(function () {
                thisLikesCount--;
                setLikeUse({
                    isLiked: thisIsLiked,
                    likesCount: thisLikesCount,
                    like_use: like_on,
                });
                disableBtnProps.disabled = true;
            })
                .catch(function () {
                notifyError("Ошибка, попробуйте снова");
                disableBtnProps.disabled = true;
            });
        }
    };
    var button = (React.createElement("button", __assign({}, disableBtnProps, { onClick: switchLike, className: "icon row" }),
        React.createElement("span", null, like.likesCount),
        like.like_use));
    return React.createElement("div", { className: "icon" }, button);
};
export default Like;
