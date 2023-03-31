import React, { useState } from "react";
import Checkbox from "../basic/Checkbox";
import Button from "../basic/Button";
import "./news.css";
import API, { url_post_news } from "../../api/Api";
import InputField from "../basic/InputField";
import { notifyError, notifySuccess } from "../Notifications/Notifications";
function mergeMaps(map1, map2) {
    var mergedMap = new Map();
    map1.forEach(function (value, key) { return mergedMap.set(key, value); });
    map2.forEach(function (value, key) { return mergedMap.set(key, value); });
    return mergedMap;
}
export default function CreateTidings(_a) {
    var setActive = _a.setActive, updateNews = _a.updateNews;
    var _b = useState(""), title = _b[0], setTitle = _b[1];
    var _c = useState(""), content = _c[0], setContent = _c[1];
    var _d = useState(new Map()), images = _d[0], setImages = _d[1];
    var _e = useState(false), isGlobal = _e[0], setIsGlobal = _e[1];
    var handleImageChange = function (event) {
        // const files = Array.from(event.target.files);
        // const processFiles =  new  Promise((resolve) => {
        //   const _images = new Map();
        //   let processedCount = 0;
        //   files.forEach((file) => {
        //     const sendFile = {}
        //     sendFile.name = file.name.replace(/\.[^/.]+$/, "")
        //     sendFile.extension = file.name.split('.').pop();
        //     const reader = new FileReader();
        //     reader.onloadend = () => {
        //       sendFile.data = reader.result.replace("data:", "").replace(/^.+,/, "");
        //       _images.set(URL.createObjectURL(file), sendFile);
        //       processedCount++;
        //       if (processedCount === files.length) {
        //         resolve(_images);
        //       }
        //     };
        //     reader.readAsDataURL(file);
        //   });
        // });
        // processFiles.then((result) => {
        //   setImages((prevImages) => {
        //     return mergeMaps(prevImages, result);
        //   })
        // })
    };
    var createNews = function (event) {
        event.preventDefault();
        var data = {
            title: title,
            text: content,
            isPublic: isGlobal,
            image: images.size > 0 ? {} : null,
        };
        // if (images.size > 0){
        //   images.forEach((file) => {
        //     data.image.name = file.name;
        //     data.image.extension = file.extension;
        //     data.image.data = file.data;
        //   })
        // }
        API.post(url_post_news, data)
            .then(function (response) {
            notifySuccess("Новость создана");
            setActive(false);
            // setTitle("");
            // setContent("");
            // setImages(new Map());
            // setIsGlobal(false);
            if (typeof updateNews.update === "function")
                updateNews.update();
        })
            .catch(function (error) {
            notifyError("Новость не создана, попробуйте снова");
        });
    };
    console.log(images);
    return (React.createElement("div", { className: "modal", onClick: function () {
            setActive(false);
        } },
        React.createElement("form", { className: "column tile", onClick: function (e) {
                e.stopPropagation();
            }, onSubmit: function (e) { return createNews(e); } },
            React.createElement("h3", null, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u043E\u0441\u0442\u044C"),
            React.createElement(InputField, { type: "text", title: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A", onChange: function (event) { return setTitle(event.target.value); } }),
            React.createElement(InputField, { type: "textarea", rows: 15, onChange: function (event) { return setContent(event.target.value); } }),
            React.createElement("label", null,
                "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0438:",
                React.createElement("input", { type: "file", onChange: handleImageChange })),
            React.createElement("ul", null, Array.from(images.keys()).map(function (imageUrl) {
                return (React.createElement("li", { key: imageUrl },
                    React.createElement("img", { className: "image", src: imageUrl, alt: "\u041D\u043E\u0432\u043E\u0441\u0442\u044C" })));
            })),
            React.createElement(Checkbox, { title: "\u0413\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u0430\u044F \u043D\u043E\u0432\u043E\u0441\u0442\u044C", onChange: function (event) { return setIsGlobal(event.target.value === "true"); } }),
            React.createElement(Button, { type: "button", onClick: function () {
                    setActive(false);
                } }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
            React.createElement(Button, { type: "submit" }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))));
}
