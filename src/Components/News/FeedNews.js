import React, { useEffect, useState } from "react";
import API, { url_get_news } from "../../api/Api";
import Tidings from "./Tidings";
export default function FeedNews(_a) {
    var userID = _a.userID, publicOnly = _a.publicOnly, likedOnly = _a.likedOnly, setUpdate = _a.setUpdate;
    var _b = useState([]), arrNews = _b[0], setArrNews = _b[1];
    var _c = useState(0), pageIndex = _c[0], setPageIndex = _c[1];
    var _d = useState(0), deleteKeyElement = _d[0], setDeleteKeyElement = _d[1];
    useEffect(function () {
        var arr = arrNews.filter(function (element) {
            return element.key !== deleteKeyElement;
        });
        setArrNews(arr);
    }, [deleteKeyElement]);
    var getNews = function () {
        var _userID = userID !== null && userID !== void 0 ? userID : null;
        var _publicOnly = publicOnly !== null && publicOnly !== void 0 ? publicOnly : null;
        var _likedOnly = likedOnly !== null && likedOnly !== void 0 ? likedOnly : null;
        var pageSize = 10;
        var params = {
            PageIndex: pageIndex,
            PageSize: pageSize,
        };
        if (_userID != null) {
            params.AuthorId = _userID;
        }
        if (_publicOnly != null) {
            params.PublicOnly = _publicOnly;
        }
        if (_likedOnly != null) {
            params.LikedOnly = _likedOnly;
        }
        API.get(url_get_news, { params: params })
            .then(function (response) {
            var _arrNews = [];
            _arrNews.push.apply(_arrNews, arrNews);
            response.data.forEach(function (tiding) {
                _arrNews.push(React.createElement(Tidings, { key: tiding.id, tidings: tiding, deletElement: setDeleteKeyElement }));
            });
            setArrNews(_arrNews);
            if (response.data.length === pageSize)
                setPageIndex(pageIndex + 1);
        })
            .catch(function (error) { });
    };
    var update = function () {
        // setArrNews([]);
        getNews();
    };
    useEffect(getNews, [pageIndex]);
    useEffect(function () {
        if (typeof setUpdate === "function")
            setUpdate({ update: update });
    }, [setUpdate]);
    return React.createElement("main", { className: "column" }, arrNews);
}
