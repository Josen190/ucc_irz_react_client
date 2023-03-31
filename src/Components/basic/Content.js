import React, { useState } from "react";
import { useEffect } from "react";
import API, { url_get_news_id_full_text } from "../../api/Api";
export default function Content(_a) {
    var id = _a.id, title = _a.title, isClipped = _a.isClipped, text = _a.text, image = _a.image;
    var _b = useState(isClipped !== null && isClipped !== void 0 ? isClipped : null), _isClipped = _b[0], setIsClipped = _b[1];
    var _c = useState(text), _text = _c[0], setText = _c[1];
    var _d = useState(null), formattedText = _d[0], setFormattedText = _d[1];
    useEffect(function () {
        var arrStr = text.split("\n");
        var arrP = [];
        console.log(arrStr);
        arrStr.forEach(function (element, index) {
            if (element.length === 0 || element === '\r')
                arrP.push(React.createElement("br", { key: index }));
            else
                arrP.push(React.createElement("p", { key: index }, element));
        });
        setFormattedText(arrP.length > 0 ? arrP : null);
    }, [text]);
    var getNews = function (event) {
        event.target.disabled = true;
        API.get(url_get_news_id_full_text(id)).then(function (response) {
            setText(response.data);
            setIsClipped(true);
            event.target.disabled = false;
        }).catch(function () { event.target.disabled = false; });
    };
    return (React.createElement("div", { className: "content" },
        title && React.createElement("h5", null, title),
        React.createElement("div", null,
            formattedText,
            _isClipped !== null && !_isClipped && (React.createElement("a", { role: "button", onClick: function (event) { return getNews(event); } }, "\u0427\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435"))),
        image && image.getImgJSX()));
}
